import { combineReducers } from 'redux';
import theme from 'store/reducers/themeReducer';
import userData from 'store/reducers/userDataReducer';
import gameData from 'store/reducers/gameDataReducer';
import timer from 'store/reducers/timerReducer';

const rootReducer = combineReducers({
  theme,
  userData,
  gameData,
  timer,
});

export default rootReducer;
