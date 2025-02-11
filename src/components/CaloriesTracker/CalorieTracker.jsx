import { useState } from 'react';
import { week } from '../../Week';
export default function CaloriesTracker() {
  const date = new Date().getDay();
  const [totalCalories, setTotalCalories] = useState(0);
  const [selectedDay, setSelectedDay] = useState(week[date]);
  const [calories, setCalories] = useState({
    Sunday: 0,
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0,
    Saturday: 0,
  });

  return (
    <div className='flex flex-row items-center justify-center gap-x-8 min-h-screen h-4 bg-gray-800 p-4'>
      <div className='bg-white p-6 rounded-2xl shadow-md w-80 mb-6'>
        <h2 className='text-4xl font-semibold text-gray-700 mb-4'>
          {week[date]}
        </h2>
        <select
          className='w-full mb-4 p-2 border rounded-lg '
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          {Object.keys(calories).map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <label className='block text-gray-600 text-sm mb-2'>
          Calories Burned
        </label>
        <input
          type='number'
          value={calories[selectedDay]}
          onChange={(e) =>
            setCalories({ ...calories, [selectedDay]: +e.target.value })
          }
          className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
          placeholder='Enter calories burned'
        />
      </div>
      <div className='bg-white p-6 rounded-2xl shadow-md w-80'>
        <h2 className='text-xl font-semibold text-gray-700 mb-4'>
          Calories Summary
        </h2>
        <ul className='text-gray-700'>
          {Object.keys(calories).map((day) => (
            <li key={day} className='flex justify-between py-1 mb-4  border-b'>
              <span>{day}:</span> <span>{calories[day] || '0'} kcal</span>
            </li>
          ))}
        </ul>
        <span className='text-xl font-semibold text-gray-700 mb-4'>
          Total calories burned: {totalCalories}
        </span>
      </div>
    </div>
  );
}
