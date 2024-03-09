import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./router/AppRoutes";

import "./assets/styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex flex-col justify-between h-screen">
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
