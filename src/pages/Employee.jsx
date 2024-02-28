import { useDispatch, useSelector } from 'react-redux';
import TableFrame from '../components/Table/TableFrame';
import { fetchEmployees } from '../state/slices/employeeSlice';
import { useEffect } from 'react';

const Employee = () => {
  const url = 'http://localhost:8081/employee';
  const tableHeadings = ['ID', 'Name', 'Department', 'Salary'];
  const formName = 'Employee';
  const tableData = useSelector((state) => state.employee.tdata);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees(url));
  }, []);

  return (
    <>
      <TableFrame
        tableData={tableData}
        url={url}
        formName={formName}
        tableHeadings={tableHeadings}
      ></TableFrame>
    </>
  );
};
export default Employee;
