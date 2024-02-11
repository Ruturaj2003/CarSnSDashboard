import { nanoid } from 'nanoid';
import Modal from './Modal';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useEffect, useState } from 'react';

const TableTemplate = ({ url, tableHeadings }) => {
  // Input Must be tableHeadings,and array of data

  const [isOpen, setisOpen] = useState(false);
  const [data, setData] = useState([
    {
      id: 11,
      name: 'RAY',
      phone: 99903443,
      email: 'rutaut$hsad',
      lic: 787868,
    },
  ]);
  const [loading, setLoading] = useState(false);
  let action = '';
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(url);
      const responseData = res.data;
      setData(responseData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    action = 'POST';
    console.log(action);
    handleOpen();
  };
  const handleEdit = () => {
    action = 'PUT';
    console.log(action);
    handleOpen();
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
  // For intial Fetch
  useEffect(() => {
    fetchData();
  }, []);

  // Passed to modal
  const onSave = () => {
    fetchData();
    console.log('Data Refetched');
  };
  const handleOpen = () => {
    setisOpen(true);
  };
  const handleClose = () => {
    setisOpen(false);
  };

  return (
    <>
      {/* Table Containers */}
      <div className="rounded-sm mt-5 mr-16 w-full h-[600px] overflow-hidden">
        {isOpen ? (
          <>
            <div className="relative  bg-slate-200 w-full h-full opacity-50">
              {/* Modal Container */}

              <div className="h-full bg-slate-100 overflow-auto">
                <table className="w-full table-fixed shadow-md rounded bg-white">
                  <thead className="bg-[#0066AD] font-tableH text-white sticky top-0">
                    {/* Columns */}
                    <tr>
                      {tableHeadings.map((thead, index) => {
                        return (
                          <th
                            key={index}
                            className="py-2 border-r border-r-[#adadad] text-center"
                          >
                            {thead}
                          </th>
                        );
                      })}
                      <th className="w-[180px] bg-[#0066AD]">Create Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {
                      {
                        return (
                          <tr key={index}>
                            {Object.values(item).map((value, index) => {
                              return (
                                <td
                                  key={nanoid()}
                                  className="py-2 overflow-hidden overflow-ellipsis font-tableD text-center "
                                >
                                  {value}
                                </td>
                              );
                            })}
                            <td className="flex justify-evenly items-center py-2">
                              <button key={nanoid()}>
                                {' '}
                                <FaEdit className="text-[#797979] text-xl"></FaEdit>
                              </button>
                              <button key={nanoid()}>
                                {' '}
                                <MdDelete className=" text-xl text-[#797979]"></MdDelete>
                              </button>
                            </td>
                          </tr>
                        );
                      }
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <Modal
              isOpen={isOpen}
              onSave={onSave}
              onClose={handleClose}
              inputFields={tableHeadings}
              url={url}
              action={action}
            ></Modal>
          </>
        ) : (
          <div className="h-full bg-slate-100 overflow-auto">
            <table className="w-full table-fixed shadow-md rounded bg-white">
              <thead className="bg-[#0066AD] font-tableH text-white sticky top-0">
                {/* Columns */}
                <tr>
                  {tableHeadings.map((thead, index) => {
                    return (
                      <th
                        key={index}
                        className="py-2 border-r border-r-[#adadad] text-center"
                      >
                        {thead}
                      </th>
                    );
                  })}
                  <th className="w-[140px] bg-[#0066AD] text-center">
                    <button onClick={handleCreate}>Create</button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  {
                    return (
                      <tr key={index}>
                        {Object.values(item).map((value, index) => {
                          return (
                            <td
                              key={nanoid()}
                              className="py-2 overflow-hidden overflow-ellipsis  text-center"
                            >
                              {value}
                            </td>
                          );
                        })}
                        <td className="flex justify-evenly  py-2 items-center">
                          <button key={nanoid()} onClick={handleEdit}>
                            {' '}
                            <FaEdit className="text-[#797979] text-xl"></FaEdit>
                          </button>
                          <button
                            key={nanoid()}
                            onClick={() => handleDelete(item.id)}
                          >
                            {' '}
                            <MdDelete
                              className="text-[#797979] text-xl
                            "
                            ></MdDelete>
                          </button>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};
export default TableTemplate;
