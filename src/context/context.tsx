import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFetchData";

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
   currentPage : number;
   setCurrentPage: Dispatch<SetStateAction<number>>;
   pages: number;
};

const Context = createContext<InitialState | null>(null);

export function ContextProvider({ children }: any) {
   const [currentPage, setCurrentPage] = useState(1);
   const [pages, setPages] = useState(0);

   const { data, setData, error, loading } = useFetchData(`${import.meta.env.VITE_BASE_URL}?_page=${currentPage}&_per_page=5`, currentPage, pages, setPages);

   return <Context.Provider value={{ data, setData, error, loading, currentPage, setCurrentPage, pages }}>{children}</Context.Provider>;
}

export function useData() {
   const context = useContext(Context);

   if (context === null) {
      throw new Error("Error happened");
   }
   return context;
}
