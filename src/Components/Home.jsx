import { useState, useEffect } from "react";
import "../App.css";

/* 🔥 SLIDER DATA */
const slides = [
  {
    id: 1,
    image: "https://cdn.district.in/movies-assets/images/cinema/Vaazha---Biopic-of-a-Billion-Boys-(2024)-optimized-09493560-2c4e-11f1-ac8a-49324e578d89.jpg",
    title: "Vaazha II",
  },
  {
    id: 2,
    image: "https://assets-in.bmscdn.com/discovery-catalog/events/et00391009-awxhdvnrch-landscape.jpg",
    title: "Premalu",
  },
  {
    id: 3,
    image: "https://indiacurrents.com/wp-content/uploads/2025/03/dragon-2025-movie-review.webp",
    title: "Dragon",
  },
  {
    id: 4,
    image: "https://wallpaperaccess.com/full/2673116.jpg",
    title: "Adithya Varma",
  },
];

/* 🔥 TRENDING */
const trending = [
  { id: 1, name: "Brother", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZyjz40cppIDESAZ5HU99UbpNyHsAjZD92HA&s",ott: "https://www.zee5.com/movies/details/brother/0-0-1z5662738" },
  { id: 2, name: "Amaran", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFVVevspeOrEytZvRwSsAz4nAZE1jlg_p8Pg&s",ott: "https://www.netflix.com/in/title/81728596"  },
  { id: 3, name: "Dada", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5RM7Lf5V0Zx-Z59VyIQIH__IOmSsZtQntEQ&s",ott: "https://www.primevideo.com/detail/Dada/0R217Y1Q451WCBPMHE8BA2SKPJ" },
  { id: 4, name: "Raja Rani", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZMmxUQbu7xsjT07Ha2e0Wy4NsZALm47f1w&s",ott: "https://www.hotstar.com/in/movies/raja-rani/1000055960" },
  { id: 5, name: "Master", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQypUEynaokhCZT4BMs3tc5_y4Ekf5uhBd1NQ&s" ,ott: "https://www.primevideo.com/detail/Master-Tamil/0HSY45SA9NH2ABLBGAJEVV1HAL"},
  { id: 6, name: "Sulthan", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkilOpgAw1RJZM5b6fHJnSCUsAHGVv_UkS1Q&s",ott: "https://www.primevideo.com/detail/Sulthan/0KUHO04RM1RLWECQD1QGLJG1QN" },
  { id: 7, name: "Dragon", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1lYQDMlZNuSOrz9LDIg2T5N5ufIO2__p2jQ&s",ott: "https://www.netflix.com/in/title/81762715" },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>

      {/* 🔥 SLIDER */}
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === activeIndex ? "active" : ""}`}
          >
            <img src={slide.image} alt={slide.title} />

            <div className="content">
              <h1>{slide.title}</h1>
              <button>▶ Play</button>
            </div>
          </div>
        ))}

        <button
          className="prev"
          onClick={() =>
            setActiveIndex(
              activeIndex === 0 ? slides.length - 1 : activeIndex - 1
            )
          }
        >
          ❮
        </button>

        <button
          className="next"
          onClick={() =>
            setActiveIndex((activeIndex + 1) % slides.length)
          }
        >
          ❯
        </button>
      </div>

      {/* 🔥 TRENDING ROW */}
      <h2 className="row-title">🔥 Trending Tamil Movies</h2>

      <div className="row">
        {trending.map((movie) => (
          <div key={movie.id} className="row-card" onClick={() => window.open(movie.ott, "_blank")}>
            <img
              src={movie.img}
              alt={movie.name}
              onError={(e) => (e.target.src = "https://picsum.photos/200/300")}
            />
            <p>{movie.name}</p>
          </div>
        ))}
      </div>

    </div>
  );
}