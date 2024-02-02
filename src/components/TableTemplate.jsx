import { nanoid } from 'nanoid';

const TableTemplate = () => {
  const tableHeadings = ['Name', 'Email', 'Mobile no.', 'Address'];
  let data = [];

  return (
    <>
      {/* Table Containers */}
      <div className="rounded-lg mt-5 mr-16 w-full h-[600px] overflow-hidden">
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
    </>
  );
};
export default TableTemplate;
