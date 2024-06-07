import { data } from "./data/data";

function App() {
  return (
    <main className="min-h-screen bg-main text-text-main">
      <table className="w-full max-w-6xl mx-auto px-[15px] py-[11px] bg-secondary">
        <thead className="h-[56px]">
          <tr className="text-left ">
            <th className="px-[15px]">Name</th>
            <th className="px-[15px]">Email</th>
            <th className="px-[15px]">Joined</th>
            <th className="px-[15px]">City</th>
            <th className="px-[15px]">Amount</th>
            <th className="px-[15px]">Member</th>
          </tr>
        </thead>
        <tbody className="text-left">
          {data.map(
            ({ id, city, email, joined, member, name, purchsedAmount }) => (
              <tr key={id} className="h-[56px] ">
                <td className="px-[15px]">{name}</td>
                <td className="px-[15px]">{email}</td>
                <td className="px-[15px]">{joined}</td>
                <td className="px-[15px]">{city}</td>
                <td className="px-[15px]">{purchsedAmount}</td>
                <td className="px-[15px]">{member}</td>
              </tr>
            )
          )}
        </tbody>
        <tfoot>
          <tr >
            <th colSpan={6}>
              <td className="flex w-full justify-between items-center max-w-4xl mx-auto">
                <div>previous</div>
                <div>[1,2,4,5,6,7,8]</div>
                <div>next</div>
              </td>
            </th>
          </tr>
        </tfoot>
      </table>
    </main>
  );
}

export default App;
