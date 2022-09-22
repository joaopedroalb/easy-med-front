import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/helper/ProtectedRoute";
import Home from "./Home";
import Login from "./Login";
import PatientRecord from "./PatientRecord";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route path="cadastro-paciente/*" element={<PatientRecord />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
