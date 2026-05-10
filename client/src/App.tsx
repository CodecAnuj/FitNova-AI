import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";

import Login from "./pages/auth/Login";

import Register from "./pages/auth/Register";

import Dashboard from "./pages/dashboard/Dashboard";

import Workouts from "./pages/dashboard/Workouts";

import Progress from "./pages/dashboard/Progress";

import AiCoach from "./pages/dashboard/AiCoach";

import Settings from "./pages/dashboard/Settings";

import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/workouts"
        element={
          <ProtectedRoute>
            <Workouts />
          </ProtectedRoute>
        }
      />

      <Route
        path="/progress"
        element={
          <ProtectedRoute>
            <Progress />
          </ProtectedRoute>
        }
      />

      <Route
        path="/ai-coach"
        element={
          <ProtectedRoute>
            <AiCoach />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;