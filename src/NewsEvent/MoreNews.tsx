import Footer from "../footer/Footer"
import NavBar from "../nav/Navbar"


const MoreNews = () => {
  return (
    <div>
        <NavBar />
        <div className="container mx-auto px-10">
            <p className="text-4xl font-semibold text-center my-12">News and Events</p>

            <div className="md:grid grid-cols-3 gap-2 mb-16">
                <div className="">
                    <img src="https://wallpapercave.com/wp/wp11190895.jpg" alt="" />
                    <p className="md:mt-40 font-semibold">Award and Recognition</p>
                    <p className="md:mt-[40px]">Three NIFS Researchers Ranked Among Top 2% Scientist in the World Elsevler/ Stanford Citation Analysis</p>
                </div>
            </div>

            <div className="md:mb-[150px]"></div>
        </div>

        <Footer />
    </div>
  )
}

export default MoreNews