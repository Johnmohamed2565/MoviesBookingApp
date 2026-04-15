import { useState, useEffect } from "react";
import "../App.css";

export default function MovieList({ wishlist, setWishlist }) {
  const [movies, setMovies] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://www.fooapi.com/api/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.data || data.movies || []);
      })
      .catch((err) => console.log(err));
  }, []);

  // ✅ READ MORE
  const toggleReadMore = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // ✅ WISHLIST
  const toggleWishlist = (movie) => {
    const exists = wishlist.find((item) => item.id === movie.id);

    if (exists) {
      setWishlist(wishlist.filter((item) => item.id !== movie.id));
    } else {
      setWishlist([...wishlist, movie]);
    }
  };

  // ✅ SEARCH
  const filteredMovies = movies.filter((movie) =>
    (movie.title || movie.name || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="movie-page">
      <h2 className="page-title"> 🎬 MoviesList</h2>

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Search movies..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="card-container">
        {filteredMovies.map((movie, index) => {
          const id = movie.id || index;
          const isExpanded = expandedId === id;
          const isWishlisted = wishlist.some(
            (item) => item.id === id
          );

          return (
            <div className="movie-card-new small" key={id}>
              
              <img
                src={movie.poster || movie.image}
                alt={movie.title || movie.name}
              />

              <div className="card-content">
                <h3>{movie.title || movie.name}</h3>

                <p className={`desc ${isExpanded ? "expanded" : ""}`}>
                  {movie.plot || movie.description}
                </p>

                <span
                  className="read-more"
                  onClick={() => toggleReadMore(id)}
                >
                  {isExpanded ? "Read Less" : "Read More..."}
                </span>

                {/* ❤️ WISHLIST */}
                <button
                  className={`wishlist-btn ${
                    isWishlisted ? "active" : ""
                  }`}
                  onClick={() => toggleWishlist(movie)}
                >
                  {isWishlisted ? "❤️ Added" : "🤍 Add"}
                </button>

                <div className="card-footer">
                  <span className="rating">
                    ⭐ {movie.rating || "N/A"}
                  </span>
                  <span className="price">
                    ₹{movie.price || "N/A"}
                  </span>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}