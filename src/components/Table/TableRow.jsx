import React from 'react';
import { nanoid } from 'nanoid';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import {
  deleteEmployees,
  fetchEmployees,
  incrementValue,
} from '../../state/slices/employeeSlice';
// import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const TableRow = ({ item, handleRowClick, url }) => {
  const dispatch = useDispatch();

  const dota = (id) => {
    axios
      .delete(url + '/' + id)
      .then(() => {
        dispatch(fetchEmployees(url));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteItem = (id) => {
    dota(id);
  };

  return (
    <tr>
      {Object.values(item).map((value) => (
        <td
          key={nanoid()}
          className="py-2 overflow-hidden overflow-ellipsis text-center font-tableD"
        >
          {value}
        </td>
      ))}
      <td className="flex justify-evenly py-2 items-center">
        <button key={nanoid()} onClick={() => handleRowClick(item)}>
          <FaEdit className="text-[#797979] text-xl" />
        </button>
        <button key={nanoid()} onClick={() => deleteItem(item.id)}>
          <MdDelete className="text-xl text-[#797979]" />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
