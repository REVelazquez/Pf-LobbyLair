import { 
    GET_ALL_GAMES, 
    GET_GAMES_BY_NAME,
    GET_GAME_BY_ID,  
    POST_GAME
} from './action-types/';

const initialState = {
    games: [],
    game: [],
    post: [],
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

        default:
                return {
                    ...state
                };
    }
};

export default reducer;