import axios from 'axios';
import { useSelector } from 'react-redux';
import { globalUrl } from '../../App';
import UserNavbar from '../UserNavbar';
import { useEffect, useState } from 'react';
import BlackNavBar from '../BlackNavBar';
import Footer from '../../components/Footer';

const SpecificCar = () => {
  const url = globalUrl + '/car';
  const id = useSelector((state) => state.common.value);
  console.log(id);
  useEffect;
  const [carData, setCarData] = useState(null);

  const fetchCar = async () => {
    try {
      const response = await axios.get(`${url}/${id}`);
      setCarData(response.data);
    } catch (error) {
      console.error('Error fetching car data:', error.message);
    }
  };

  useEffect(() => {
    // fetchCar();
  }, [id]);
  return (
    <>
      <BlackNavBar></BlackNavBar>
      {/* Body */}
      <div className="mr-16 ml-16">
        {/* Hero Container */}
        <div className="w-full h-[450px] pl-12 pr-12 pt-6 mb-16">
          <div className="w-full h-full bg-slate-800"></div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};
export default SpecificCar;
