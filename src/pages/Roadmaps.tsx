import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Roadmaps() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen min-w-screen px-10">
        <h1 className="text-4xl font-giest font-semibold py-8">
          Best Roadmaps
        </h1>
        <div className="flex flex-wrap gap-6 ">
            <a href="https://roadmap.sh/" target="_blank">
              <img
                src="roadmap.png"
                alt="photu"
                className="w-auto h-32 rounded-lg transition-all transform hover:scale-105 hover:shadow-xl cursor-pointer"
              />
            </a>
            <a href="https://algomap.io/" target="_blank">
              <img
                src="algomap.png"
                alt="photu2"
                className="w-auto h-32 rounded-lg transition-all transform hover:scale-105 hover:shadow-xl cursor-pointer"
              />
            </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Roadmaps;
