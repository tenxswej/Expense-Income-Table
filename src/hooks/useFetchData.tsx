import axios from "axios";
import { useState, useEffect } from "react";

type TData = {
  id: number;
  name: string;
  city: string;
  email: string;
  joined: string;
  purchasedAmount: number;
  member: string;
};

export function usFetchData() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<null | TData[]>();

  useEffect(() => {
    async function fetchData() {
      // todo: vite env local
      const res: TData[] = await axios.get("http://localhost:3000/customers");

      console.log("fff", res);

      setData(res);

      setLoading(false);
    }

    fetchData();
  }, []);

  return {
    loading,
    data,
  };
}
