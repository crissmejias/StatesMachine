const Tickets = ({state, send}) => {
  const handleClick = () => {
    send('Done')
  }
    return(
        <div className='flex justify-center items-center flex-col'>
        <p className='Tickets-description description'>Gracias por volar con book a fly 💚</p>
        <div className='grid grid-cols-[1fr_5fr] mb-4'>
          <div className='bg-white p-4 rounded-[8px_4px] font-semibold uppercase text-lg flex items-center justify-center border-r-[1px_dashed_#4F54A7] relative' >Colombia</div>
          <div className='m-[2px] relative bg-[#9795f080] p-4 rounded-[4px_8px] font-bold flex items-center flex-col justify-center border-l-[dashed_1px_#4F54A7]'>
            <span className="absolute -top-[10px] right-[10px] text-6xl text-[#4F54A7] -rotate-45">✈</span>
            {state.context.passengers.map((person, idx) => {
              return <p key={person} className="m-[2px]">{person} </p>
            })}
          </div>
        </div>
        <button onClick={handleClick}  className='ml-auto button'>Finalizar</button>
      </div>
    )
}
export {Tickets}