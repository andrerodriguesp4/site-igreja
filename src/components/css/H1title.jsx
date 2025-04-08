function H1title(props){
    return(
        <h1 {...props} className="text-center font-bold text-green-950 text-5xl p-2 pb-6">
            {props.children}
        </h1>
    )
}

export default H1title