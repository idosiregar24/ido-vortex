import { createRoot } from "react-dom/client";
import TailwindCSS from "./TailwindCSS";
import "./tailwind.css";
import PropertyList from "./components/PropertyList";


createRoot(document.getElementById("root")).render(
  <div>
    <PropertyList/>
  </div>,
);
