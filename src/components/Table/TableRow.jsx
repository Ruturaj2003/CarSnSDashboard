import React from 'react';
import { nanoid } from 'nanoid';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

import { useDispatch } from 'react-redux';

// import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const TableRow = ({
  item,
  handleRowClick,
  url,
  fetchFn,
  numOfCol,
  buttonData,
}) => {
  const dispatch = useDispatch();

  const dota = (id) => {
    axios
      .delete(url + '/' + id)
      .then(() => {
        dispatch(fetchFn(url));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelivered = (id) => {
    console.log('Vehicle Id: ' + id + ' Delivered');
  };

  const handleServiced = (id) => {
    console.log('Vehicle Id: ' + id + ' Serviced');
  };

  const deleteItem = (id) => {
    console.log(id);
    dota(id);
  };
  const nume = numOfCol;

  return (
    <tr className="hover:bg-blue-100">
      {Object.keys(item)
        .slice(0, nume)
        .map((key) => (
          <td
            key={nanoid()}
            className="py-2 overflow-hidden overflow-ellipsis text-center font-tableD"
          >
            {item[key]}
          </td>
        ))}
      <td className="flex justify-evenly py-2 items-center">
        {buttonData.editButton && (
          <button key={nanoid()} onClick={() => handleRowClick(item)}>
            <FaEdit className="text-[#797979] text-xl" />
          </button>
        )}

        {buttonData.deleteButton && (
          <button key={nanoid()} onClick={() => deleteItem(item.id)}>
            <MdDelete className="text-xl text-[#797979]" />
          </button>
        )}
        {buttonData.bookingButton && (
          <button
            onClick={() => handleDelivered(item.id)}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Delivered
          </button>
        )}
        {buttonData.serviceButton && (
          <button
            onClick={() => handleServiced(item.id)}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Serviced
          </button>
        )}
      </td>
    </tr>
  );
};

//Curremt Time Fn

// const currentTime = new Date().toISOString();

// // Replace this URL with your actual API endpoint
// const apiUrl = 'https://example.com/api/your-endpoint';

// // Data to be sent in the PUT request
// const requestData = {
//   currentTime: currentTime,
// };

// // Making the Axios PUT request
// axios
//   .put(apiUrl, requestData)
//   .then((response) => {
//     console.log('PUT Request Successful:', response.data);
//   })
//   .catch((error) => {
//     console.error('Error making PUT request:', error);
//   });
export default TableRow;
