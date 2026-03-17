import { StrictMode } from 'react';
import "./index.css"
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./landing_page/home/HomePage.jsx";
import Signup from "./landing_page/signup/Signup";
import Login from "./landing_page/signup/Login.jsx";
import AboutPage from './landing_page/about/AboutPage';
import ProductsPage from "./landing_page/products/ProductsPage";
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from './landing_page/Navbar.jsx';
import Footer from './landing_page/Footer.jsx';
import NotFound from './landing_page/NotFound.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import DashboardRedirect from "./landing_page/DashboardRedirect.jsx";
import "react-toastify/dist/ReactToastify.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<DashboardRedirect/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/products' element={<ProductsPage/>}/>
      <Route path='/pricing/*' element={<PricingPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    <ToastContainer position="bottom-left" autoClose={2000} />
  </BrowserRouter>
  </StrictMode>
)
