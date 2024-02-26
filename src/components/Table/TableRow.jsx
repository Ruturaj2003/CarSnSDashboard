import axios from 'axios';
import { nanoid } from 'nanoid';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const TableRow = ({ item, handleRowClick, url, fetchData }) => {
  const handleDelete = async (id) => {
    try {
      // Replace 'your-api-endpoint' with your actual API endpoint for deleting a customer
      const response = await axios.delete(`${url}/${id}`);

      // Assuming you want to do something after successful deletion
      console.log(' deleted successfully', response.data);

      // Call the fetchData function to update the data
      fetchData();
    } catch (error) {
      // Handle error
      console.error('Error deleting customer', error);
    }
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
        <button key={nanoid()} onClick={() => handleDelete(item.id)}>
          <MdDelete className="text-xl text-[#797979]" />
        </button>
      </td>
    </tr>
  );
};
export default TableRow;
