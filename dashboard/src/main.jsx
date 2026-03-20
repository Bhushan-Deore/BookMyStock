import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from "react-router-dom";
import './index.css'
import Home from "./components/Home";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from './routes/ProtectedRoute';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </HashRouter>
  </StrictMode>
);
