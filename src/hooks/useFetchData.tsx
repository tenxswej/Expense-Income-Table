import { Dispatch, SetStateAction, useEffect, useState } from "react";

type TData = {
   id: number;
   name: string;
   city: string;
   email: string;
   joined: string;
   purchasedAmount: number;
   member: string;
};

export function useFetchData(url: string, currentPage: number, pages: number, setPages: Dispatch<SetStateAction<number>>) {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);
   const [data, setData] = useState<[] | TData[]>([]);

   useEffect(() => {
      async function fetchData() {
         try {
            const res = await fetch(url);

            if (res.ok) {
               const jsonData = await res.json();

               if (Array.isArray(jsonData)) {
                  setData(jsonData);
               } else {
                  setData(jsonData.data);
                  setPages(jsonData.pages);
               }

               setLoading(false);
            }
         } catch (e: unknown) {
            setError("An Error occurred!");
            setData([]);
         } finally {
            setLoading(false);
         }
      }

      fetchData();
   }, [currentPage, pages]);

   return {
      loading,
      data,
      error,
      setData,
   };
}
