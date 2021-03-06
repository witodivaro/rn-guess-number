import GameActionTypes from './game.types';
import GAME_STATUS from '../../constants/game-status';

const initialState = {
  status: GAME_STATUS.NOT_STARTED,
  guessAttempts: 0,
};

const gameReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GameActionTypes.START_GAME:
      if (state.status === GAME_STATUS.STARTED) return state;

      return {...state, status: GAME_STATUS.STARTED};

    case GameActionTypes.END_GAME:
      if (state.status === GAME_STATUS.OVER) return state;

      return {
        ...state,
        status: GAME_STATUS.OVER,
      };

    case GameActionTypes.RESET_GAME:
      if (state.status === GAME_STATUS.NOT_STARTED) return state;

      return {
        ...state,
        status: GAME_STATUS.NOT_STARTED,
      };

    case GameActionTypes.SET_GUESS_ATTEMPS:
      if (payload === state.value) return state;

      return {...state, guessAttempts: payload};

    default:
      return state;
  }
};

export default gameReducer;
