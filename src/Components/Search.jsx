import { useState } from "react"

const Search = ({state, send}) => {
  const [flight, setFlight] = useState('');
  const handleClick = () => {
    send('Continue')
  }
  const handleChange = (e) => {
    setFlight(e.target.value)
  }
  const options = ['Colombia', 'Venezuela', 'Argentina']
    return(
        <div className='flex flex-col'>
        <p className='text-lg m-0'>Busca tu destino</p>
        <select id="country" value={flight} className='text-base m-[16px_0] rounded-lg p-2 border-none' onChange={handleChange} >
          <option value="" disabled >Escoge un país</option>
          {options.map((option) => <option value={option} key={option}>{option}</option>)}
        </select>
        <button onClick={handleClick} disabled={flight === ''} className='ml-auto button'>Continuar</button>
      </div>
    )
}
export {Search};