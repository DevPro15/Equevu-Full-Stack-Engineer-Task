import { Routes, Route, Navigate } from "react-router-dom";
import Form from "./components/pages/Form";
import LoginPage from "./components/pages/LoginPage";
import ResumeGetter from "./components/pages/ResumeGetter";
import Listing from "./components/pages/List";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="form" element={<Form />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="resume" element={<ResumeGetter />} />
        <Route path="list" element={<Listing />} />
      </Routes>
    </>
  );
}

export default App;
