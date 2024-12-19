import React, { useState } from "react";

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const today = new Date();

  // Generate Calendar Days
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();

  const handleDateClick = (day: number) => {
    setSelectedDate(new Date(today.getFullYear(), today.getMonth(), day));
  };

  return (
    <div className="max-w-none max-h-min mx-auto mt-10 p-5 bg-white rounded-lg shadow-xl">
      {/* Header */}
      <h2 className="text-2xl font-bold text-center text-white bg-blue-600 rounded-t-md py-2">
        {today.toLocaleDateString("default", { month: "long", year: "numeric" })}
      </h2>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 p-4 bg-gray-50 shadow-md">
        {/* Weekdays */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-sm font-medium text-gray-500 text-center">
            {day}
          </div>
        ))}

        {/* Empty Days (For Alignment) */}
        {Array.from({ length: firstDay }).map((_, index) => (
          <div key={`empty-${index}`} className="p-2"></div>
        ))}

        {/* Calendar Days */}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const day = index + 1;
          return (
            <div
              key={day}
              className={`p-2 text-center cursor-pointer rounded-md ${
                selectedDate?.getDate() === day
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-100"
              }`}
              onClick={() => handleDateClick(day)}
            >
              {day}
            </div>
          );
        })}
      </div>

      {/* Selected Date */}
      {selectedDate && (
        <div className="mt-4 text-center text-gray-600 font-medium">
          Selected Date:{" "}
          <span className="text-blue-600 font-bold">
            {selectedDate.toDateString()}
          </span>
        </div>
      )}
    </div>
  );
};

export default Calendar;
