import { Github, Linkedin, Twitter } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Author = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen  to-[#f0faff] py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Profile Section */}
        <div className=" space-y-6">
          <h1 className="text-4xl font-bold text-black hover:text-[#2862C1] transition-colors">
            About Me
          </h1>
          <img 
            src="3.jpg"
            alt="Saurabh Kumar"
            className="h-40 rounded-full mx-auto border-4 border-[#2862C1] shadow-lg"
          />
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 ">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            👋 Hi, I'm Saurabh Kumar
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            This project was created on purpose to help students avoid unimportant lectures and utilize that time 
            to work on skills, explore, socialise, attend fests/tech events and make memories.
            <br /><br />
            This app will help you calculate the number of days you need to go to college to have attendance around 
            75-77%, saving you from condonation fees and securing your eligibility to write exams.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a
            href="https://github.com/iamsaura8h"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/saurabh-kumar-sk1107"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#2862C1] text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://twitter.com/iamsaura8h"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
          >
            <Twitter size={20} />
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Author;