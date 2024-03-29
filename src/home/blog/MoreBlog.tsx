import Footer from "../../footer/Footer"
import NavBar from "../../nav/Navbar"



const MoreBlog = () => {
  return (
    <div className="">
        <NavBar />
        <div className="container mx-auto px-12 my-16">
            <p className="text-3xl font-semibold text-center">Recent Scientific Publication</p>
            
            <div className="md:grid grid-cols-3 gap-2 mt-12">
                <div className="mb-16">
                    <img src="https://wallpapercave.com/wp/wp3739590.jpg" alt="" className="w-11/12 h-full rounded"/>
                    <p className="mt-[-35px] text-xl font-semibold text-white ml-2">Awareness</p>
                    <p className="mt-4">Stop the next pandemic? Stop illegal Wildlife tradel</p>
                </div>
                <div className="mb-16">
                    <img src="https://wallpapercave.com/wp/wp13371563.jpg" alt="" className="w-11/12 h-full rounded"/>
                    <p className="mt-[-35px] text-xl font-semibold text-white ml-2">Awareness</p>
                    <p className="mt-4">The Science of Aji-no-moto</p>
                </div>
                <div className="mb-16">
                    <img src="https://wallpapercave.com/wp/wp9102976.jpg" alt="" className="w-11/12 h-full rounded"/>
                    <p className="mt-[-35px] text-xl font-semibold text-white ml-2">Awareness</p>
                    <p className="mt-4">The Present Covid-19</p>
                </div>
                <div className="mb-16">
                    <img src="https://wallpapercave.com/wp/wp3739590.jpg" alt="" className="w-11/12 h-full rounded"/>
                    <p className="mt-[-35px] text-xl font-semibold text-white ml-2">Awareness</p>
                    <p className="mt-4">Stop the next pandemic? Stop illegal Wildlife tradel</p>
                </div>
                <div className="mb-16">
                    <img src="https://wallpapercave.com/wp/wp13371563.jpg" alt="" className="w-11/12 h-full rounded"/>
                    <p className="mt-[-35px] text-xl font-semibold text-white ml-2">Awareness</p>
                    <p className="mt-4">The Science of Aji-no-moto</p>
                </div>
                <div className="mb-16">
                    <img src="https://wallpapercave.com/wp/wp9102976.jpg" alt="" className="w-11/12 h-full rounded"/>
                    <p className="mt-[-35px] text-xl font-semibold text-white ml-2">Awareness</p>
                    <p className="mt-4">The Present Covid-19</p>
                </div>
            </div>
            
        </div>
        <Footer />
    </div>
  )
}

export default MoreBlog