import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomeScreen from "./screens/homeScreen";
import CartScreen from "./screens/cartScreen";
import SigninScreen from "./screens/signinScreen";
import NavBar from "./components/navigationBar";

function App() {
  return (
    <Router>
      <div>
        {/* navigation bar */}
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/signin" />} />
          <Route exact path="/signin" element={<SigninScreen />} />
          <Route exact path="/home" element={<HomeScreen />} />
          <Route exact path="/cart" element={<CartScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
