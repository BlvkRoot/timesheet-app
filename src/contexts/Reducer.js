export const initialState = {
  timesheets: [],
  user_token: null,
  is_authenticated: false,
  superUser: false,
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
