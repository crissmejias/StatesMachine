import { bookingMachine } from "../machines/bookingMachine";
import { Nav } from "./Nav";
import { Steps } from "./Steps";
import { useMachine } from "@xstate/react";

const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine);
  return (
  <div className={`bg-travel w-full h-screen bg-center bg-cover flex justify-center items-center flex-col p-[50px]`}>
    <Nav state={state} send={send}/>
    <Steps state={state} send={send}/>
  </div>)
};
export { BaseLayout };
