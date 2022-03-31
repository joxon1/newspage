const initialState = {
  news: [],
  newsLoadingStatus: "Jox",
  filters: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEWS_FETCHING":
      return {
        ...state,
        newsLoadingStatus: "loading"
      };
    case "NEWS_FETCHED":
      return {
        ...state,
        news: action.payload,
        newsLoadingStatus: "Jox"
      };
    case "NEWS_FETCH_ERROR":
      return {
        ...state,
        newsLoadingStatus: "error"
      };
    default:
      return state;
  }
};
export default reducer;
