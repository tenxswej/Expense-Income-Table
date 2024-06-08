import { Header, Table, SearchOperations, Skeleton } from "./components/index";


function App() {
  return (
    <main className="min-h-screen text-text-main">
      <Header />
      <div className="z-50 max-w-6xl mx-auto -translate-y-[125px]">
        <SearchOperations />
        <Skeleton />
      </div>
    </main>
  );
}

export default App;
