import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/homeScreen";
import CartScreen from "./screens/cartScreen";
import NavBar from "./components/navigationBar";

function App() {
  return (
    <Router>
      <div>
        {/* navigation bar */}
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/cart" element={<CartScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
