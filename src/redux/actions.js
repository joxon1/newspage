export const newsFetching = () => {
  return {  
    type: "NEWS_FETCHING"
  }
}
export const newsFetched = (news) => { 
  return {
    type: "NEWS_FETCHED",
    payload: news
  }
}
export const newsFetchedError = () => {
  return {
    type: "NEWS_FETCH_ERROR"
  }
}