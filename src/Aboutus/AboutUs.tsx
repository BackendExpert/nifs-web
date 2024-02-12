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
              <p className="md:text-4xl text-3xl px-8 text-yellow-500 md:pt-40 pt-16">We are the premier institute for advancing fundamental Sciences</p>
              <p className="text-white px-8 md:pb-0 pb-16">NIFS is engaged in scientific research to facilitate fundamental and advanced studies with an emphasis on basic research for national development as well as for the advancement of Science</p>
            </div>
          </div>
        </div>

        <div className="text-xl py-8 px-16">
          <p className="font-semibold text-3xl pb-4">National Institute of Fundamental Studies, Sri Lanka</p>
          <p className="">The NIFS is the only institute in Sri Lanka whcih, by it's Act, exists for the sole purpose of cunduction research in natural and social Science and philosophy for national development and scientific advancement.</p>
          <p className="">The NIFS is engaged in basic, high caliber research focusing on 16 different thematic research areas under 6 research departments. The research carried out at the NIFS is also initiated as a response to burning national problems in Sri Lanka.</p>
          <p className="">Besides engaging in basic research, the NIFS popularizes science, especially among school children, trains postgraduate researchers in the country to prevent brain drain and disseminates scientific knowladge to the wider public.</p>
        </div>


        <Footer />
    </div>
  )
}

export default AboutUs