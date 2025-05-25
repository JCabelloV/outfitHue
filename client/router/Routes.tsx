import { Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login";
import Home from "../src/pages/Home";
import Settings from "../src/pages/Settings";
import Profile from "../src/pages/Profile";
import Palettes from "../src/pages/SavedPalettes";
import PrivateRoute from "./PrivateRoute";

export const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route
      path="/"
      element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      }
    />
    <Route
      path="/settings"
      element={
        <PrivateRoute>
          <Settings />
        </PrivateRoute>
      }
    />
    <Route
      path="/profile"
      element={
        <PrivateRoute>
          <Profile />
        </PrivateRoute>
      }
    />
    <Route
      path="/palettes"
      element={
        <PrivateRoute>
          <Palettes />
        </PrivateRoute>
      }
    />
  </Routes>
);
