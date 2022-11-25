import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/helper/ProtectedRoute";
import Home from "./Home";
import Login from "./Login";
import PatientRecord from "./PatientRecord";
import PatientProfile from "./Profile/Patient/PatientProfile";
import DoctorProfile from "./Profile/Doctor/DoctorProfile";
import ListPatient from "./ListPatient";
import PatientByDoctor from "./Profile/PatientByDoctor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin/*" element={<Login />} />
          <Route path="signup/*" element={<PatientRecord />} />
          <Route path="doctor-profile/*" element={<DoctorProfile />} />
          <Route
            path="profile/"
            element={
              <ProtectedRoute doctorView={false}>
                <PatientProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="list"
            element={
              <ProtectedRoute doctorView={true}>
                <ListPatient />
              </ProtectedRoute>
            }
          />
          <Route
            path="patient/:id"
            element={
              <ProtectedRoute doctorView={true}>
                <PatientByDoctor />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
