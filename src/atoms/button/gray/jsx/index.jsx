const GrayButton = ( props ) => {

    return(
        <button className="bg-v9_light_gray text-v9_black text-lg border-2 border-v9_light_gray h-10 px-10 flex items-center justify-center transition-all duration-300">
            { props.children }
        </button>

    )

}

export default GrayButton
