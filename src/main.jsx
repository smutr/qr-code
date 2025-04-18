import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom";

import QrCodeGenerator from "./components/Generate/QrCodeGenerator";
import QrCodeScanner from "./components/Scan/QrCodeScanner";
import Navigation from "./components/Navigation/Navigation";

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </>
);
