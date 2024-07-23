import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllPrograms from "./pages/AllPrograms";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/All Programs" element={<AllPrograms />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
