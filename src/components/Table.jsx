const Table = () => {
  return (
    <div className="bg-blue-100 pr-8 pt-10 pb-12 pl-12 rounded-xl mt-5 mr-16 w-full h-[600px] ">
      <div id="TableData" className="h-full w-full bg-slate-200 overflow-auto">
        <table className="border-collapse w-full shadow-md rounded overflow-hidden bg-white">
          <thead>
            <tr className="bg-[#0066AD] font-tableH text-white">
              <th className="py-2">Customer Id</th>
              <th className="py-2">Name</th>
              <th className="py-2">Phone</th>
              <th className="py-2">E-mail</th>
              <th className="py-2">LIC Num.</th>
              <th className="py-2">Create DATA</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data */}
            {Array.from({ length: 20 }).map((_, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-300 font-tableD">
                {Array.from({ length: 6 }).map((_, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="pl-8 py-2 overflow-hidden overflow-ellipsis"
                  >
                    {`Row ${rowIndex + 1},  Cell ${cellIndex + 1}`}
                  </td>
                ))}
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
