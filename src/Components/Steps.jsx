import { render } from "react-dom"
import { Passengers } from "./Passengers"
import { Search } from "./Search"
import { Tickets } from "./Tickets"
import { Welcome } from "./Welcome"

const Steps = ({state, send}) => {

    const renderContent = () => {
       if(state.matches('inicio')) return <Welcome send={send} state={state}/>
       if(state.matches('search')) return <Search send={send} state={state}/>
       if(state.matches('passengers')) return <Passengers send={send} state={state}/>
       if(state.matches('tickets')) return <Tickets send={send} state={state}/>
       
    }
    return(
        <div className="bg-[#ffffff99] w-full max-w-[400px] p-[16px] rounded-bl-[8px] rounded-br-[8px]">
           {renderContent()}
        </div>
    )
}
export {Steps}