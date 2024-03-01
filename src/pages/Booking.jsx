import { useDispatch, useSelector } from 'react-redux';
import TableFrame from '../components/Table/TableFrame';
import { useEffect } from 'react';
import { globalUrl } from '../App';
import { fetchBookings } from '../state/slices/bookingSlice';

const Booking = () => {
  const url = globalUrl + '/booking';
  const tableHeadings = [
    'Customer Name',
    'Phone',
    'Booking Amount',
    'Booking Date',
    'Employee ID',
  ];
  const formName = 'Booking';
  const data = useSelector((state) => state.booking.tdata);
  const buttonData = useSelector((state) => state.booking.buttonData);

  const numOfCol = 5;
  const dispatch = useDispatch();

  const tableData = data.map((item) => {
    // Format the arrival date
    const formattedBookingDate = new Date(item.bookingdate).toLocaleDateString(
      'en-GB'
    );

    // Format the delivery date
    const formattedDeliveryDate = new Date(
      item.deliverydate
    ).toLocaleDateString('en-GB');

    // Return the updated item
    return {
      ...item,
      bookingdate: formattedBookingDate,
      deliverydate: formattedDeliveryDate,
    };
  });
  useEffect(() => {
    dispatch(fetchBookings(url));
  }, [dispatch]);

  // TODO : Convert the Booking Amount Into Lakhs

  return (
    <TableFrame
      tableData={tableData}
      url={url}
      formName={formName}
      tableHeadings={tableHeadings}
      fetchFn={fetchBookings}
      numOfCol={numOfCol}
      buttonData={buttonData}
      readOnly={false}
    ></TableFrame>
  );
};
export default Booking;
