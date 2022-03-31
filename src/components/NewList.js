import { useHttp } from "../hooks/useHttp";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { newsFetching, newsFetched, newsFetchedError } from "../redux/actions";
import Spinner from "./Spinner";
import Error from "./Error";
import NewListItem from "./NewListItem";

export default function NewList() {
  const { news, newsLoadingStatus } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { request } = useHttp();
 
  console.log(news);

  useEffect(() => {
    dispatch(newsFetching());
    request("http://localhost:3001/news")
      .then((data) => dispatch(newsFetched(data)))
      .catch(() => dispatch(newsFetchedError()));
  }, []);

  if (newsLoadingStatus === "loading") {
    return <Spinner />;
  } else if (newsLoadingStatus === "error") {
    return <Error />;
  }

  const renderNewsList = (arr) => {
    if (arr.length === 0) {
      return <h4 className="text-center mt-5">News don't exists</h4>;
    }
    return arr.map(({ id, ...props }) => {
      return <NewListItem key={id} {...props} />;
    });
  };

  const element = renderNewsList(news);

  return <ul className="list-group">{element}</ul>;
}
