import { nanoid } from 'nanoid';

const TableRow = ({ item, handleRowClick }) => {
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
        <button key={nanoid()}>
          <MdDelete className="text-xl text-[#797979]" />
        </button>
      </td>
    </tr>
  );
};
export default TableRow;
