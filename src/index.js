import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/home";
import Blog from "./home/blog";
import Contract from "./home/contract";
import About from "./home/about";
import Combo1 from "./home/combo1";
import Combo2 from "./home/combo2";
import Booking1 from "./home/booking1";
import Booking2 from "./home/booking2";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="booking1" element={<Booking1 />} />
          <Route path="booking2" element={<Booking2 />} />
          <Route path="contract" element={<Contract />} />
          <Route path="about" element={<About />} />
          <Route path="combo1" element={<Combo1 />} />
          <Route path="combo2" element={<Combo2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
