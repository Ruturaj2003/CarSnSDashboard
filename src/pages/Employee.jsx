import { useDispatch, useSelector } from 'react-redux';
import TableFrame from '../components/Table/TableFrame';
import { fetchEmployees } from '../state/slices/employeeSlice';
import { useEffect } from 'react';
import { globalUrl } from '../App';

const Employee = () => {
  const url = globalUrl + '/employee';
  const tableHeadings = ['Name', 'Department', 'Salary'];
  const formName = 'Employee';
  const tableData = useSelector((state) => state.employee.tdata);
  const buttonData = useSelector((state) => state.employee.buttonData);
  console.log(buttonData);
  const numOfCol = 3;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees(url));
  }, [dispatch]);

  return (
    <>
      <TableFrame
        tableData={tableData}
        url={url}
        formName={formName}
        tableHeadings={tableHeadings}
        fetchFn={fetchEmployees}
        numOfCol={numOfCol}
        buttonData={buttonData}
      ></TableFrame>
    </>
  );
};
export default Employee;
