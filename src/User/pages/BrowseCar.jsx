import UserNavbar from '../UserNavbar';
import hero from '../assets/browCar.jpg';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';
import BCHero from '../components/Hero/BCHero';
import BCBody from '../components/Body/BCBody';
const BrowseCar = () => {
  return (
    <>
      <UserNavbar></UserNavbar>
      {/* Hero */}
      <BCHero></BCHero>
      {/* Body */}
      <BCBody></BCBody>
    </>
  );
};
export default BrowseCar;
