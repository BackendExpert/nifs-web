import Footer from "../footer/Footer"
import NavBar from "../nav/Navbar"


const MoreNews = () => {
  return (
    <div>
        <NavBar />
        <div className="container mx-auto px-10">
            <p className="text-4xl font-semibold text-center my-12">News and Events</p>

            <div className="md:grid grid-cols-3 gap-2 mb-16">
                <div className="rounded bg-[url(https://wallpapercave.com/wp/wp11190895.jpg)] w-[90%] h-52 bg-cover bg-center">
                    dasd
                </div>
                <div className="rounded bg-[url(https://wallpapercave.com/wp/wp11190895.jpg)] w-[90%] h-52 bg-cover bg-center">
                    dasd
                </div>
                <div className="rounded bg-[url(https://wallpapercave.com/wp/wp11190895.jpg)] w-[90%] h-52 bg-cover bg-center">
                    dasd
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default MoreNews