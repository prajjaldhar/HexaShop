import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage.jsx";
import LoginPage from "./Pages/Home/LoginPage.jsx";
import ProductDescription from "./Pages/Home/ProductDescription.js";
import ProtectedRoute from "./Components/routes/ProtectedRoutes.js";
import PublicRoutes from "./Components/routes/PublicRoutes.js";
import MobileDisplay from "./Pages/Home/MobileDisplay.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mobiledisplay"
          element={
            <ProtectedRoute>
              <MobileDisplay />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <LoginPage />
            </PublicRoutes>
          }
        />
        <Route
          path="/product/:params"
          element={
            <ProtectedRoute>
              <ProductDescription />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
