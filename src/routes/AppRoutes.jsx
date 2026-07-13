import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScanProduct from "../pages/scanner/ScanProduct";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ScanProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;