import { Navigate, Route, Routes } from "react-router";
import useCheckAuth from "../hooks/CheckAuth";
import Jobs from "../features/jobs/Jobs";
import Login from "../features/auth/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import SignUp from "../features/auth/SignUp";

const AppRouter = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/jobs" element={<Jobs />} />
      {/* all routes below are protected */}
      <Route element={<ProtectedRoute />}>{/* more protected routes… */}</Route>
      {/* catch‑all */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
