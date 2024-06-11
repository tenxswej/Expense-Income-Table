import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { fetcher } from "../utils/fetcher";

type TData = {
   id: number;
   name: string;
   city: string;
   email: string;
   joined: string;
   purchasedAmount: number;
   member: string;
};
type InitialState = {
   data: TData[];
   setData: Dispatch<SetStateAction<[] | TData[]>>;
   error: string | null;
   loading: boolean;
   currentPage: number;
   setCurrentPage: Dispatch<SetStateAction<number>>;
   pages: number;
   search: string | null;
   setSearch: Dispatch<SetStateAction<string | null>>;
   searchField: string | null;
   setSearchField: Dispatch<SetStateAction<string | null>>;
   sort: { field: "id" | "purchasedAmount" | "joined"; ascending: boolean };
   setSort: Dispatch<SetStateAction<{ field: "id" | "purchasedAmount" | "joined"; ascending: boolean }>>;
};

const Context = createContext<InitialState | null>(null);

export function ContextProvider({ children }: any) {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   const [data, setData] = useState<[] | TData[]>([]);
   const [pages, setPages] = useState(0);
   const [currentPage, setCurrentPage] = useState(1);

   const [search, setSearch] = useState<string | null>(null);
   const [searchField, setSearchField] = useState<string | null>("name");
   const [sort, setSort] = useState<{ field: "id" | "purchasedAmount" | "joined"; ascending: boolean }>({ field: "id", ascending: true });

   useEffect(() => {
      async function fetchData() {
         const { data, message } = await fetcher(
            `${import.meta.env.VITE_BASE_URL}?_sort=${sort.ascending ? sort.field : "-" + sort.field},&_page=${currentPage}&_per_page=5}`
         );
         

         if (data !== null) {
            setData(data.data);
            setPages(data.pages);
         } else {
            setError(message);
            setData([]);
         }
         setLoading(false);
      }
      if (search === "" || search === null) {
         fetchData();
      }
   }, [currentPage, pages, search, sort]);

   useEffect(() => {
      async function fetchData() {
         const { data, message } = await fetcher(`${import.meta.env.VITE_BASE_URL}?${searchField}=${search}`);

         if (data !== null) {
            setData(data);
         } else {
            setError(message);
            setData([]);
         }
         setLoading(false);
      }

      if (search !== null && search !== "") {
         let timeoutId = setTimeout(async () => {
            await fetchData();
         }, 1000);
         return () => clearTimeout(timeoutId);
      }
   }, [search, searchField]);

   return (
      <Context.Provider
         value={{
            data,
            setData,
            error,
            loading,
            currentPage,
            setCurrentPage,
            pages,
            search,
            setSearch,
            searchField,
            setSearchField,
            sort,
            setSort,
         }}
      >
         {children}
      </Context.Provider>
   );
}

export function useData() {
   const context = useContext(Context);

   if (context === null) {
      throw new Error("Error happened");
   }
   return context;
}
