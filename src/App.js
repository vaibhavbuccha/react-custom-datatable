import AddStudent from "./components/AddStudent";
import CounterState from "./context/CounterState";

function App() {
  return (
    <CounterState>
      <AddStudent />
    </CounterState>
  );
}

export default App;
