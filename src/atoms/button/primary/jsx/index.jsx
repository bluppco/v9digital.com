const PrimaryButton = ( props ) => {

    return(
        <button className="bg-v9_orange hover:bg-v9_off_white text-white hover:text-v9_orange text-lg border-2 border-v9_orange h-12 px-16 flex items-center justify-center transition-all duration-300">
            { props.children }
        </button>

    )

}

export default PrimaryButton
