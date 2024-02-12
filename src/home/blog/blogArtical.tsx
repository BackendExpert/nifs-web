import IonIcon from "@reacticons/ionicons"


const blogArtical = () => {
  return (
    <div className="container mx-auto px-16 py-">
        <div className="text-center">
        <h1 className="pt-12 pb-2 text-3xl">Recent Scientific Publication</h1>
        <p className="">Advancing the frontiers of fundamental research</p>
        </div>
        <div className="md:grid grid-cols-2 gap-16 my-8">
            <div>
                <img className="md:h-full h-64 object-cover md:my-0 my-12" src="https://c4.wallpaperflare.com/wallpaper/1022/53/128/ultra-wide-car-nissan-skyline-gt-r-wallpaper-preview.jpg" alt="" />
                <p className="font-thin pt-6">Awareness</p>
                <p className="text-2xl">Stop the next pandemic? Stop illegal trade!</p>
                <p className="text-blue-500 pb-8"><a href=""> Read More <IonIcon name="arrow-forward" className=""/></a></p>            
            </div>
            <div>
                <img className="md:h-full h-64 object-cover md:my-0 my-12" src="https://c4.wallpaperflare.com/wallpaper/956/868/1012/car-nissan-race-cars-road-wallpaper-preview.jpg" alt="" />
                <p className="font-thin pt-6">Awareness</p>
                <p className="text-2xl">The Science of Aji-no-moto</p>
                <p className="text-blue-500"><a href=""> Read More <IonIcon name="arrow-forward" className=""/></a></p>            
            </div>
        </div>
        <div className="md:mt-36 md:mb-16">
            <p className="">View Blog Articles</p>

        </div>
    </div>
  )
}

export default blogArtical