import { motion, useAnimation } from "framer-motion"

function Featured() {
  // const [isHovering, setIsHovering] = useState(false)

  const cards = [useAnimation(), useAnimation()]
  const cardScale = [useAnimation(), useAnimation()]
  const cardImageScale = [useAnimation(), useAnimation()]

  const handleHover = (index) => {
    cards[index].start({ y: "0" })
    cardScale[index].start({ scale: 0.94 })
    cardImageScale[index].start({ scale: 1.1 })
  }
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" })
    cardScale[index].start({ scale: 1 })
    cardImageScale[index].start({ scale: 1 })
  }

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
      className="w-full h-[220vh] py-20 "
    >
      <div className="border-b-[1px] px-20 pb-10 border-zinc-600">
        <h1 className="text-7xl">Featured projects</h1>
      </div>
      <div className=" px-20">
        <div className="cards w-full flex mt-10 gap-10">
          {/* card-1 */}
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2"
          >
            <h1 className="popuptitle flex overflow-hidden absolute text-[#CDEA68] leading-none  z-10 uppercase font-['Founders_Grotesk_X'] left-[103%] top-[55%] -translate-x-1/2 -translate-y-1/2 text-[10vw] font-semibold">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{
                    ease: [0, 0.55, 0.45, 1],
                    delay: index * 0.04,
                    duration: 0.2,
                  }}
                  key={index}
                  className="inline-block -mb-14"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="cardtitle flex items-center mb-7 gap-3">
              <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
              <h3 className="uppercase leading-none text-xl">fyde</h3>
            </div>
            <motion.div
              animate={cardScale[0]}
              transition={{
                ease: [0.22, 1, 0.36, 1],
                duration: 0.9,
              }}
              className="card w-full h-[75vh] rounded-xl overflow-hidden bg-green-600"
            >
              <motion.img
                // initial={{ scale: "1" }}
                animate={cardImageScale[0]}
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  duration: 0.9,
                  delay: 0.04,
                }}
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="image"
                className="w-full h-full bg-cover"
              />
            </motion.div>
          </motion.div>
          {/* card-2 */}
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2"
          >
            <h1 className="popuptitle flex overflow-hidden leading-none absolute text-[#CDEA68] z-10 uppercase font-['Founders_Grotesk_X'] right-[103%] top-[55%] translate-x-1/2 -translate-y-1/2 text-[10vw] font-semibold">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{
                    ease: [0, 0.55, 0.45, 1],
                    delay: index * 0.04,
                    duration: 0.2,
                  }}
                  key={index}
                  className="inline-block -mb-14"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="cardtitle flex items-center mb-7 gap-3">
              <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
              <h3 className="uppercase leading-none text-xl">vise</h3>
            </div>
            <motion.div
              // initial={{ scale: "1" }}
              animate={cardScale[1]}
              transition={{
                ease: [0.22, 1, 0.36, 1],
                duration: 0.9,
              }}
              className="card w-full h-[75vh] rounded-xl overflow-hidden"
            >
              <motion.img
                animate={cardImageScale[1]}
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  duration: 0.9,
                  delay: 0.04,
                }}
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="image"
                className="w-full h-full bg-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Featured
