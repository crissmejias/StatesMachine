import { useState } from "react"

const Search = ({state, send}) => {
  const option = state.context.countries; 
  const [flight, setFlight] = useState('');
  const handleClick = () => {
    send('Done', {selectedCountry: flight})
  }
  const handleChange = (e) => {
    setFlight(e.target.value)
  }
    return(
        <div className='flex flex-col'>
        <p className='text-lg m-0'>Busca tu destino</p>
        <select id="country" value={flight} className='text-base m-[16px_0] rounded-lg p-2 border-none' onChange={handleChange} >
          <option value="" disabled >Escoge un país</option>
          {option.map((option) => <option value={option.name.common} key={option.name.common}>{option.name.common}</option>)}
        </select>
        <button onClick={handleClick} disabled={flight === ''} className='ml-auto button'>Continuar</button>
      </div>
    )
}
export {Search};