import { usFetchData } from "./hooks/useFetchData";
import { Header, Table, SearchOperations, Skeleton } from "./components/index";
import { data as d } from "./data/data";

function App() {
  const { loading, data } = usFetchData();

  console.log(data);
  return (
    <main className="min-h-screen text-text-main">
      <Header />
      <div className="z-50 max-w-6xl mx-auto -translate-y-[125px]">
        {loading ? <Skeleton /> : <Table data={d} />}
      </div>
    </main>
  );
}

export default App;
