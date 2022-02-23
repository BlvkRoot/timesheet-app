export const initialState = {
  timesheets: [],
  user_token: null,
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
    default:
      return {
        ...state,
      };
  }
};

export default reducer
