import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "../router/Routes";
import BottomNavBar from "./components/BottomNavBar"; // Si quieres incluir la nav siempre

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ paddingBottom: "60px" }}>
        <AppRoutes />
      </div>
      <BottomNavBar />
    </BrowserRouter>
  );
};

export default App;
