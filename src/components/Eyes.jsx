import { useEffect, useState } from "react"

function Eyes() {
  // const [rotate, setRotate] = useState(0)
  const [rotate1, setRotate1] = useState(0)
  const [rotate2, setRotate2] = useState(0)

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX
      let mouseY = e.clientY
      // console.log(mouseX, mouseY)

      let deltaX1 = mouseX - (window.innerWidth / 2 - 200)
      let deltaX2 = mouseX - (window.innerWidth / 2 + 200)
      let deltaY = mouseY - window.innerHeight / 2

      var angle1 = Math.atan2(deltaY, deltaX1) * (180 / Math.PI)
      var angle2 = Math.atan2(deltaY, deltaX2) * (180 / Math.PI)
      setRotate1(angle1 - 180)
      setRotate2(angle2 - 180)
    })
  })
  // useEffect(() => {
  //   window.addEventListener("mousemove", (e) => {
  //     let mouseX = e.clientX
  //     let mouseY = e.clientY
  //     // console.log(mouseX, mouseY)

  //     let deltaX = mouseX - (window.innerWidth / 2 - 100)
  //     let deltaY = mouseY - window.innerHeight / 2

  //     var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
  //     setRotate(angle - 180)
  //   })
  // })
  return (
    <div className="eyes w-full h-screen -mt-10 overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        data-scroll-section
        className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
      >
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center">
            <div className="relative w-3/5 h-3/5 bg-[#212121] rounded-full">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate1}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                <div className="w-7 h-7 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center">
            <div className="relative w-3/5 h-3/5 bg-[#212121] rounded-full">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate2}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                <div className="w-7 h-7 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes
