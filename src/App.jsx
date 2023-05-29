import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Signup from "./pages/signup";
import About from "./pages/about";
import Team from "./pages/team";
import Login from "./pages/login";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
