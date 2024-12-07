import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import ProductPage from './pages/ProductPage';
import SellersLogin from './pages/SellersLogin';

function App() {
  return (
    <div className="bg-background">
      <Navbar />
      <LoginModal />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/sellers-login" element={<SellersLogin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
