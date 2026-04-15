import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import MovieList from "./Components/MovieList";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [wishlist, setWishlist] = useState([]);

  return (
    <BrowserRouter>

      {/* ✅ NAVBAR (ONLY ONCE) */}
      <Navbar wishlistCount={wishlist.length} />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* ✅ PASS WISHLIST PROPS */}
        <Route
          path="/movies"
          element={
            <MovieList
              wishlist={wishlist}
              setWishlist={setWishlist}
            />
          }
        />

        <Route path="/movie/:id" element={<MovieList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;