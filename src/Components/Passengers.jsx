import { useState } from "react"

const Passengers = ({state, send}) => {
  const [value, setValue] = useState('');
  const handleTransition = () => {
    send('Confirm')
  }
  const handleForm = (e) => {
    e.preventDefault();
    send('Add', {newPassenger:value})
    setValue('');
  }
  const handleChange = (e) => {
    setValue(e.target.value);
  }
  const {passengers} = state.context;
    return (
        <form  className='flex flex-col justify-center items-center p-[0_8px]' onSubmit={handleForm}>
          <p className='mb-4 text-[1.2rem]'>Agrega a las personas que van a volar ✈️</p>
          {passengers.map((person, idx) => 
           <p className='text-base m-[4px_0] text-left w-full' key={person}>{person}</p>)}
          <input 
            id="name" 
            name="name" 
            type="text" 
            placeholder='Escribe el nombre completo' 
            required
            value={value} 
            onChange={handleChange}
            className="text-base m-[16px_0] rounded-lg p-2 border-none w-full box-border"
           
          />
          <div className='grid grid-cols-2 gap-4 w-full mt-2'>
            <button 
              
              className='button-secondary'
              type="submit"
            >
              Agregar Pasajero
            </button>
            <button
            onClick={handleTransition}
              className='Passenger-pay button'
              type="button"
            
            >
              Ver mi ticket
            </button>
          </div>
        </form>
      );
}
export {Passengers};