import IonIcon from "@reacticons/ionicons"
import Footer from "../footer/Footer"
import NavBar from "../nav/Navbar"


const MoreNews = () => {
  return (
    <div>
        <NavBar />
        <div className="container mx-auto px-10">
            <p className="text-4xl font-semibold text-center my-12">News and Events</p>

            <div className="md:grid grid-cols-3 gap-2 mb-16">
                <div className="md:mb-0 mb-8">
                    <img src="https://wallpapercave.com/wp/wp11190895.jpg" alt="" className="rounded md:w-3/4 h-auto"/>
                    <p className="font-semibold text-xl mt-[-50px] text-white ml-8">Award and Recognition</p>
                    <p className="mt-8">Three NIFS Researchers Ranked Among Top 2% Scientist in the World Elsevler/ Stanford Citation Analysis</p>
                </div>
                <div className="md:mb-0 mb-8">
                    <img src="https://wallpapercave.com/wp/wp11190895.jpg" alt="" className="rounded md:w-3/4 h-auto"/>
                    <p className="font-semibold text-xl mt-[-50px] text-white ml-8">Competition</p>
                    <p className="mt-8">Champion of the Research Competition</p>
                </div>
                <div className="md:mb-0 mb-8">
                    <img src="https://wallpapercave.com/wp/wp11190895.jpg" alt="" className="rounded md:w-3/4 h-auto"/>
                    <p className="font-semibold text-xl mt-[-50px] text-white ml-8">Press Release</p>
                    <p className="mt-8">The NIFS input have been fruitful</p>
                </div>

                <div className="md:mb-0 mb-8">
                    <img src="https://wallpapercave.com/wp/wp11190895.jpg" alt="" className="rounded md:w-3/4 h-auto"/>
                    <p className="font-semibold text-xl mt-[-50px] text-white ml-8">Special lectures</p>
                    <p className="mt-8">Advanced Raman Spectroscopy of Carbon Nanomaterials</p>
                </div>
                <div className="md:mb-0 mb-8">
                    <img src="https://wallpapercave.com/wp/wp11190895.jpg" alt="" className="rounded md:w-3/4 h-auto"/>
                    <p className="font-semibold text-xl mt-[-50px] text-white ml-8">Award and Recognition</p>
                    <p className="mt-8">NIFS Vilunteer Researcher Honored with the Gold Medal</p>
                </div>
                <div className="md:mb-0 mb-8">
                    <img src="https://wallpapercave.com/wp/wp11190895.jpg" alt="" className="rounded md:w-3/4 h-auto"/>
                    <p className="font-semibold text-xl mt-[-50px] text-white ml-8">Conference</p>
                    <p className="mt-8">NIFS 2024 Conferemce on November 2024</p>
                </div>                
            </div>
            <div className="pl-[40%] flex">
                <p className="">Page 1</p>
                <p className="text-blue-700"><IonIcon name="chevron-forward" ></IonIcon></p>
            </div>

            <div className="md:mb-[150px]"></div>
        </div>

        <Footer />
    </div>
  )
}

export default MoreNews