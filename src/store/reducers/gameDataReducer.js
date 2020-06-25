import * as actions from 'store/actions';

const initialState = {
  gameName: 'arcade',
  gameType: 'mixed',
  initDuration: 10,
  operations: {
    plus: true,
    minus: true,
    multiply: true,
    divide: true,
  },
  score: 0,
  showGameOverModal: false,
  isTimerActive: false,
  isGameStarted: false,
};

const unselectedOperations = {
  plus: false,
  minus: false,
  multiply: false,
  divide: false,
};

const GameData = (gameData = initialState, action) => {
  switch (action.type) {
    case actions.SET_GAME_NAME:
      return {
        ...gameData,
        gameName: action.payload,
      };
    case actions.SET_GAME_TYPE:
      return {
        ...gameData,
        operations: { ...unselectedOperations, [action.payload]: true },
        gameType: action.payload,
      };
    case actions.SET_GAME_STARTED:
      return {
        ...gameData,
        isGameStarted: action.payload,
      };
    case actions.SET_SCORE:
      return {
        ...gameData,
        score: action.payload,
      };
    case actions.SHOW_GAME_OVER:
      return {
        ...gameData,
        showGameOverModal: action.payload,
      };
    default:
      return gameData;
  }
};

export default GameData;
