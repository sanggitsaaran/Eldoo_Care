import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Eldoo Care</h3>
          <p>India's First and Last Mile Care Bridge</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/plans">Plans</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/book">Book Now</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Our Services</h4>
          <ul>
            <li><Link to="/plans">Medical Escort</Link></li>
            <li><Link to="/plans">Caregiver Visit</Link></li>
            <li><Link to="/plans">Home Nurse Visit</Link></li>
            <li><Link to="/plans">Doctor Home Visit</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li><i className="fas fa-phone"></i> +91 99000 41047</li>
            <li><i className="fas fa-envelope"></i> eldoocare@gmail.com</li>
            <li><i className="fas fa-map-marker-alt"></i> South India</li>
            <li><a href="https://wa.me/919900041047" className="whatsapp-link"><i className="fab fa-whatsapp"></i> Chat Now</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Eldoo Care. All rights reserved.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}
