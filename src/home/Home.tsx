import Footer from "../footer/Footer"
import NavBar from "../nav/Navbar"
import Countdiv from "./HomeData/CountDiv"
import BlogArtical from "./blog/blogArtical"



const Home = () => {
  return (
    <div>
        <NavBar />
        <img src="https://wallpapercave.com/wp/wp2269706.jpg" alt="" className="md:h-1/2 h-full w-full"/>
        <Countdiv />
        <Footer />
    </div>
  )
}

export default Home