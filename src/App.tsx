import { useData } from "./context/context";
import { Header, Table, SearchOperations, Skeleton, ErrorMessage } from "./components/index";

function App() {
   const { data, error, loading } = useData();

   return (
      <main className="min-h-screen text-text-main overflow-x-hidden">
         <Header />
         {error ? (
            <ErrorMessage />
         ) : loading ? (
            <Skeleton />
         ) : (
            <div className="z-50 max-w-6xl mx-auto -translate-y-[125px]">
               <SearchOperations />
               <Table data={data} />
            </div>
         )}
      </main>
   );
}

export default App;
