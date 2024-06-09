type TData = {
  id: number;
  name: string;
  city: string;
  email: string;
  joined: string;
  purchasedAmount: number;
  member: string;
};
function Table({ data }: { data: TData[] }) {
  return (
    <table className="w-full mx-auto px-[15px] py-[11px] bg-main rounded-[6px] shadow-lg drop-shadow-lg">
      <thead className="h-[56px]">
        <tr className="text-left ">
          <th className="px-[15px] cursor-pointer">Name</th>
          <th className="px-[15px] cursor-pointer">Email</th>
          <th className="px-[15px] cursor-pointer">Joined</th>
          <th className="px-[15px] cursor-pointer">City</th>
          <th className="px-[15px] cursor-pointer">Amount</th>
          <th className="px-[15px] cursor-pointer">Member</th>
        </tr>
      </thead>
      <tbody className="text-left [&>*:nth-child(odd)]:bg-secondary overflow-x-scroll">
        {data.map(
          ({
            id,
            city,
            email,
            joined,
            member,
            name,
            purchasedAmount,
          }: TData) => (
            <tr
              key={id}
              className="h-[56px] border-y border-gray-700/50 font-thin text-text-main"
            >
              <td className="nth px-[15px] cursor-pointer hover:text-text-hover">
                {name}
              </td>
              <td className="nth px-[15px] cursor-pointer hover:text-text-hover">
                {email}
              </td>
              <td className="nth px-[15px] cursor-pointer hover:text-text-hover">
                {joined}
              </td>
              <td className="nth px-[15px] cursor-pointer hover:text-text-hover">
                {city}
              </td>
              <td className="nth px-[15px] cursor-pointer hover:text-text-hover">
                {purchasedAmount}
              </td>
              <td className="nth px-[15px] cursor-pointer">{member}</td>
            </tr>
          )
        )}
      </tbody>
      <tfoot className="h-20 x">
        <tr>
          <th colSpan={6} className="font-thin">
            <td className="flex w-full justify-between items-center max-w-[700px] mx-auto">
              <div>previous</div>
              <div className="w-full flex items-center justify-center gap-5">
                {[...new Array(5).keys()].map((k) => (
                  <div
                    key={k}
                    style={k === 2 ? { border: "1px solid gray" } : {}}
                    className="p-1 cursor-pointer"
                  >
                    {k + 1}
                  </div>
                ))}
              </div>
              <div>next</div>
            </td>
          </th>
        </tr>
      </tfoot>
    </table>
  );
}

export default Table;
