import Footer from "../footer/Footer"
import NavBar from "../nav/Navbar"


const AboutUs = () => {
  return (
    <div className="">
        <NavBar />
        <div className="md:grid grid-cols-2">
          <div className="bg-[url(https://wallpapercave.com/wp/wp2468650.jpg)] w-full h-[550px] bg-cover bg-center">
          </div>
          <div className="bg-gray-700">
            <div className="">
              <p className="text-4xl px-8 text-yellow-500 pt-40">We are the premier institute for advancing fundamental Sciences</p>
              <p className="text-white px-8">NIFS is engaged in scientific research to facilitate fundamental and advanced studies with an emphasis on basic research for national development as well as for the advancement of Science</p>
            </div>
          </div>
        </div>


        <Footer />
    </div>
  )
}

export default AboutUs