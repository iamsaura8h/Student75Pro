function Hero() {
  return (
    <div className="flex items-center justify-between h-2/3 px-6 mt-4 lg:px-16 flex-col md:flex-row">
      {/* Left Text Section */}
      <div className="flex flex-col lg:w-2/3 space-y-4 font-ptsans ">
        <h2 className="text-4xl lg:text-5xl text-black font-bold ">
        College for Memories, Skills for Placements
        </h2>
        <p className="text-gray-500 text-sm font-medium">
        Meet the 75% attendance requirement then spend your time enjoying college life making memories while mastering the skills that will land you a job.
        </p>
        <button className="bg-[#FF735C] w-full sm:w-1/2 text-white px-2 py-2 rounded-3xl shadow-md hover:bg-pink-600 transition duration-300">
          Get Started
        </button>
      </div>

      {/* Right Image Section */}
      <div className="w-full mt-8 flex justify-end">
        <img
          src="/hero.jpg"
          alt="Hero Image"
          className="w-4/5 h-auto object-contain "
        />
      </div>
    </div>
  );
}

export default Hero;
