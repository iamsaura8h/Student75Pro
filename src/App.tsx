// import React from 'react';
import AttendanceCalculator from "./components/AttendanceCalculator";
import Calendar from "./components/Calendar";
import Description from "./components/Description";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-lg shadow-sm h-min">
            <Calendar />
          </div>
          <div className="bg-white rounded-lg shadow-sm flex-1">
            <Description />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm h-min">
          <AttendanceCalculator />

          <div className="bg-white rounded-lg shadow-sm h-full">
            <Hero />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
