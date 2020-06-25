import * as actions from 'store/actions';

const initialState = {
  initTime: 10,
  isTimerActive: false,
  timeLeft: 0,
};

const Timer = (timer = initialState, action) => {
  switch (action.type) {
    case actions.SET_INIT_TIME:
      return {
        ...timer,
        initTime: action.payload,
      };
    case actions.SET_TIME_LEFT:
      return {
        ...timer,
        timeLeft: action.payload,
      };
    case actions.SET_IS_ACTIVE_TIMER:
      return {
        ...timer,
        isTimerActive: action.payload,
      };
    default:
      return timer;
  }
};

export default Timer;
