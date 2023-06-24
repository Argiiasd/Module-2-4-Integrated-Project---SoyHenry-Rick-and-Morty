import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions";

let initialState = {
    myFavorites: [],
    allCharacters:[]
};

export default function rootReducer(state=initialState, action){
    
    switch (action.type) {
        case ADD_FAV:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        case REMOVE_FAV:
            return { ...state, myFavorites: action.payload };
        case FILTER:
            const filteredCharacters = state.allCharacters.filter(character => character.gender === action.payload);
            return {
                ...state,
                myFavorites: filteredCharacters
            }
        case ORDER:
            return {
                ...state,
                myFavorites:
                    action.payload === "A" ? state.allCharacters.sort((a, b) => a.id - b.id) : state.allCharacters.sort((a, b) => b.id - a.id)
            }
        default:
            return {
                ...state
            }
    }
}