import './index.css';
import dayjs from 'dayjs';

export default function ActivityGraph({ year, activityData }) {
  const generateYearDays = (year) => {
    const days = [];
    const startOfYear = dayjs(`${year}-01-01`);
    const endOfYear = dayjs(`${year}-12-31`);

    let currentday = startOfYear;
    while (currentday.isBefore(endOfYear) || currentday.isSame(endOfYear)) {
      days.push(currentday);
      currentday = currentday.add(1, 'day');
    }
    return days;
  };

  const groupDaysByWeek = (days) => {
    const weeks = [];
    let week = new Array(days[0].day()).fill(null);

    days.forEach((day) => {
      week.push(day);
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    });

    if (week.length > 0) {
      week = week.concat(new Array(7 - week.length).fill(null));
    }
    return weeks;
  };

  const getActivityColor = (date) => {
    const activity = activityData[date] || 0;
    if (activity > 20) return '#216e39';
    if (activity > 10) return '#30a14e';
    if (activity > 5) return '#40c463';
    return '#ebedf0';
  };

  const days = generateYearDays(year);
  const weeks = groupDaysByWeek(days);

  return (
    <>
      <div>
        <span className='activity-graph'>
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className='week'>
              {week.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  className='day-box'
                  title={day ? day.format('YYYY-MM-DD') : ''}
                  style={{
                    backgroundColor: day
                      ? getActivityColor(day.format('YYYY-MM-DD'))
                      : 'transparent',
                    visibility: day ? 'visible' : 'hidden',
                  }}
                ></div>
              ))}
            </div>
          ))}
        </span>
      </div>
    </>
  );
}
