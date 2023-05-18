import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Error404 from "./pages/Error404/Error404";
import Home from "./pages/Home/Home";
import Housing from "./pages/Housing/Housing";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/erreur404" element={<Error404 />} />
          <Route path="/logements/:id" element={<Housing />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
