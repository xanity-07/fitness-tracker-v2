import './index.css';
import Logo from '/Users/xan1ty/Desktop/fitness-tracker-version2/fitness-tracker/fitness-tracker-v2/src/assets/weight.png';

export default function Header() {
  return (
    <header className='header'>
      <img src={Logo} alt='logo' />
      <h1>Fitness Tracker V2</h1>
    </header>
  );
}
