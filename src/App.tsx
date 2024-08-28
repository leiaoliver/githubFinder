import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="max-w-[500px] mx-auto">
      <h1 className="text-center mb-[1rem]  text-[2rem] font-bold">
        Github Finder
      </h1>
      <Outlet />
    </div>
  );
}

export default App;
