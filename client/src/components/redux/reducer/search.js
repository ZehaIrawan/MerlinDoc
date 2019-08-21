const query = (state = {}, action) => {
  const { type, query } = action;

  switch (type) {
    case 'ADD_URL': {
      console.log('remove');
    }
    default:
      return state;
  }
};

export default query;
