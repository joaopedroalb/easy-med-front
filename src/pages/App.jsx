import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/helper/ProtectedRoute";
import Home from "./Home";
import Login from "./Login";
import PatientRecord from "./PatientRecord";
import PatientProfile from "./Profile/Patient/PatientProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin/*" element={<Login />} />
          <Route path="signup/*" element={<PatientRecord />} />
          <Route path="profile/" element={
            <ProtectedRoute>
              <PatientProfile/>
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
