const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'CONTACTS':
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default reducer;
