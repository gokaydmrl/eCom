import { ReactElement, ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoutes = ({ children }: { children: ReactNode }) => {
  const auth = true;
  console.log("auth", auth);

  return <div>{auth ? children : <Navigate to="/login" />}</div>;
};
export default PrivateRoutes;
