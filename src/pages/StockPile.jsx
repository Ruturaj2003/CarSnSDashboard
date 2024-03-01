import { useDispatch, useSelector } from 'react-redux';
import TableFrame from '../components/Table/TableFrame';
import { useEffect } from 'react';
import { globalUrl } from '../App';
const StockPile = () => {
  const url = globalUrl + '/employee';
  const tableHeadings = ['Customer Name', '', 'Salary'];
  const formName = 'Employee';
  const tableData = useSelector((state) => state.employee.tdata);
  const buttonData = useSelector((state) => state.employee.buttonData);

  const numOfCol = 3;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees(url));
  }, [dispatch]);
  return <div>StockPile</div>;
};
export default StockPile;
