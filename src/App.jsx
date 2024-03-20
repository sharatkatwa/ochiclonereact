import About from "./components/About"
import Cards from "./components/Cards"
import Eyes from "./components/Eyes"
import Featured from "./components/Featured"
import Footer from "./components/Footer"
import LandingPage from "./components/LandingPage"
import Marquee from "./components/Marquee"
import Navbar from "./components/Navbar"
import LocomotiveScroll from "locomotive-scroll"

function App() {
  // eslint-disable-next-line no-unused-vars
  const locomotiveScroll = new LocomotiveScroll()

  return (
    <div className="m-h-screen w-full font-['Neue_Montreal'] text-zinc-100 bg-[#212121] antialiased">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
