import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import AllCourses from "./pages/AllCourses";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="  w-10 h-10 rounded-full bg-none border-t-4 animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/allCourses" element={<AllCourses />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
