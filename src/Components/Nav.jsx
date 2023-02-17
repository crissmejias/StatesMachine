const Nav = ({state, send}) => {
  const handleClick = () => {
    send('Cancel')
  }
    return(
        <nav className='flex justify-between items-center w-full max-w-[400px] bg-[#ffffffcc] p-[16px] rounded-tl-[8px] rounded-tr-[8px]'>
        <h1 className='text-[#293684] m-0 font-semibold text-4xl'>Book a fly ✈</h1>
       {(!state.matches('inicio') && !state.matches('tickets')) && <button onClick={handleClick} className="button-secondary">Cancel</button>}
      </nav>
    )
}
export {Nav}