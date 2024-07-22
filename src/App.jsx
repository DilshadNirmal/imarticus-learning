import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllPrograms from "./pages/AllPrograms";
import NoPage from "./pages/NoPage";
import LogIn from "./components/LogIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/All Programs" element={<AllPrograms />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
