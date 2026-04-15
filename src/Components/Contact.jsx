import "../App.css";

export default function Contact() {
  return (
    <div className="contact-page">

      <h1 className="contact-title">📞 Contact Us</h1>

      <p className="contact-text">
        Have questions, feedback, or suggestions? We'd love to hear from you!
      </p>

      {/* CONTACT FORM */}
      <form className="contact-form">
         
        <input
          type="text"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          required
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>

        <button type="submit">Send Message</button>

      </form>

      {/* EXTRA INFO */}
      <div className="contact-info">
        <p>📧 Email: support@moviesbooking.com</p>
        <p>📱 Phone: +91 99433 80663</p>
        <p>📍 Location: Sivaganga, India</p>
      </div>

    </div>
  );
}