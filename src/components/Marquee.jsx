import { motion } from "framer-motion"

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.3"
      className="w-full py-32 rounded-t-3xl bg-[#004D43]"
    >
      <div className="text border-t-[1px] border-b-[1px] border-zinc-500  flex  overflow-hidden whitespace-nowrap leading-none">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="uppercase text-[29vw] font-['Founders_Grotesk_X'] -mb-44 pt-6 font-medium pr-20"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="uppercase text-[29vw] font-['Founders_Grotesk_X'] -mb-44 pt-6 font-medium pr-20"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  )
}

export default Marquee
