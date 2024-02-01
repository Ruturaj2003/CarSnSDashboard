const TableTemplate = () => {
  let dynWidth = '10px';
  const tableHeadings = ['Name', 'Email', 'Mobile no.', 'Address'];

  return (
    <>
      {/* Table Containers */}
      <div className="rounded-lg mt-5 mr-16 w-full h-[600px] overflow-hidden">
        <div className="h-full bg-slate-100 overflow-auto">
          <table className="w-full table-fixed shadow-md rounded bg-white">
            <thead className="bg-[#0066AD] font-tableH text-white sticky top-0">
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
          </table>
        </div>
      </div>
    </>
  );
};
export default TableTemplate;
