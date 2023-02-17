import { createMachine } from "xstate";

const bookingMachine = createMachine({
  id: "bookingMachine",
  initial: "inicio",
  states: {
    inicio: {
      on: {
        Start: "search",
      },
    },
    search: {
      on: {
        Continue: "passengers",
        Cancel: "inicio",
      },
    },
    passengers: {
      on: {
        Confirm: "tickets",
        Cancel: "inicio",
      },
    },
    tickets: {
      on: {
        Done: "inicio",
      },
    },
  },
});
export { bookingMachine };
