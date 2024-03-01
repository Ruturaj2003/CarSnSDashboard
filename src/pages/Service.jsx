import { useDispatch, useSelector } from 'react-redux';
import TableFrame from '../components/Table/TableFrame';
import { useEffect } from 'react';
import { globalUrl } from '../App';
import { fetchServices } from '../state/slices/serviceSlice';

const Service = () => {
  const url = globalUrl + '/service';
  const tableHeadings = [
    'Registration Number',
    'Customer Name',
    'Phone',
    'Service Type',
    'Arrival Date',
    'Service Description',
    'Cost',
  ];
  const formName = 'Service';
  const data = useSelector((state) => state.service.tdata);
  const buttonData = useSelector((state) => state.service.buttonData);

  const numOfCol = 7;
  const dispatch = useDispatch();

  const tableData = data.map((item) => {
    // Format the arrival date
    const formattedArrivalDate = new Date(item.arrivaldate).toLocaleDateString(
      'en-GB'
    );

    // Format the delivery date
    const formattedDeliveryDate = new Date(
      item.deliverydate
    ).toLocaleDateString('en-GB');

    // Return the updated item
    return {
      ...item,
      arrivaldate: formattedArrivalDate,
      deliverydate: formattedDeliveryDate,
    };
  });

  useEffect(() => {
    dispatch(fetchServices(url));
  }, [dispatch]);

  return (
    <TableFrame
      tableData={tableData}
      url={url}
      formName={formName}
      tableHeadings={tableHeadings}
      fetchFn={fetchServices}
      numOfCol={numOfCol}
      buttonData={buttonData}
      readOnly={false}
    ></TableFrame>
  );
};
export default Service;
