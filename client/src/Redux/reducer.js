import { 
    GET_ALL_GAMES, 
    GET_GAMES_BY_NAME,
    GET_GAME_BY_ID,  
    POST_GAME,
    CREATE_USER,
    GET_USER_BY_ID
} from './action-types';

const initialState = {
    games: [],
    game: [],
    post: [],
    user: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_GAMES:
            return {
                ...state,
                games: action.payload,
                filter: true
            }
        case GET_GAME_BY_ID:
            return {
                ...state,
                game: action.payload,
            }
        case GET_GAMES_BY_NAME:
            return {
                 ...state,
                 games: action.payload,
                }

        case CREATE_USER:
            return {
                ...state,
        case GET_USER_BY_ID:
            return {
              ...state,
                user: action.payload,
            }
        case GET_USER_BY_NAME:
            return {
              ...state,
                user: action.payload,
            }
        case GET_USER_BY_EMAIL:
            return {
             ...state,
                user: action.payload,
            }
        default:
                return {
                    ...state
                };
    }
};

export default reducer;