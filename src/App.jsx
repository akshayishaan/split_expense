import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { Login } from "./Login";
import { Home } from "./Home";
import { SplitSummaryDetails } from "./SplitSummaryDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/split_summary_details"
          element={<SplitSummaryDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
