import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Service from "./pages/service/Service.jsx"; // Create this component
import Results from "./pages/results/Results.jsx";
import Cost from "./pages/cost/Cost.jsx";
import "./App.css";
import Booknow from "./components/Booknow.jsx";
import AboutUs from "./pages/about/AboutUs.jsx";
import ContactUs from "./pages/contactus/ContactUs.jsx";
import Blogs from "./pages/blogs/Blogs.jsx";
import BlogDetails from "./pages/blog-details/BlogDetails.jsx";
import OurClinic from "./pages/our-clinic/OurClinic.jsx";

const App = () => {
  return (
    <Router>
      <Header />
      <Booknow />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/results" element={<Results />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/cost" element={<Cost />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/our-clinic" element={<OurClinic />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
