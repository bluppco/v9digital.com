// IMPORTS ATOMS
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"

// IMPORTS REACT
import { useState } from "react"

const CLientsCarousel = ( props ) => {

    const {

        CDN,
        data,
        PROJECT

    } = props
console.log(data)
    const [ startIndex, setStartIndex ] = useState(0)

    const nextSlide = () => {
        setStartIndex( ( prevIndex ) => ( prevIndex + 1 ) % data.length )
    }

    const prevSlide = () => {
        setStartIndex( ( prevIndex) => ( prevIndex - 1 + data.length ) % data.length )
    }

    const goToSlide = ( index ) => {
        setStartIndex( index )
    }

    return (
        <section className="w-full h-full relative">
            <div className="h-full flex items-center absolute top-0 -left-2 md:left-4 z-10" onClick={ prevSlide }>
                <div className="w-8 aspect-square cursor-pointer">
                    <PictureInternalContain
                        alternative_text="left icon"
                        source="/icons/left.svg"
                    />
                </div>
            </div>
            <div className="gap-8 transition-all duration-500 hidden md:flex justify-center items-center h-full">
                {

                    [ 0, 1 ].map( ( value ) => {

                    const index = ( startIndex + value ) % data.length

                        return (
                            <div key={ index } className="h-20 w-40">
                                <img
                                    alt=""
                                    className="h-20 w-40 object-contain"
                                    src={ data[ index ].cover }
                                />
                            </div>
                        )
                    })

                }
            </div>
            <div className="flex gap-8 transition-all duration-500 px-10 md:hidden justify-center items-center h-full">
                {

                    [ 0 ].map( ( value ) => {

                    const index = ( startIndex + value ) % data.length

                        return (
                            <div key={ index } className="h-20 w-40">
                                <img
                                    alt=""
                                    className="h-20 w-40 object-contain"
                                    src={ data[ index ].cover }
                                />
                            </div>
                        )
                    })

                }
            </div>
            <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2">
               {

                    data.map( ( value, index ) => {

                        return(
                            <button
                                key={ index }
                                onClick={() => goToSlide( index )}
                                className={`rounded-full bg-v9_dark_gray border border-white ${ index === startIndex ? "bg-v9_gray size-3" : "size-3" }`}
                            />
                        )

                    })

               }
            </div>
            <div className="h-full flex items-center absolute top-0 -right-2 md:right-4 z-10" onClick={ nextSlide }>
                <div className="w-8 aspect-square cursor-pointer">
                    <PictureInternalContain
                        alternative_text="right icon"
                        source="/icons/right.svg"
                    />
                </div>
            </div>
        </section>
    )
}

export default CLientsCarousel
