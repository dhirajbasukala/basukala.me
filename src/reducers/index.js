
const initialState = {
  isLoading: false,
  movies: [],
  gists: []
}
const app = (state = initialState, action = {}) => {
  switch(action.type){
    case "FETCH_START": {
      return { ...state, isLoading: true }
    }
    case "FETCH_MOVIES_SUCCEEDED": {
      return { ...state, movies: action.response, isLoading: true }
    }
    case "FETCH_GISTS_SUCCEEDED": {
      const { gists } = action;
      return { ...state, gists, isLoading: false }
    }
    default: 
    return state;
  }
}

export default app;