import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/MatressPage/Home/homePage";
import Footer from "./components/MatressPage/Footer";
import About from "./components/MatressPage/About";
import Contact from "./components/MatressPage/Contact";
import Service from "./components/MatressPage/Service";
import Shop from "./components/MatressPage/Shop/Shop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
        </Routes>
        {/* Place Footer outside of Routes so it renders on every page */}
        
      </BrowserRouter>
    </div>
  );
}

export default App;
