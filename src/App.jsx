import { BaseLayout } from "./Components/BaseLayout";
import { useMachine } from "@xstate/react";
import { bookingMachine } from "./machines/bookingMachine";
function App() {
  const [state, send] = useMachine(bookingMachine);
  console.log("nuestra máquina", state);
  console.log("matches true", state.matches("inicio"));
  console.log("matches false", state.matches("tickets"));
  console.log("can", state.can("Start"));
  return <BaseLayout />;
}

export default App;
