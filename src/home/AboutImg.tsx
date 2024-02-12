import IonIcon from "@reacticons/ionicons"


const AboutImg = () => {
  return (
    <div className="container mx-auto px-12">
        <div className="md:grid grid-cols-2 gap-2">
            <div className="rounded bg-[url(https://wallpapercave.com/wp/wp3611699.jpg)] md:ml-16 md:w-3/4 h-[500px] bg-cover bg-center"></div>
            <div className="md:visible invisible">
            </div>
        </div>
        <div className="md:mt-[-400px] md:ml-[50%] md:px-0 px-10 md:pt-0 mt-[-250px] md:mb-0 mb-40 md:text-black text-white">
            <p className="mt-20 text-2xl font-semibold">We are the premier institute for Advancing fundamental Sciences</p>
            <div className="">
                <p className=""><IonIcon name="arrow-forward-circle-outline" ></IonIcon></p>
            </div>
        </div>
        <div className="md:mb-[300px]"></div>
    </div>
  )
}

export default AboutImg