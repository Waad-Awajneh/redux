import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie, getMovieData } from "./Reducers/movies/action";
import movieReducer from "./Reducers/movies/reducer";

function App2() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.movieReducer);
  useEffect(() => {
    dispatch(getMovieData());
  }, [dispatch]);
  const handelDelete = (id) => {
    dispatch(deleteMovie(id));
  };
  return (
    <div>
      {data?.map((e) => (
        <>
          <p> {e.title}</p>
          <button onClick={() => handelDelete(e.id)}>Delete</button>
        </>
      ))}
    </div>
  );
}

export default App2;
