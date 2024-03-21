// IMPORTS REACT
import { useState } from "react"

// IMPORTS FRAMER MOTION
import { motion, AnimatePresence } from "framer-motion"

const Accordion = ( props ) => {

    // GET PROPS
    const {

        expand,
        index,
        updateExpand,
        value

    } = props

    const isOpen = index === expand

    return (
        <div className="md:py-4">
            <motion.section
                initial={ false }
                onClick={() => updateExpand( isOpen ? false : index )}
                className="cursor-pointer flex items-center gap-4"
                un9n-event={ "service-" + index }
            >
                <div className="w-6 aspect-square">
                    <motion.img
                        alt="add icon"
                        className={`${ isOpen ? "rotate-180": "rotate-0" } w-6 h-6 transition-all duration-100`}
                        src="/icons/add.svg"
                    />
                </div>
                <div className="py-2">
                    <h4 className="text-lg md:text-xl font-lato font-bold text-v9_black">{ value.title }</h4>
                </div>
            </motion.section>
            <div>
                <AnimatePresence initial={ false }>
                {
                    isOpen &&
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="md:pt-6 pl-8 md:pl-10 space-y-4 md:space-y-6">
                            <p className="md:text-lg text-v9_black font-lato">{ value.description }</p>
                        </div>
                    </motion.div>
                }
                </AnimatePresence>
            </div>
        </div>
    )

}
const Service = ( props ) => {

    // GET PROPS
    const { data } = props

    const [ expand, updateExpand ] = useState("")

    return (
        <section className="pt-4">
            {

                data.map( ( value, index ) => {

                    return (
                        <Accordion
                            expand={ expand }
                            index={ index }
                            key={ "service" + index }
                            updateExpand={ updateExpand }
                            value={ value }
                        />
                    )

                })

            }
        </section>
    )

}

export default Service
