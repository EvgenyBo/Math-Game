// GAME DATA

export const SET_GAME_NAME = 'SET_GAME_NAME';
export const SET_GAME_TYPE = 'SET_GAME_TYPE';
export const SET_SCORE = 'SET_SCORE';
export const SHOW_GAME_OVER = 'SHOW_GAME_OVER';
export const SET_GAME_STARTED = 'SET_GAME_STARTED';

export const setGameName = name => ({
  type: SET_GAME_NAME,
  payload: name,
});
export const setGameType = type => ({
  type: SET_GAME_TYPE,
  payload: type,
});
export const setScore = score => ({
  type: SET_SCORE,
  payload: score,
});
export const setShowGameOverModal = isVisible => ({
  type: SHOW_GAME_OVER,
  payload: isVisible,
});
export const setGameStarted = gameStarted => ({
  type: SET_GAME_STARTED,
  payload: gameStarted,
});

// THEME

export const CHANGE_THEME = 'CHANGE_THEME';

export const changeTheme = theme => ({
  type: CHANGE_THEME,
  payload: theme,
});

// USER DATA

export const SET_UID = 'SET_UID';
export const SET_USER_NAME = 'SET_USER_NAME';

export const setUid = uid => ({
  type: SET_UID,
  payload: uid,
});
export const setUserName = userName => ({
  type: SET_USER_NAME,
  payload: userName,
});

// TIMER

export const SET_TIME_LEFT = 'SET_TIME_LEFT';
export const SET_INIT_TIME = 'SET_INIT_TIME';
export const SET_IS_ACTIVE_TIMER = 'SET_IS_ACTIVE_TIMER';

export const setTimeLeft = time => ({
  type: SET_TIME_LEFT,
  payload: Math.round(time * 1e2) / 1e2,
});
export const setInitTime = initTime => ({
  type: SET_INIT_TIME,
  payload: initTime,
});
export const setIsActiveTimer = isActive => ({
  type: SET_IS_ACTIVE_TIMER,
  payload: isActive,
});
