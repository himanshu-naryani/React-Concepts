import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { counterIncrement, counterDecrement } from "../../redux/action";

function Counter(props) {
  const counter = useSelector((state) => state);

  const dispatch = useDispatch();
  return (
    <div>
      <h4>Counter: {counter}</h4>
      {/* <button onClick={() => props.increment(2)}>+</button>
      <button onClick={() => props.decrement(1)}>-</button> */}
      <button onClick={() => dispatch(counterIncrement(2))}>+</button>
      <button onClick={() => dispatch(counterDecrement(1))}>-</button>
    </div>
  );
}

// function mapStateToProps(state) {
//   return {
//     counter: state,
//   };
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: (payload) => dispatch(counterIncrement(payload)),
//     decrement: (payload) => dispatch(counterDecrement(payload)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;
