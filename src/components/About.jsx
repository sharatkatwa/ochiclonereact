function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.2"
      className="w-full z-10 pb-32 bg-[#CDEA68] rounded-3xl text-[#212121]"
    >
      <h1 className="text-[3.5vw] leading-none pl-20 pt-32 pr-52 pb-16">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full border-t-[1px] pl-20 pr-20 pt-5 border-[#aac254] flex">
        <div className="w-1/2">
          <h1 className="text-[3.5vw] ">Our approach:</h1>
          <button className="uppercase rounded-full px-10 py-6 bg-[#212121] text-white text-lg flex items-center justify-center gap-10">
            read more
            <div className="h-2 w-2 bg-white rounded-full"></div>
          </button>
        </div>
        {/* <div className="w-1/2 h-[65vh] overflow-hidden rounded-2xl"> */}
        <img
          className="w-1/2 rounded-2xl"
          src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
          alt="image"
        />
      </div>
    </div>
  )
}

export default About
