import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { SplitSummaryDetails } from "./pages/SplitSummaryDetails";
import { Chats } from "./pages/Chats";
import { SetNewSplit } from "./pages/SetNewSplit";

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
        <Route path="/chats" element={<Chats />} />
        <Route path="/set_new_split" element={<SetNewSplit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
