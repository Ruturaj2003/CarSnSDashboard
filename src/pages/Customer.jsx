import TableFrame from '../components/Table/TableFrame';
import { useEffect } from 'react';
import { globalUrl } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers } from '../state/slices/customerSlice';

const Customer = () => {
  const tableHeadings = [
    'Id',
    'Name',
    'Phone',
    'address',
    'Licence Number',
    'Password',
  ];

  const url = globalUrl + '/customer';

  const formName = 'Customer';
  const tableData = useSelector((state) => state.customer.tdata);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomers(url));
  }, [dispatch]);
  return (
    <>
      <TableFrame
        tableData={tableData}
        url={url}
        formName={formName}
        tableHeadings={tableHeadings}
        fetchFn={fetchCustomers}
      ></TableFrame>
    </>
  );
};
export default Customer;
