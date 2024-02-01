const Table = () => {
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
                  <button key={200 + rowIndex}>GG</button>
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
