import { Navigate, Route, Routes } from "react-router";
import useCheckAuth from "../hooks/CheckAuth";
import Jobs from "../features/jobs/Jobs";
import Login from "../features/auth/Login";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRouter = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/login" element={<Login />} />

      {/* all routes below are protected */}
      <Route element={<ProtectedRoute />}>
        <Route path="/jobs" element={<Jobs />} />
        {/* more protected routes… */}
      </Route>

      {/* catch‑all */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
