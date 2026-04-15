import "../App.css";

export default function About() {
  return (
    <div className="about-page">
      
      <h1 className="about-title">🎬 About MoviesBookingApp</h1>

      <p className="about-text">
        MoviesBooking is a modern movie browsing platform designed to help users
        explore the latest Tamil movies with ease. You can view movie details,
        check ratings, and manage your favorite movies using the wishlist feature.
      </p>

      <p className="about-text">
        This project is built using React, showcasing dynamic UI components,
        API integration, and interactive features like search and expandable
        movie descriptions.
      </p>

      <p className="about-text">
        Our goal is to provide a smooth and engaging movie browsing experience
        similar to popular platforms like Netflix and BookMyShow.
      </p>

      <h2 className="about-subtitle">✨ Features</h2>

      <ul className="about-list">
        <li>🎥 Browse latest movies</li>
        <li>⭐ View ratings and pricing</li>
        <li>🔍 Search movies easily</li>
        <li>📖 Read more / Read less description</li>
      </ul>

      <h2 className="about-subtitle">👩‍💻 Developer</h2>

      <p className="about-text">
        Developed by <strong>JOHNMOHAMED A</strong>, a passionate CSE student
        focused on Full-Stack Web Development using React and Node.js.
      </p>

    </div>
  );
}