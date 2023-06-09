import {
  GET_ALL_GAMES,
  GET_GAMES_BY_NAME,
  GET_GAME_BY_ID,
  POST_GAME,
  GET_USER_BY_ID,
  GET_USER_BY_NAME,
  GET_USER_BY_EMAIL,
  CREATE_USER,
  LOG_OUT,
  DELETE_USER,
  UPDATE_USER,
  GET_GAMES_WITH_PAGINATION,
  GET_GAME_MODE,
  GET_ALL_POSTS,
  GET_POST_BY_USER_ID,
  GET_POST_WITH_PAGINATION,
  CREATE_POST,
  ORDER,
  GET_ALL_USERS,
  ADD_FAVORITE,
  DELETE_FAVORITE,
  GET_ADMINS,
  DELETE_GAME,
  GET_USERS_WITH_PAGINATION,
  GET_GENRES,
  CREATE_RESPONSE,
  GET_RESPONSE,
  DELETE_RESPONSE,
  GET_RESPONSE_BY_POST_ID,
  GET_ALL_FAVORITES
} from "./action-types";

const initialState = {
  admins: [],
  games: [],
  game: [],
  gameMode: [],
  genre: [],
  myFavorites: [],
  favoritesCount: [],
  pageGames: [],
  posts: [],
  pagePosts: [],
  pageUsers: [],
  otherUser: [],
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : [],
  users: [],
  userPosts: [],
  response: [],
  responseByPostId: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_GAMES:
      return {
        ...state,
        games: action.payload,
      };
    case GET_GAME_BY_ID:
      return {
        ...state,
        game: action.payload,
      };
    case GET_GAMES_BY_NAME:
      return {
        ...state,
        games: action.payload,
      };
    case GET_GAMES_WITH_PAGINATION:
      return {
        ...state,
        pageGames: action.payload,
      };

    case CREATE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        otherUser: action.payload,
      };
    case GET_USER_BY_NAME:
      return {
        ...state,
        user: action.payload,
      };
    case GET_USER_BY_EMAIL:
      return {
        ...state,
        user: action.payload,
      };

    case GET_ADMINS:
      return {
        ...state,
        admins: action.payload,
      };

    case LOG_OUT:
      return {
        ...state,
        user: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case DELETE_GAME:
      return {
        ...state,
        user: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_GAME_MODE:
      return {
        ...state,
        gameMode: action.payload,
      };
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case GET_POST_BY_USER_ID:
      return {
        ...state,
        userPosts: action.payload,
      };
    case GET_POST_WITH_PAGINATION:
      return {
        ...state,
        pagePosts: action.payload,
      };
    case GET_USERS_WITH_PAGINATION:
      return {
        ...state,
        pageUsers: action.payload,
      };
    case CREATE_POST:
      return {
        ...state,
        posts: action.payload,
      };
    case ORDER:
      const allPosts = [...state.posts];
      const orderedGamesByCreation =
        action.payload === "A"
          ? allPosts.sort((a, b) => a.id - b.id)
          : action.payload === "D"
          ? allPosts.sort((a, b) => b.id - a.id)
          : [...state.posts];
      return {
        ...state,
        posts: orderedGamesByCreation,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        otherUser: action.payload,
      };
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: action.payload,
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (favorite) => favorite.id !== action.payload.id
        ),
      };
    case POST_GAME:
      return {
        ...state,
        games: [...state.games, action.payload],
      };
    case GET_GENRES:
      return {
        ...state,
        genre: action.payload,
      };
      case CREATE_RESPONSE:
        return {
          ...state,
          response: action.payload,
        };
      case GET_RESPONSE:
        return {
          ...state,
          response: action.payload,
        };
      case DELETE_RESPONSE:
        return {
          ...state,
          response: action.payload,
        };
      case GET_RESPONSE_BY_POST_ID:
        return {
            ...state,
          responseByPostId: {...state.responseByPostId, [action.payload]: []
            },
          };
      case GET_ALL_FAVORITES:
        return{
          ...state,
          favoritesCount:action.payload
        }
    default:
      return {
        ...state,
      };

  }
};

export default reducer;