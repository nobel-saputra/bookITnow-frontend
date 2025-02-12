import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import "./css/mediaScreen.css";
import "./css/font.css";
import NavbarHome from "./main/navBarHome.jsx";
import Destinations from "./main/destinations.jsx";
import Selingan from "./main/selingan.jsx";
import Contact from "./main/contact.jsx";
import Footer from "./main/footer.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavbarHome />
    <Destinations />
    <Selingan />
    <Contact />
    <Footer />
  </StrictMode>
);
