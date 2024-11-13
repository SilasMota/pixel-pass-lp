import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SteganographyInfo from "./pages/SteganographyInfo";
import Docs from "./pages/Docs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/steganography-info" element={<SteganographyInfo />} />
          <Route path="/docs" element={<Docs />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
