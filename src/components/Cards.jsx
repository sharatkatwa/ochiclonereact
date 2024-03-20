function Cards() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-1"
      className="w-full h-screen bg-zinc-950 flex items-center gap-5 px-20"
    >
      <div className="cardcontainer w-1/2 h-[50vh]">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
          <img
            className=""
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            height="150"
            width="150"
            alt="image"
          />
          <button className="absolute left-10 bottom-10 rounded-full border-[1px] px-3 py-1 border-[#CDEA68] text-[#CDEA68] text-xl">
            ©2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[50vh] flex gap-5">
        <div className="card relative rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            height="150"
            width="150"
            alt="image"
          />
          <button className="absolute left-10 bottom-10 rounded-full border-[1px] px-3 py-1 border-zinc-100 text-zinc-100 text-xl uppercase">
            rating 5.0 on clutch
          </button>
        </div>
        <div className="card relative rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            height="104"
            width="102"
            alt="image"
          />
          <button className="absolute left-10 bottom-10 rounded-full border-[1px] px-3 py-1 border-zinc-100 text-zinc-100 text-xl uppercase">
            business bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cards
