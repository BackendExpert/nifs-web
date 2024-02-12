import Footer from "../footer/Footer"
import NavBar from "../nav/Navbar"
import Countdiv from "./HomeData/CountDiv"


const Home = () => {
  return (
    <div>
        <NavBar />
        <img src="https://wallpapercave.com/wp/wp2269706.jpg" alt="" className="h-1/2 w-full"/>
        <Countdiv />
        <Footer />
    </div>
  )
}

export default Home