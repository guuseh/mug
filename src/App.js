import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Exhibits from "./pages/Exhibits";
import Archive from "./pages/Archive";
import Bibliography from "./pages/Bibliography"
import Contact from "./pages/Contact";
import About from "./pages/About";
import Mug from "./pages/Mug";
import Text from "./pages/Text";
import Mug3D from "./components/Mug3D";
import Drawing from "./pages/Drawing";
import ScrollToTop from "./components/Scroll";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="mug" element={<Mug />} />
        <Route path="collection" element={<Collection />} />
        <Route path="exhibits" element={<Exhibits />} />
        <Route path="archive" element={<Archive />} />
        <Route path="text" element={<Text />} />
        <Route path="bibliography" element={<Bibliography />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="drawing" element={<Drawing />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
