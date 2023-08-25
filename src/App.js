import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Signin from "./pages/SignIn/SignIn";

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
      </Routes>
    </>
  );
}

export default App;
