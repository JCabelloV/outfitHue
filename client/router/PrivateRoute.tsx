// este archivo es el que se encarga de proteger las rutas privadas
// y redirigir a la pagina de login si no hay un token valido

import { Navigate } from "react-router-dom";
import { useAuth } from "../src/context/AuthContext";
import React from "react";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
