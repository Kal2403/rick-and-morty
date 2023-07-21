import { act } from "react-dom/test-utils";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";

const initialState = {
  myFavorites: [],
  allCharacters: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload]
      }

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((favorite) => favorite.id !== action.payload)
      }
    
    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter((charater) => charater.gender === action.payload)
      }

    case ORDER:
      return {
        ...state,
        myFavorites: [...state.myFavorites].sort((a, b) => {
          if(action.payload === "A") {
            return a.id - b.id;
          } else if (action.payload === "D") {
            return b.id - a.id;
          }
        })
      }

    default: 
      return {
        ...state
      }
  }
}

export default reducer;
