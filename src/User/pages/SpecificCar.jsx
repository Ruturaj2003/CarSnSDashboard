import axios from 'axios';
import { useSelector } from 'react-redux';
import { globalUrl } from '../../App';

const SpecificCar = () => {
  const id = useSelector((state) => state.common.value);
  console.log(id);

  const url = globalUrl + '/';

  const fetchCar = async () => {
    axios.get(url + '/' + id);
  };
  return <div>SpecificCar</div>;
};
export default SpecificCar;
