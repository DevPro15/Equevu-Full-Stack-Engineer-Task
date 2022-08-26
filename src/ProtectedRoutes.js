import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  return localStorage.getItem("userInfo") ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutes;
