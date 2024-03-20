import { motion } from "framer-motion"
import { MdOutlineArrowOutward } from "react-icons/md"

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.5"
      data-scroll-section
      className="w-full h-[130vh] pt-1"
    >
      <div className="textstructure  uppercase font-['Founders_Grotesk_X'] text-[9vw] font-[500] mt-48 ml-20  leading-[5.5vw]">
        {["we create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-center overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[8vw] h-[5.68vw] rounded-md relative -top-[.6vw] mr-[1vw] overflow-hidden"
                  >
                    <img
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      className="h-full"
                      alt="image"
                    />
                  </motion.div>
                )}
                <h1 className="pt-[2vw]">{item}</h1>
              </div>
            </div>
          )
        })}
      </div>
      <div className="border-t-[2px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-xl leading-none" key={index}>
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2">
          <div className="px-4 py-[.6em] border-2 leading-none border-zinc-400 rounded-full uppercase text-lg">
            Start the project
          </div>
          <div className="px-2 py-2 rounded-full border-2 border-zinc-400 flex items-center justify-center">
            <MdOutlineArrowOutward size="1.5em" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
