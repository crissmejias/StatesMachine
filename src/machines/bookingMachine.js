import { assign, createMachine } from "xstate";
import { fetchCountries } from "../Utils/fetchCountries";
const fillCountries = {
  initial: "loading",
  states: {
    loading: {
      invoke:{
        id: 'getCountries',
        src: () => fetchCountries,
        onDone:{
          target: 'success',
          actions: assign({countries: (context,event) => event.data })
        },
        onError:{
          target: 'failure',
          actions: assign({error: 'falló el request'})
        } 
      }
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: "loading" },
      },
    },
  },
};

const bookingMachine = createMachine({
  id: "bookingMachine",
  initial: "inicio",
  context:{
    passengers: [],
    selectedCountry: '',
    countries: [],
    error: '',
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
      },
    },
    ...fillCountries
    },
    passengers: {
      on: {
        Confirm: "tickets",
        Cancel:{
          target: "inicio",
          actions: assign({
            selectedCountry:'',
            passengers: []
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
      after:{
        5000:{
          target: 'inicio',
          actions: assign({
            selectedCountry:'',
            passengers: []
          })
        }
      },
      on: {
        Done: "inicio",
      },
    },
  }
}
);
export { bookingMachine };
