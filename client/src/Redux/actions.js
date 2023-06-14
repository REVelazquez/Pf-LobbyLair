import { 
    GET_ALL_GAMES, 
    GET_GAMES_BY_NAME,
    GET_GAME_BY_ID,  
} from './action-types';
import axios from 'axios';

export const getAllGames = () => {
    return async (dispatch) => {
        const dogs = await axios.get('http://localhost:3001/games');
        dispatch({
            type: GET_ALL_GAMES,
            payload: dogs.data
        })
    }
};

export const getGameById = (id) => async(dispatch) => {
    try {
        const gameId = await axios(`http://localhost:3001/games/${id}`);
        return dispatch({
            type: GET_GAME_BY_ID,
            payload: gameId.data
        });
    } catch (error) {
        throw new Error(error);
    }
};
export const getGamesByName = (name) => async(dispatch) => {
    try {
        const gameName = await axios(`http://localhost:3001/games?name=${name}`);
        return dispatch({
            type: GET_GAMES_BY_NAME,
            payload: gameName.data
        });
    } catch (error) {
        alert('Game does not exist!')
    }
};