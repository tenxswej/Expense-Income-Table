import { ChangeEvent } from "react";
import { useData } from "../context/context";

function SearchOperations() {
   const { search, setSearch, setSearchField, searchField } = useData();

   return (
      <div className="flex items-center gap-10 mb-5">
         <div className="w-fit flex items-center justify-center rounded-[5px]">
            <input
               onFocus={() => {
                  setSearchField("name");
               }}
               placeholder="Search username & email"
               type="search"
               className="w-[300px] px-[16px] py-[11px] bg-transparent border-b border-b-gray-700 outline-none text-text-main"
               value={search !== null && searchField === "name" ? search : ""}
               onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  if (e.target.value === "") {
                     setSearch("");
                  } else {
                     setSearch(e.target.value);
                  }
               }}
            />
            <i>
               <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
               </svg>
            </i>
         </div>
         <div>
            <select
               value={search !== null && searchField === "city" ? search : ""}
               onFocus={() => {
                  setSearchField("city");
               }}
               onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                  if (e.target.value === "all") {
                     setSearch("");
                  } else {
                     setSearch(e.target.value);
                  }
               }}
               name="city"
               id="city"
               className="w-[200px] bg-secondary px-[16px] py-[11px] border rounded-[6px] border-gray-700"
            >
               <option value="all">All</option>
               <option value="New York">New York</option>
               <option value="Yangon">Yangon</option>
               <option value="Tel Avi">Tel Avi</option>
               <option value="Chicago">Chicago</option>
            </select>
         </div>
         <div className="border rounded-[6px] border-gray-700 bg-secondary px-[16px] py-[11px] space-x-5">
            <label htmlFor="dateInput" id="datePlaceholder">
               Joined On
            </label>
            <input type="date" className="bg-transparent" data-placeholder="Select a date" />
         </div>
      </div>
   );
}

export default SearchOperations;
