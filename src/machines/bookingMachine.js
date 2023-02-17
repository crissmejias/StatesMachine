import { assign, createMachine } from "xstate";

const bookingMachine = createMachine({
  id: "bookingMachine",
  initial: "inicio",
  context:{
    passengers: [],
    selectedCountry: '',
  },
  states: {
    inicio: {
      on: {
        Start: {
          target: "search",
        },
      },
    },
    search: {
      
      on: {
        Continue: {
          target: "passengers",
          actions: assign({
            selectedCountry: (context,event)=>{
             return event.selectedCountry
            }})
        },
        Cancel:{
          target: "inicio",
          actions: assign({
            selectedCountry: (context, event)=>{ return ''},
            passengers: (context, event)=>{return []}
          })
      }
      },
    },
    passengers: {
      on: {
        Confirm: "tickets",
        Cancel:{
          target: "inicio",
          actions: assign({
            selectedCountry: (context, event)=>{ return ''},
            passengers: (context, event)=>{return []}
          })
      },
        Add: {
          target: 'passengers',
          actions: assign(
            (context, event)=> context.passengers.push(event.newPassenger)
          )
        }
      },
    },
    tickets: {
      on: {
        Done: "inicio",
      },
    },
  }
}
);
export { bookingMachine };
