import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/helper/ProtectedRoute";
import Home from "./Home";
import Login from "./Login";
import PatientRecord from "./PatientRecord";
import PatientProfile from "./Profile/Patient/PatientProfile";
import FAQ from "./FAQ/FAQ";
import ListPatient from "./ListPatient";
import PatientByDoctor from "./Profile/PatientByDoctor";
import DoctorSightPacient from "./DoctorSight-PacientProfile";
import ConfigPage from "./Config";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import DoctorProfile from "./Profile/Doctor/DoctorProfile";

function App() {
  const {user, loadingAuth} = useContext(UserContext)
 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='config' element={<ConfigPage/>}/>
          <Route path="/" element={<Home />} />
          <Route path="signin/*" element={<Login />} />
          <Route path="signup/*" element={<PatientRecord />} />
          <Route path="faq/*" element={<FAQ />} />
          {
            user !== null && (
              <Route
                path="profile/"
                element={
                  user.isDoctor ? <DoctorProfile /> :  <PatientProfile/>
                }
              />
            )
          }
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
          <Route path="dev/" element={<DoctorSightPacient /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
