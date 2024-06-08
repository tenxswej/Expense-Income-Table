import Spinner from "./Spinner";
function Skeleton() {
  return (
    <table className="animate-pulse w-full mx-auto px-[15px] py-[11px] bg-main rounded-[6px] shadow-lg drop-shadow-lg relative">
      <div className="w-full h-full absolute inset-1 flex items-center justify-center">
        <Spinner />
      </div>
      <thead className="h-[56px]">
        <tr className="text-left ">
          <th className="px-[15px] cursor-pointer"></th>
        </tr>
      </thead>
      <tbody className="text-left [&>*:nth-child(odd)]:bg-secondary overflow-x-scroll origin-">
        {[...new Array(10).keys()].map((id) => (
          <tr
            key={id}
            className="h-[56px] border-y border-gray-700/50 font-thin text-text-main"
          >
            <td className=" nth px-[15px] cursor-pointer hover:text-text-hover"></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Skeleton;
