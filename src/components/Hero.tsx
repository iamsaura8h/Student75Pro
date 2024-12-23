function Hero() {
  return (
    <div className="flex items-center justify-between h-2/3 px-16 flex-col md:flex-row">
      {/* Left Text Section */}
      <div className="flex flex-col w-2/3 space-y-3 ">
        <h2 className="text-2xl lg:text-5xl text-black font-bold">
          Forget College, Get Ahead
        </h2>
        <p className="text-gray-500 text-sm">
          Skip the boring classes, and focus on what really matters: mastering
          DSA, leveling up your dev skills, and crushing your roadmap. All while
          staying on track for that 75%—because your future won’t wait!
        </p>
        <button className="bg-[#FF735C] w-full sm:w-1/2 text-white px-2 py-2 rounded-3xl shadow-md hover:bg-pink-600">
          Get Started
        </button>
      </div>

      {/* Right Image Section */}
      <div className="w-full mt-8 flex justify-end">
        <img
          src="/hero.jpg"
          alt="Hero Image"
          className="w-4/5 h-auto object-contain"
        />
      </div>
    </div>
  );
}

export default Hero;
