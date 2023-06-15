import { 
    GET_ALL_GAMES, 
    GET_GAMES_BY_NAME,
    GET_GAME_BY_ID,  
    POST_GAME
} from './action-types';
import axios from 'axios';

export const getAllGames = () => {
    return async (dispatch) => {
        const games = await axios.get('http://localhost:3001/games');
        dispatch({
            type: GET_ALL_GAMES,
            payload: games.data
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
export const postGames= (payload)=>{
    return async (dispatch)=>{
        try {
            let newGame = await axios.post('http://localhost:3001/games', payload);
            return dispatch({
                type:POST_GAME,
                payload: newGame.data
            })
        } catch (error) {
            throw new Error(error);
        }
    }
    
}