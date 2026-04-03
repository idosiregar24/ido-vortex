import { createRoot } from "react-dom/client";
import TailwindCSS from "./TailwindCSS";
import "./tailwind.css";
import Form from "./form";

createRoot(document.getElementById("root")).render(
  <div>
    {/* <TailwindCSS /> */}
    <Form/>
  </div>,
);
