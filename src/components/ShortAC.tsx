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

const ShortAC: React.FC = () => {
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

    let additionalDays = 0;
    while ((attendedDays + additionalDays) / (hostedDays + additionalDays) * 100 < 75) {
      additionalDays++;
    }

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
      <div className="bg-white rounded-lg shadow-sm p-6 mt-6 pt-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Current Performance</h3>
            <p className="text-gray-700">
              Current Attendance: 
              <span className={`font-bold ml-2 ${parseFloat(currentAttendance) >= 75 ? 'text-green-600' : 'text-red-600'}`}>
                {currentAttendance}%
              </span>
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Projection</h3>
            <p className="text-gray-700">
              Projected Attendance: 
              <span className="font-bold ml-2 text-blue-700">
                {projectedAttendance}%
              </span>
            </p>
          </div>
        </div>

        {parseFloat(currentAttendance) < 74.9 && (
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Attendance Alert</h3>
            <p className="text-gray-700">
              Achievable &gt;75%: 
              <span className={`font-bold ml-2 ${isAchievable ? 'text-green-600' : 'text-red-600'}`}>
                {isAchievable ? 'Yes' : 'No'}
              </span>
            </p>
            <p className="text-gray-700 mt-2">
              Additional Days Needed: 
              <span className="font-bold ml-2 text-blue-700">
                {additionalDaysNeeded} days
              </span>
            </p>
          </div>
        )}

        <div className="bg-indigo-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-indigo-800 mb-2">Insights</h3>
          <p className="text-gray-700">
            Impact of One Additional Day: 
            <span className="font-bold ml-2 text-blue-700">
              {impactOfAdditionalDays}%
            </span>
          </p>
          {parseFloat(currentAttendance) > 76.1 && (
            <p className="text-gray-700 mt-2">
              Leaves Possible: 
              <span className="font-bold ml-2 text-green-600">
                {remainingLeaves} days
              </span>
            </p>
          )}
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">Advice</h3>
          <p className="text-gray-700">{generateAdvice()}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-8 pb-3 px-2">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl border-2 overflow-hidden">
        <div className="p-8 space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-gray-700 italic">
              💡 Note: Typically, a semester has 90-100 days. Check your academic calendar for precise details.
            </p>
          </div>

          <div className="space-y-4">
            {(['totalDays', 'daysHostedByCollege', 'daysAttended'] as const).map((field) => (
              <div key={field}>
                <label 
                  htmlFor={field} 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {field === 'totalDays' ? 'Total Days in Semester' : 
                   field === 'daysHostedByCollege' ? 'Days Hosted by College' : 
                   'Days You Attended'}
                </label>
                <input
                  type="number"
                  id={field}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 
                             transition duration-300"
                  placeholder={`Enter ${field === 'totalDays' ? 'total days' : 
                                field === 'daysHostedByCollege' ? 'college days' : 
                                'attended days'}`}
                  value={inputs[field]}
                  onChange={handleInputChange}
                />
              </div>
            ))}
          </div>

          <button
            onClick={calculateAttendance}
            className="w-full bg-[#FF735C] text-white py-3 rounded-lg 
                       hover:bg-green-700 transition duration-300 
                       flex items-center justify-center space-x-2 
                       focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <span>Calculate Attendance</span>
          </button>

          {renderAttendanceResults()}
        </div>
      </div>
    </div>
  );
};

export default ShortAC;