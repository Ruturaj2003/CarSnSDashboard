import TableTemplate from '../components/TableTemplate';

const Customer = () => {
  const url = 'https://api/customer';
  const tableHeadings = ['Customer Id', 'Name', 'Phone', 'E-mail', 'LIC Num'];

  return (
    <>
      <TableTemplate url={url} tableHeadings={tableHeadings}></TableTemplate>
    </>
  );
};
export default Customer;
