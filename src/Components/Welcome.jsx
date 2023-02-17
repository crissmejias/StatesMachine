const Welcome = ({state,send}) => {
  const startBooking = () => {
    send('Start')
    console.log(state)
  }
    return (
        <div className='flex flex-col'>
          <p className='text-lg text-center '>¡Hoy es el día!</p>
          <p className='Welcome-description description'>Compra tu vuelo y conoce un nuevo rincón del mundo, te va a sorprender las maravillas que hay para explorar</p>
          <button onClick={startBooking} className='ml-auto button'>Comenzar</button>
        </div>
    )
}
export {Welcome};