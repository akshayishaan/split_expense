import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { Login } from "./Login";
import { Home } from "./Home";
import { SplitSummaryDetails } from "./SplitSummaryDetails";
import { Chats } from "./Chats";
import { SetNewSplit } from "./SetNewSplit";
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
