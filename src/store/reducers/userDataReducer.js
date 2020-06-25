import * as actions from 'store/actions';

const initialState = {
  isAuthenticated: false,
  uid: null,
  userName: 'User A',
  isNewUser: false,
};

const UserData = (userData = initialState, action) => {
  switch (action.type) {
    case actions.SET_UID:
      return {
        ...userData,
        uid: action.payload,
      };
    case actions.SET_USER_NAME:
      return {
        ...userData,
        userName: action.payload,
      };
    default:
      return userData;
  }
};

export default UserData;
