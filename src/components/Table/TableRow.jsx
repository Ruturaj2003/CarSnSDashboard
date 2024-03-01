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
  readOnly,
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

  const deliReq = async (id, data) => {
    axios
      .put(url + '/' + id, data)
      .then((response) => {
        console.log('PUT Request Successful:', response.data);
      })
      .catch((error) => {
        console.error('Error making PUT request:', error);
      });
  };

  const serviceReq = async (id, data) => {
    console.log(data);
    axios
      .put(url + '/' + id, data)
      .then((response) => {
        console.log('PUT Request Successful:', response.data);
      })
      .catch((error) => {
        console.error('Error making PUT request:', error);
      });
  };

  const handleDelivered = (item) => {
    const { status, employeeid } = item;
    const currentTime = new Date().toISOString();
    const requestData = {
      date: currentTime,
      status,
      emp: employeeid,
    };
    deliReq(item.id, requestData);
  };

  const handleServiced = (item) => {
    const { cost, servicedescription } = item;
    const currentTime = new Date().toISOString();
    const requestData = {
      date: currentTime,
      desc: servicedescription,
      cost,
    };
    console.log('Vehicle Id: ' + item.id + ' Serviced');
    serviceReq(item.id, requestData);
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
      {!readOnly && (
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
              onClick={() => handleDelivered(item)}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Delivered
            </button>
          )}
          {buttonData.serviceButton && (
            <button
              onClick={() => handleServiced(item)}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Serviced
            </button>
          )}
        </td>
      )}
    </tr>
  );
};

// Making the Axios PUT request

export default TableRow;
