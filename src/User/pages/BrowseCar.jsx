import UserNavbar from '../UserNavbar';
import hero from '../assets/browCar.jpg';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';
const BrowseCar = () => {
  return (
    <>
      <UserNavbar></UserNavbar>
      {/* Hero */}
      <img
        className="h-[800px] w-full relative -z-10 -top-[90px]  object-cover"
        src={hero}
        alt=""
      />
      <div className="absolute left-6 bottom-[100px] text-white">
        <FaQuoteLeft className="text-4xl"></FaQuoteLeft>
        <h1 className="text-8xl  font-sans font-semibold ml-12">
          Drive Your Dreams,<br></br>{' '}
          <span className="ml-28"> One Car at a Time. </span>
        </h1>
        <FaQuoteRight className="absolute right-[-40px] bottom-[75px] text-4xl"></FaQuoteRight>
      </div>
    </>
  );
};
export default BrowseCar;
