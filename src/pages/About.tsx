import { useState, useEffect } from 'react';
import {  Calendar, Clock, CheckCircle, X } from 'lucide-react';
// import { ArrowRight } from 'lucide-react';

const About = () => {
  const [count, setCount] = useState(75);
  const [showAlert, setShowAlert] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev === 75) return 65;
        if (prev === 65) return 85;
        return 75;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      title: "Smart Tracking",
      description: "Know exactly how many classes you need to attend",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Leave Planning",
      description: "Plan your leaves without compromising attendance",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: "Stay Eligible",
      description: "Never fall below the 75% requirement",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  const handleScroll = (id: string) => {
    const targetView = document.getElementById(id);
    if (targetView) {
      targetView.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {showAlert && (
        <div className="fixed top-4 right-4 bg-green-100 p-4 rounded-lg shadow-lg animate-bounce">
          <div className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" />
            <span>You're on track! 👍</span>
            <X 
              className="ml-4 cursor-pointer hover:text-gray-600" 
              onClick={() => setShowAlert(false)}
            />
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 py-16 " id='about_view' >
        <div className="text-center mb-16 space-y-2" >
          <h1 className="text-5xl font-bold text-gray-800 animate-fade-in">
            Never Miss an Exam Again
          </h1>
          
          <div className="relative h-32 overflow-hidden">
            <div className="text-7xl py-3 font-bold transition-all duration-500 ease-in-out"
                 style={{ 
                   color: count < 75 ? '#EF4444' : '#10B981',
                   transform: `translateY(${count === 75 ? '0' : count < 75 ? '100%' : '-100%'}px)`,
                 }}>
              {count}%
            </div>
          </div>

          <button
            onClick={() => handleScroll('calculator_view')}
            className="bg-blue-500 text-white px-8 py-3 rounded-full font-medium 
                     hover:bg-[#2862C1] transform transition-all duration-300 hover:scale-105
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Calculate My Attendance
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-white p-6 rounded-xl shadow-lg transform transition-all duration-500
                        ${index === activeSection ? 'scale-105 border-2 border-blue-500' : 'scale-100'}
                        hover:scale-105`}
            >
              <div className={`text-blue-500 mb-4 transition-all duration-500 
                            ${index === activeSection ? 'rotate-6' : 'rotate-0'}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <div className="inline-flex items-center text-blue-500 cursor-pointer group">
            <span className="mr-2">Get Started</span>
            <ArrowRight className="transform transition-transform group-hover:translate-x-2" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;