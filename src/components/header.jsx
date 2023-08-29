const NavBar = () => {
    return(
        <nav className='flex justify-between h-15 items-center bg-slate-600 px-3'>
        <h1 className="text-3xl text-amber-700 font-mono">
        Mariel Borrajo
        </h1>
        <button className=''>
        <AiOutlineMenu className='w-16 h-full p-3'/>
        </button>
        </nav>
    )
}

export default NavBar