import { Navigate, Outlet } from "react-router";
import useCheckAuth from "../hooks/CheckAuth";

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useCheckAuth();
  console.log(
    `This is from the protected route user state: ${isAuthenticated}`
  );
  console.log(`This is from the protected route loading state : ${loading}`);
  if (loading) {
    // you could return a <Spinner /> here
    //return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    <Outlet /> // render child routes
  ) : (
    <Navigate to="/login" replace />
  ); // or your login path
};

export default ProtectedRoute;
