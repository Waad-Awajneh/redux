import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { deleteProduct, getProducts } from "./Reducers/products/actions";
function App() {
  const { data, error, loading } = useSelector(
    (state) => state.ProductsReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handelDelete = () => {
    dispatch(deleteProduct(1));
  };

  return (
    <>
      {" "}
      <div className="App">
        {data?.map((product) => {
          return <div key={product.id}> {product.title}</div>;
        })}
      </div>
      <button onClick={handelDelete}>delete</button>
    </>
  );
}

export default App;
