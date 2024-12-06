import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
