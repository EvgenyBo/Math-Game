import * as actions from 'store/actions';

const initialState = {
  themeMode: 'light',
};

const Theme = (theme = initialState, action) => {
  switch (action.type) {
    case actions.CHANGE_THEME:
      return {
        ...theme,
        themeMode: action.payload,
      };
    default:
      return theme;
  }
};

export default Theme;
