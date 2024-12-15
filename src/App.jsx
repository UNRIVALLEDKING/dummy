import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import ProductPage from './pages/ProductPage';
import SellersLogin from './pages/SellersLogin';
import ProductDetailPage from './pages/ProductDetailPage';
import ChatPage from './pages/ChatPage';
import PostRequirement from './pages/PostRequirement';
import CompanyProfile from './pages/CompanyProfile';
import Layout from './components/RootLayout';
import CompanyProducts from './pages/company/CompanyProducts';
import CompanyOrders from './pages/company/CompanyOrders';
import CompanyPublicProfile from './pages/company/CompanyPublicProfile';

function App() {
  return (
    <div className="bg-background">
      <LoginModal />
      <Routes>
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route index element={<LandingPage />} />
                <Route path="/sellers-login" element={<SellersLogin />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/post-requirement" element={<PostRequirement />} />
                <Route path="/company-dashboard" element={<CompanyProfile />} />
                <Route
                  path="/company-dashboard/products"
                  element={<CompanyProducts />}
                />
                <Route
                  path="/company-dashboard/orders"
                  element={<CompanyOrders />}
                />
                <Route
                  path="/company/public-profile"
                  element={<CompanyPublicProfile />}
                />
              </Routes>
            </Layout>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
