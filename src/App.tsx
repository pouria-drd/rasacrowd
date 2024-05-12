import { BrowserRouter } from "react-router-dom";

import Footer from "./components/Footer";
import AppRoutes from "./router/AppRoutes";
import Navbar from "./components/navbar/Navbar";
import ScrollToTopOnMount from "./components/ScrollToTopOnMount";

import "./assets/styles/App.css";
import AppLayout from "./components/layouts/AppLayout";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTopOnMount />
            <Navbar />
            <div className="flex flex-col justify-between h-svh">
                <AppLayout>
                    <AppRoutes />
                </AppLayout>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
