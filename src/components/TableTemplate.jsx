import { nanoid } from 'nanoid';
import Modal from './Modal';
import { useState } from 'react';

const TableTemplate = () => {
  const tableHeadings = ['Name', 'Email', 'Mobile no.', 'Address'];
  let data = [];
  const inputFields = ['name', 'email', 'mobile', 'address', 'id'];

  const [isOpen, setisOpen] = useState(false);
  const onSave = () => {
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
      <div className="rounded-lg mt-5 mr-16 w-full h-[600px] overflow-hidden">
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
                                  className="py-2 overflow-hidden overflow-ellipsis "
                                >
                                  {value}
                                </td>
                              );
                            })}
                            <td>
                              <button key={nanoid()}>Edit</button>
                              <button key={nanoid()}>sd</button>
                              <button key={nanoid()}>dsd</button>
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
              inputFields={inputFields}
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
                  <th className="w-[180px] bg-[#0066AD] text-center">
                    <button onClick={handleOpen}>Create</button>
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
                              className="py-2 overflow-hidden overflow-ellipsis "
                            >
                              {value}
                            </td>
                          );
                        })}
                        <td>
                          <button key={nanoid()}>Edit</button>
                          <button key={nanoid()}>sd</button>
                          <button key={nanoid()}>dsd</button>
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
