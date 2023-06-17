import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  const stateUser = useSelector((state) => state.user);
  return stateUser.id ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;