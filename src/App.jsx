import { Route, Routes } from "react-router-dom";
import "./App.css";
import GeneralForm from "./components/GeneralForm";
import PortalForm from "./components/PortalForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GeneralForm />} />
        <Route path="/portal" element={<PortalForm />} />
      </Routes>
    </>
  );
}

export default App;
