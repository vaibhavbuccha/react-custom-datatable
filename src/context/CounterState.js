import { CounterContext } from "./CounterContext";

const CounterState = (props) => {
  const state = [];

  const add = (user) => {
    state.push({ ...user });
  };

  return (
    <CounterContext.Provider value={{ state, add }}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterState;
