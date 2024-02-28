import UserNavbar from '../UserNavbar';
import hero from '../assets/browCar.jpg';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';
import BCHero from '../components/Hero/BCHero';
const BrowseCar = () => {
  return (
    <>
      <UserNavbar></UserNavbar>
      {/* Hero */}
      <BCHero></BCHero>
    </>
  );
};
export default BrowseCar;
