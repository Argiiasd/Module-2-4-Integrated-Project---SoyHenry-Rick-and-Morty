import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addFavorite = (character) => {
    try {
        const endpoint = 'http://localhost:3001/rickandmorty/fav';
        return async (dispatch) => {
            const {data} = await axios.post(endpoint, character)
            return dispatch({
                type: 'ADD_FAV',
                payload: data,
            });
        };
    }
    catch (error) {
        console.log("Mensaje de error");
    }
};

export const removeFavorite = (id) => {
    try{
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
       const {data} = axios.delete(endpoint)
          return dispatch({
             type: 'REMOVE_FAV',
             payload: data,
       });
    };
    }
    catch(error){
        console.log("Mensaje de error");
    }
 };

export function filterCards(gender){
    return{
        type: FILTER,
        payload: gender
    };
};

export function orderCards(order){
    return{
        type: ORDER,
        payload: order
    };
};


