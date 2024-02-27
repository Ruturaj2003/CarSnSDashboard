import TableFrame from '../components/Table/TableFrame';

const Employee = () => {
  const url = 'http://localhost:8081/employee';
  const tableHeadings = ['Employee Id', 'Name', 'Department', 'Salary'];
  const formName = 'Employee';
  return (
    <>
      <TableFrame
        url={url}
        formName={formName}
        tableHeadings={tableHeadings}
      ></TableFrame>
    </>
  );
};
export default Employee;
