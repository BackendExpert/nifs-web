
const NewsEvent = () => {
  return (
    <div className="container mx-auto px-16">
        <p className="py-8 text-center text-3xl font-semibold">Recent stories from NIFS</p>
        <div className="md:grid grid-cols-2 gap-4">
            <div className="">
                <img src="https://wallpapercave.com/wp/wp11190895.jpg" alt="" className="w-11/12 rounded"/>
                <p className="pt-2 text-2xl font-semibold">Award and Recognition</p>
                <p className="">Three NIFS Researchers Ranked Among Top 2% Scientist in the World Elsevler/ Stanford Citation Analysis</p>
            </div>
            <div className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, laborum sint enim suscipit culpa ex laboriosam voluptates unde officia distinctio reiciendis saepe molestias consequatur quod consectetur, natus reprehenderit sequi. Possimus.
            </div>
        </div>
    </div>
  )
}

export default NewsEvent