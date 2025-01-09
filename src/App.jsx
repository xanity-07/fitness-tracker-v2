import { useState } from 'react';
import Header from './components/header/Header';
import ActivityGraph from './components/activityGraph/ActivityGraph';

function App() {
  const year = 2025;
  const activityData = {
    '2025-01-01': 6,
    '2025-01-02': 14,
    '2025-01-05': 14,
    '2025-01-07': 9,
    '2025-01-08': 21,
    '2025-01-09': 14,
    '2025-01-12': 21,
    '2025-01-14': 9,
    '2025-01-15': 14,
    '2025-01-16': 14,
    '2025-01-18': 21,
  };

  return (
    <>
      <Header />
      <ActivityGraph year={year} activityData={activityData} />
    </>
  );
}
export default App;
