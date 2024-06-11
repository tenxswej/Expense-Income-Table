import { useData } from "../context/context";
type TData = {
   id: number;
   name: string;
   city: string;
   email: string;
   joined: string;
   purchasedAmount: number;
   member: string;
};
function Table({ data }: { data: TData[] | [] }) {
   const { setCurrentPage, pages, currentPage, setSort, sort } = useData();

   return (
      <table className="w-full mx-auto px-[15px] py-[11px] bg-main rounded-[6px] shadow-lg drop-shadow-lg">
         <thead className="h-[56px]">
            <tr className="text-left ">
               <th className="px-[15px] cursor-pointer">
                  <div className="inline-flex gap-3">
                     <div onClick={() => setSort({ field: "id", ascending: !sort.ascending })}>Id</div>
                     <button
                        style={sort.field !== "id" ? { visibility: "hidden" } : {}}
                        onClick={() => {
                           setSort({ field: "id", ascending: !sort.ascending });
                        }}
                        className="font-thin"
                     >
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M16 18L16 6M16 6L20 10.125M16 6L12 10.125"
                              stroke={sort.ascending ? "blue" : ""}
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                           <path
                              d="M8 6L8 18M8 18L12 13.875M8 18L4 13.875"
                              stroke={!sort.ascending ? "blue" : ""}
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                        </svg>
                     </button>
                  </div>
               </th>
               <th className="px-[15px] cursor-pointer">Name</th>
               <th className="px-[15px] cursor-pointer">Email</th>
               <th className="px-[15px] cursor-pointer">
                  <div className="inline-flex gap-3">
                     <div onClick={() => setSort({ field: "joined", ascending: !sort.ascending })}>Joined</div>
                     <button
                        style={sort.field !== "joined" ? { visibility: "hidden" } : {}}
                        onClick={() => {
                           setSort({ field: "joined", ascending: !sort.ascending });
                        }}
                        className="font-thin"
                     >
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M16 18L16 6M16 6L20 10.125M16 6L12 10.125"
                              stroke={sort.ascending ? "blue" : ""}
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                           <path
                              d="M8 6L8 18M8 18L12 13.875M8 18L4 13.875"
                              stroke={!sort.ascending ? "blue" : ""}
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                        </svg>
                     </button>
                  </div>
               </th>
               <th className="px-[15px] cursor-pointer">City</th>
               <th className="px-[15px] cursor-pointer">
                  <div className="inline-flex gap-3">
                     <div onClick={() => setSort({ field: "purchasedAmount", ascending: !sort.ascending })}>Amount</div>
                     <button
                        style={sort.field !== "purchasedAmount" ? { visibility: "hidden" } : {}}
                        onClick={() => {
                           setSort({ field: "purchasedAmount", ascending: !sort.ascending });
                        }}
                        className="font-thin"
                     >
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M16 18L16 6M16 6L20 10.125M16 6L12 10.125"
                              stroke={sort.ascending ? "blue" : ""}
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                           <path
                              d="M8 6L8 18M8 18L12 13.875M8 18L4 13.875"
                              stroke={!sort.ascending ? "blue" : ""}
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                        </svg>
                     </button>
                  </div>
               </th>
               <th className="px-[15px] cursor-pointer">Member</th>
            </tr>
         </thead>
         <tbody className="text-left [&>*:nth-child(odd)]:bg-secondary overflow-x-scroll">
            {data.map(({ id, city, email, joined, member, name, purchasedAmount }: TData) => (
               <tr key={id} className="h-[56px] border-y border-gray-700/50 font-thin text-text-main">
                  <td className="nth px-[15px] cursor-pointer hover:text-text-hover">{id}</td>
                  <td className="nth px-[15px] cursor-pointer hover:text-text-hover">{name}</td>
                  <td className="nth px-[15px] cursor-pointer hover:text-text-hover">{email}</td>
                  <td className="nth px-[15px] cursor-pointer hover:text-text-hover">{joined}</td>
                  <td className="nth px-[15px] cursor-pointer hover:text-text-hover">{city}</td>
                  <td className="nth px-[15px] cursor-pointer hover:text-text-hover">{purchasedAmount}</td>
                  <td className="nth px-[15px] cursor-pointer">{member}</td>
               </tr>
            ))}
         </tbody>
         <tfoot className="w-full h-20">
            <tr>
               <th role="row" colSpan={9}>
                  <div className="font-thin flex w-full justify-between items-center max-w-[700px] mx-auto">
                     <button
                        style={currentPage === 1 ? { visibility: "hidden" } : {}}
                        className="hover:text-black dark:hover:text-gray-500"
                        onClick={() => setCurrentPage((cp) => (cp <= 1 ? 1 : cp - 1))}
                     >
                        previous
                     </button>
                     <div className="w-full flex items-center justify-center gap-5">
                        {[...new Array(pages).keys()].map((k) => {
                           k = k + 1;
                           return (
                              <div
                                 onClick={() => setCurrentPage(k)}
                                 key={k}
                                 style={k === currentPage ? { border: "1px solid gray" } : {}}
                                 className="p-2 cursor-pointer"
                              >
                                 {k}
                              </div>
                           );
                        })}
                     </div>
                     <button
                        style={currentPage >= pages ? { visibility: "hidden" } : {}}
                        className="hover:text-black dark:hover:text-gray-500"
                        onClick={() => setCurrentPage((cp) => (cp >= pages ? cp : cp + 1))}
                     >
                        next
                     </button>
                  </div>
               </th>
            </tr>
         </tfoot>
      </table>
   );
}

export default Table;
