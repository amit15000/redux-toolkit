import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/CounterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.bhalue);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-y-7 mx-auto">
      <button onClick={() => dispatch(increment())}>Increment</button>
      <div className="mx-auto">{count}</div>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
