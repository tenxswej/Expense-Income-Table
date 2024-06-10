export async function fetcher(url: string): Promise<{ data: any; message: string }> {
   try {
      const res = await fetch(url);

      if (res.ok) {
         const jsonData = await res.json();

         return { data: jsonData, message: "Not found" };
      } else if (res.status === 404) {
         return { data: null, message: "Not found" };
      } else {
         return { data: null, message: "Server Error" };
      }
   } catch (e: unknown) {
      throw new Error("Error");
   }
}
