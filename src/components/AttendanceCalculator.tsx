import React, { useState, useMemo } from 'react';


interface Inputs {
  totalDays: string;
  daysHostedByCollege: string;
  daysAttended: string;
}

interface AttendanceMetrics {
  currentAttendance: string;
  additionalDaysNeeded: number;
  remainingLeaves: number;
  projectedAttendance: string;
  impactOfAdditionalDays: string;
  isAchievable: boolean;
}

const AttendanceCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<Inputs>({
    totalDays: '',
    daysHostedByCollege: '',
    daysAttended: ''
  });

  const [attendanceCalculated, setAttendanceCalculated] = useState<boolean>(false);

  const calculateMetrics = (
    totalDays: number, 
    hostedDays: number, 
    attendedDays: number
  ): AttendanceMetrics | null => {
    if (isNaN(hostedDays) || isNaN(attendedDays) || isNaN(totalDays)) {
      return null;
    }

    const currentAttendance = (attendedDays / hostedDays) * 100;
    const remainingDays = totalDays - hostedDays;

    // Calculate additional days needed
    let additionalDays = 0;
    while ((attendedDays + additionalDays) / (hostedDays + additionalDays) * 100 < 75) {
      additionalDays++;
    }

    // Calculate remaining leaves
    let remainingLeaves = 0;
    let currentAttendanceCheck = currentAttendance;
    while (currentAttendanceCheck >= 75 && hostedDays + remainingLeaves < totalDays) {
      remainingLeaves++;
      currentAttendanceCheck = (attendedDays / (hostedDays + remainingLeaves)) * 100;
    }

    return {
      currentAttendance: currentAttendance.toFixed(2),
      additionalDaysNeeded: additionalDays,
      remainingLeaves: remainingLeaves - 1,
      projectedAttendance: ((attendedDays + remainingDays) / totalDays * 100).toFixed(2),
      impactOfAdditionalDays: ((attendedDays + 1) / (hostedDays + 1) * 100).toFixed(2),
      isAchievable: ((attendedDays + remainingDays) / totalDays * 100) >= 75
    };
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputs(prev => ({ ...prev, [id]: value }));
  };

  const calculateAttendance = () => {
    const { totalDays, daysHostedByCollege, daysAttended } = inputs;
    calculateMetrics(
      parseFloat(totalDays), 
      parseFloat(daysHostedByCollege), 
      parseFloat(daysAttended)
    );
    setAttendanceCalculated(true);
  };

  const attendanceMetrics = useMemo(() => {
    const { totalDays, daysHostedByCollege, daysAttended } = inputs;
    return calculateMetrics(
      parseFloat(totalDays), 
      parseFloat(daysHostedByCollege), 
      parseFloat(daysAttended)
    );
  }, [inputs.totalDays, inputs.daysHostedByCollege, inputs.daysAttended]);

  const renderAttendanceResults = () => {
    if (!attendanceCalculated || !attendanceMetrics) return null;

    const { 
      currentAttendance, 
      additionalDaysNeeded, 
      remainingLeaves, 
      projectedAttendance, 
      impactOfAdditionalDays, 
      isAchievable 
    } = attendanceMetrics;

    const generateAdvice = () => {
      const attendanceFloat = parseFloat(currentAttendance);
      if (attendanceFloat < 75) {
        return `You need to attend at least ${additionalDaysNeeded} more days to achieve over 75% attendance.`;
      }
      if (attendanceFloat > 76.1) {
        return `You can take up to ${remainingLeaves} leaves and still maintain over 75% attendance.`;
      }
      return "Maintain this attendance and aim to be around 80% to account for unexpected leaves.";
    };

    return (
      <div>
        <p>Current Attendance Percentage: {currentAttendance}%</p>
        {parseFloat(currentAttendance) < 74.9 && (
          <>
            <p>Is it possible to achieve &gt;75% attendance?: {isAchievable ? 'Yes' : 'No'}</p>
            <p>Additional Days Needed for &gt;75% Attendance: {additionalDaysNeeded} days</p>
          </>
        )}
        {parseFloat(currentAttendance) > 76.1 && (
          <p>You can take up to {remainingLeaves} leaves and still maintain over 75% attendance.</p>
        )}
        <p>Projected Attendance if attending all remaining days: {projectedAttendance}%</p>
        <p>Impact of Attending One Additional Day: {impactOfAdditionalDays}%</p>
        <p>Attendance Advice: {generateAdvice()}</p>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 attendance-calculator-body">
      <h2 className="text-3xl font-bold mb-4 attendance-calculator-title">Attendance Calculator</h2>
      <div className="bg-e8e8e2 rounded-lg shadow-lg p-8">
        <div id='note'>
          <h1>Note: There's generally total 90-100 days in a semester or check in Academic calendar</h1>
        </div>
        
        <div className="mb-4">
          <label htmlFor="totalDays" className="block text-lg font-bold mb-2">
            Total Number of Days in Semester:
          </label>
          <input
            type="number"
            id="totalDays"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            placeholder="Enter total number of days in semester"
            value={inputs.totalDays}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="daysHostedByCollege" className="block text-lg font-bold mb-2">
            Number of Days Hosted by College as of Today:
          </label>
          <input
            type="number"
            id="daysHostedByCollege"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            placeholder="Enter number of days hosted by college"
            value={inputs.daysHostedByCollege}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="daysAttended" className="block text-lg font-bold mb-2">
            Number of Days you Attended as of Today:
          </label>
          <input
            type="number"
            id="daysAttended"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            placeholder="Enter number of days attended"
            value={inputs.daysAttended}
            onChange={handleInputChange}
          />
        </div>

        <button
          type="button"
          className="bg-[#2d2932] text-white font-bold py-2 px-4 rounded hover:bg-[#2d4048]"
          onClick={calculateAttendance}
        >
          Calculate
        </button>
        
        <div className="mt-6">
          {renderAttendanceResults()}
        </div>
      </div>
    </div>
  );
};

export default AttendanceCalculator;