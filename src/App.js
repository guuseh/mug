import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Exhibits from "./pages/Exhibits";
import Archive from "./pages/Archive";
import About from "./pages/About";
import Mug from "./pages/Mug";
import Text from "./pages/Text";
import Drawing from "./pages/Drawing";
import ScrollToTop from "./components/Scroll";
import { ParallaxProvider } from 'react-scroll-parallax';



function App() {
  return (
    <ParallaxProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="mug" element={<Mug />} />
        <Route path="collection" element={<Collection />} />
        <Route path="exhibits" element={<Exhibits />} />
        <Route path="archive" element={<Archive />} />
        <Route path="text" element={<Text />} />
        <Route path="about" element={<About />} />
        <Route path="drawing" element={<Drawing />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
