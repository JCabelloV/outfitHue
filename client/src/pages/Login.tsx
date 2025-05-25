import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/");
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default Login;
