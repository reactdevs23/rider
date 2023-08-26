import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Signin from "./pages/SignIn/SignIn";
import Inventory from "./pages/Inventory/Inventory";
import Account from "./pages/Account";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const hideHeader = location.pathname === "/signin";
  useEffect(() => {
    navigate("/signin");
  }, []);

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/account" element={<Account />}></Route>
      </Routes>
    </>
  );
}

export default App;
