import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
