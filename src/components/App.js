import NavBar from "./NavBar";
import NewAddForm from "./NewAddForm";
import NewList from "./NewList";
import NewsFilter from "./NewsFilter";

export default function App() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <NewList />
        <div className="content__page">
          <NewAddForm />
          <NewsFilter />
        </div>
      </div>
    </div>
  );
}
