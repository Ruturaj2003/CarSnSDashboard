import TableFrame from '../components/Table/TableFrame';

const Customer = () => {
  const url = 'http://localhost:8081/customer';
  const tableHeadings = ['Customer Id', 'Name', 'Phone', 'E-mail', 'LIC Num'];

  return (
    <>
      <TableFrame url={url} tableHeadings={tableHeadings}></TableFrame>
    </>
  );
};
export default Customer;
