import axios from 'axios';
import {
    GET_ALL_GAMES,
    GET_GAMES_BY_NAME,
    GET_GAME_BY_ID,
    POST_GAME,
    GET_USER_BY_ID,
    GET_USER_BY_NAME,
    GET_USER_BY_EMAIL,
    CREATE_USER,
} from './action-types';

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

export const createUser = (payload) => {
    return async (dispatch) => {
        try {
            let newUser = await axios.post('http://localhost:3001/users', payload);
          return dispatch({
            type:CREATE_USER,
            payload: newUser.data
        })
        } catch (error) {
            throw new Error(error);
        }
    }
}

export const getUserById = (id) => async(dispatch) => {
    try {
        const userId = await axios(`http://localhost:3001/users/${id}`);
        return dispatch({
            type: GET_USER_BY_ID,
            payload: userId.data
        });
    } catch (error) {
        throw new Error(error);
    }
};
export const getUserByName = (name) => async(dispatch) => {
    try {
        const userName = await axios(`http://localhost:3001/users?name=${name}`);
        return dispatch({
            type: GET_USER_BY_NAME,
            payload: userName.data
        });
    } catch (error) {
        throw new Error(error);
    }
};
export const getUserByEmail = (email) => async(dispatch) => {
    try {
        const userEmail = await axios(`http://localhost:3001/users?email=${email}`);
        return dispatch({
            type: GET_USER_BY_EMAIL,
            payload: userEmail.data
        });
    } catch (error) {
        throw new Error(error);
    }
};
