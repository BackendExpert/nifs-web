import IonIcon from "@reacticons/ionicons"

const NewsEvent = () => {
  return (
    <div className="container mx-auto px-16 mb-20">
        <p className="pt-16 pb-8 text-center text-3xl font-semibold">Recent stories from NIFS</p>
        <div className="md:grid grid-cols-2 gap-4">
            <div className="md:mb-0 mb-8">
                <img src="https://wallpapercave.com/wp/wp11190895.jpg" alt="" className="md:w-11/12 rounded"/>
                <p className="pt-2 text-2xl font-semibold">Award and Recognition</p>
                <p className="">Three NIFS Researchers Ranked Among Top 2% Scientist in the World Elsevler/ Stanford Citation Analysis</p>
            </div>
            <div className="">
                <div className="md:grid grid-cols-2 gap-2">
                    <div className="">
                        <img src="https://wallpapercave.com/wp/wp11190895.jpg" alt="" className="md:w-10/12 rounded"/>
                    </div>
                    <div className="md:ml-[-30px]">
                        <p className="text-2xl font-semibold">Press Release</p>
                        <p className="">The NIFS inputs have been fruitful</p>
                    </div>
                    <div className="">
                        <img src="https://wallpapercave.com/wp/wp11190895.jpg" alt="" className="md:w-10/12 rounded"/>
                    </div>
                    <div className="md:ml-[-30px]">
                        <p className="text-2xl font-semibold">Competition</p>
                        <p className="">Champions of the Research Competition</p>
                    </div>
                    <div className="">
                        <img src="https://wallpapercave.com/wp/wp11190895.jpg" alt="" className="md:w-10/12 rounded"/>
                    </div>
                    <div className="md:ml-[-30px]">
                        <p className="text-2xl font-semibold">Special Lecture</p>
                        <p className="">Advanced Raman Spectroscopy of Carbon Nanomaterials</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="">
            <div className="text-xl bg-gray-700 flex text-white py-2">
                <p className="">View all news and events</p>
                <p className="pt-[3px] pl-4"><IonIcon name="chevron-forward-circle-outline"></IonIcon></p>
            </div>
        </div>

    </div>
  )
}

export default NewsEvent