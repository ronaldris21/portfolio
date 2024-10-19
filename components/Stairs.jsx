import { motion } from "framer-motion"

//variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"]
    }
}



const phrase = "Have a fucking nice day!".split(" ");

const totalSteps = phrase.length;
const reverseIndex = (index) => {

    return totalSteps - index;
}

const Stairs = () => {

    return (


        <>
            {[...Array(totalSteps)].map((_, index) => {
                return (
                    <>

                        <motion.div
                            key={index}
                            variants={stairAnimation}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{
                                duration: 0.4,
                                ease: "easeIn",
                                delay: index * 0.1
                            }}
                            className="h-full w-full bg-accent relative"
                        >
                            <div className="text-2xl  pt-6 font-bold   text-black flex items-center justify-center">
                                {phrase[index]}
                            </div>

                        </motion.div>

                    </>
                )
            })}
        </>
    )


}

export default Stairs