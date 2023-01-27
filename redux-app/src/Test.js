import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCars, getCars } from "./Reducers/cars/actions";


export default function Test() {
  const { data, error, loading } = useSelector((state) => state.CarsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const handelDelete=(id) =>{
    dispatch(deleteCars(id))
  }

  

  return (
    <div>
       { console.log(data)}
      {data?.map((car) => {
        return (
          <div key={car.id}>
            {car.title}
            <button onClick={() => handelDelete(car.id)}> Delete</button>
          </div>
        );
      })}
    </div>
  );
}
