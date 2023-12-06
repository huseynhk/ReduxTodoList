import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increament,
  decrement,
  resetCount,
  increamentAmounth,
  decrementAmounth,
} from "../features/slices/counterSlice";

const Counter = () => {
  const number = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  const resetAllCount = () => {
    setAmount(0);
    dispatch(resetCount());
  };
  const addNumber = () => {
    dispatch(increamentAmounth(Number(amount)));
    setAmount(0);
  };
  const SubtractNumber = () => {
    dispatch(decrementAmounth(Number(amount)));
    setAmount(0);
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h1 className="mt-4">Count: {number}</h1>
        <div className="my-4 ms-5">
          <button
            className="btn btn-danger text-white  px-3 py-2"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <input
            type="text"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            className="p-3 w-50 mx-3"
          />
          <button
            className="btn btn-info text-white  px-3 py-2"
            onClick={() => dispatch(increament())}
          >
            +
          </button>
        </div>

        <div>
          <button
            className="btn btn-danger text-white ms-3 p-3"
            onClick={SubtractNumber}
          >
            Subtract
          </button>
          <button
            className="btn btn-warning text-white mx-3 p-3"
            onClick={resetAllCount}
          >
            Reset
          </button>

          <button
            className="btn btn-info text-white ms-3 p-3 px-4"
            onClick={addNumber}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
