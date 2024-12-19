// Description.tsx
import React from "react";

const Description: React.FC = () => {
  return (
    <div className="max-w-lg max-h-min mx-auto mt-6 p-5 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-white bg-blue-600 rounded-t-md py-2">
        How This Calendar Helps
      </h2>
      <div className="p-4 bg-gray-50 rounded-b-md">
        <p className="text-gray-700 mb-4">
          Maintaining at least <span className="font-bold text-blue-600">75%</span> attendance is a crucial requirement for students in many academic institutions. This calendar provides an easy way to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Track your <span className="font-semibold">attendance progress</span> throughout the semester.
          </li>
          <li>
            Identify <span className="font-semibold">key dates</span> such as exams, holidays, and missed days.
          </li>
          <li>
            Plan ahead by marking days you need to attend to meet the 75% criteria.
          </li>
          <li>
            View <span className="font-semibold">remaining days</span> to safely meet the attendance requirement.
          </li>
        </ul>
        <p className="text-gray-700 mt-4">
          By regularly updating this calendar with your attendance, you'll stay on top of your academic commitments and avoid the stress of falling short on attendance at the last minute.
        </p>
        <div className="mt-4 text-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">
            Start Using the Calendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description;
