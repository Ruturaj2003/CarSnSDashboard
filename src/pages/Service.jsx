import { useDispatch, useSelector } from 'react-redux';
import TableFrame from '../components/Table/TableFrame';
import { useEffect } from 'react';
import { globalUrl } from '../App';
import { fetchServices } from '../state/slices/serviceSlice';

const Service = () => {
  const url = globalUrl + '/service';
  const tableHeadings1 = [
    'Registration Number',
    'Customer Name',
    'Phone',
    'Service Type',
    'Arrival Date',
  ];
  const tableHeadings2 = [
    'Registration Number',
    'Customer Name',
    'Phone',
    'Service Type',
    'Arrival Date',
    'Service Description',
    'Cost',
    'Delivery Date',
  ];

  const formName = 'Service';
  const data = useSelector((state) => state.service.tdata);
  const buttonData = useSelector((state) => state.service.buttonData);

  const numOfCol1 = 5;
  const numOfCOl2 = 8;
  const dispatch = useDispatch();

  const preTableData = data.map((item) => {
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

  const tableData1 = preTableData.filter((item) => item.Status === 'T');
  const tableData2 = preTableData.filter((item) => item.Status === 'F');

  useEffect(() => {
    dispatch(fetchServices(url));
  }, [dispatch]);

  return (
    <div className="flex flex-col">
      <TableFrame
        tableData={tableData1}
        url={url}
        formName={formName}
        tableHeadings={tableHeadings1}
        fetchFn={fetchServices}
        numOfCol={numOfCol1}
        buttonData={buttonData}
        readOnly={false}
        serviceModal={true}
      ></TableFrame>
      <TableFrame
        tableData={tableData2}
        url={url}
        formName={formName}
        tableHeadings={tableHeadings2}
        fetchFn={fetchServices}
        numOfCol={numOfCOl2}
        buttonData={buttonData}
        readOnly={true}
        serviceModal={false}
      ></TableFrame>
    </div>
  );
};
export default Service;
