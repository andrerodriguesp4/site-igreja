function Buttonnavbar(props){
    return(
        <button {...props} className='px-0 sm:px-0 md:px-2 lg:px-4 py-2 text-sm md:text-lg border-2 border-transparent hover:bg-green-900 rounded-md'>
            {props.children}
        </button>
    )
}

export default Buttonnavbar
