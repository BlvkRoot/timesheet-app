export const initialState = {
  timesheets: [],
  user_token: null,
  is_authenticated: false,
  super_user: false,
  user_id: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TIMESHEETS':
      return {
        ...state,
        timesheets: action.timesheets,
      };
    case 'SET_USER':
      return {
        ...state,
        user_token: action.token,
      };
    case 'SET_USERID':
      return {
        ...state,
        user_id: action.userId,
      };
    case 'SET_ISAUTHENTICATED':
      return {
        ...state,
        is_authenticated: action.authenticated,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer
