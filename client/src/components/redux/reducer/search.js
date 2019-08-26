const initialState = {};
function query(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return { ...state, query:action.payload };
    case 'DEC':
      return { ...state, count: state.count - 1 };
    case 'RESET':
      return { ...state, count: 0 };
    default:
      return state;
  }
}

export default query;
