import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";

// Context
import { AlertContext } from "./context/AlertContext";
import { useContext } from "react";

function App() {
  const { alert } = useContext(AlertContext);
  return (
    <>
      
        <Navbar />
        {alert && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white text-green-400 px-4 py-2 rounded shadow z-50 border border-green-400">
            {alert}
          </div>
        )}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      
    </>
  );
}

export default App;
