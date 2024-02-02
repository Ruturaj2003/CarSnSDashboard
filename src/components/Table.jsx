import { useState } from 'react';
import axios from 'axios';

const Table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get('https://example.com/api/data');
      const responseData = res.data;
      setData(responseData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const response = await axios.delete(`https://example.com/api/data/${id}`);
      if (response.status === 200) {
        console.log(`Successfully deleted data with ID ${id}`);
        fetchData(); // Call fetchData to update the data after deletion
      } else {
        console.error(`Failed to delete data with ID ${id}`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      setLoading(true);
      const response = await axios.put(
        `https://example.com/api/data/${id}`,
        updatedData
      );
      if (response.status === 200) {
        console.log(`Successfully updated data with ID ${id}`);
        fetchData(); // Call fetchData to update the data after modification
      } else {
        console.error(`Failed to update data with ID ${id}`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const getSingleItem = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(`https://example.com/api/data/${id}`); //
      const singleItemData = res.data;
      console.log(`Successfully fetched data for ID ${id}`);
      console.log(singleItemData);
    } catch (error) {
      console.error(`Failed to fetch data for ID ${id}`);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-blue-100 rounded-xl mt-5 mr-16 w-full h-[600px] overflow-hidden">
      <div className="h-full bg-slate-200 overflow-auto">
        <table className="w-full table-fixed shadow-md rounded bg-white">
          <thead className="bg-[#0066AD] font-tableH text-white sticky top-0">
            <tr>
              <th className="py-2 w-1/6">Customer Id</th>
              <th className="py-2 w-1/6">Name</th>
              <th className="py-2 w-1/6">Phone</th>
              <th className="py-2 w-1/6">E-mail</th>
              <th className="py-2 w-1/6">LIC Num.</th>
              <th className="py-2 w-1/6">Create DATA</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data */}
            {Array.from({ length: 6 }).map((_, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-gray-300 w-1/6 font-tableD"
              >
                {Array.from({ length: 5 }).map((_, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="pl-8 py-2 overflow-hidden overflow-ellipsis"
                  >
                    {`Row ${rowIndex + 1}, Cell ${cellIndex + 1}`}
                  </td>
                ))}
                <td className="flex justify-evenly items-center">
                  <button className="" key={100 + rowIndex}>
                    ADS
                  </button>
                  <button key={200 + rowIndex}>Edit</button>
                  <button key={300 + rowIndex}>WP</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;
// 70 right
// 80left
// 50 top
// 60 bottm
