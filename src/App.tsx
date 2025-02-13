import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Weather from "./pages/Weather";
import History from "./pages/History";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
