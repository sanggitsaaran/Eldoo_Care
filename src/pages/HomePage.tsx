import { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  const [bookingModal, setBookingModal] = useState(false);

  return (
    <div className="home-page">
      {/* Hero Section with Prominent Booking */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Your Parents Deserve Care That Feels Like Home</h1>
            <p>From hospital visits to daily care — we're there at every step. Safe, reliable, always dependable.</p>
            
            {/* Prominent Booking CTA - Like Swiggy's food ordering */}
            <div className="quick-book-section">
              <button className="btn btn-primary btn-large" onClick={() => setBookingModal(true)}>
                <i className="fas fa-calendar-check"></i> Book Care Now
              </button>
              <div className="quick-stats">
                <div className="stat">
                  <strong>100+</strong>
                  <span>Families Served</span>
                </div>
                <div className="stat">
                  <strong>9 Cities</strong>
                  <span>Across South India</span>
                </div>
                <div className="stat">
                  <strong>24/7</strong>
                  <span>Always Available</span>
                </div>
              </div>
            </div>

            <a href="https://wa.me/919999999999" className="btn btn-secondary">
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>

          <div className="hero-image">
            <img src="/images/eldercare-hero.png" alt="Eldoo Care - Professional Care" />
          </div>
        </div>
      </section>

      {/* Why Choose Us - Simple & Concise */}
      <section className="why-section">
        <div className="container">
          <h2>Why Families Trust Eldoo Care</h2>
          <div className="why-grid">
            <div className="why-card">
              <i className="fas fa-check-circle"></i>
              <h3>Professional Care</h3>
              <p>Every caregiver is trained, verified, and monitored for your peace of mind.</p>
            </div>
            <div className="why-card">
              <i className="fas fa-shield-alt"></i>
              <h3>Your Safety First</h3>
              <p>Real-time updates and consistent schedules so you always know they're safe.</p>
            </div>
            <div className="why-card">
              <i className="fas fa-heart"></i>
              <h3>Human Touch</h3>
              <p>Professional healthcare with genuine warmth and respect for your parents.</p>
            </div>
            <div className="why-card">
              <i className="fas fa-phone"></i>
              <h3>Always Available</h3>
              <p>24/7 support. Reach us by phone, WhatsApp, or our app — whatever works for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Simple Overview */}
      <section className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🚗</div>
              <h3>Medical Transport</h3>
              <p>Safe rides to doctors, hospitals, and clinics with trained assistance.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🤝</div>
              <h3>Home Care</h3>
              <p>Daily help with bathing, grooming, meals, and medications at home.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏥</div>
              <h3>Medical Escorts</h3>
              <p>For complex care needs — medical professionals travel with them.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3>Care Management</h3>
              <p>We handle everything — coordination, scheduling, and care planning.</p>
            </div>
          </div>
          <Link to="/plans" className="btn btn-outline">
            See All Plans & Pricing
          </Link>
        </div>
      </section>

      {/* Testimonials - Real Stories, Simple */}
      <section className="testimonials-section">
        <div className="container">
          <h2>What Families Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Eldoo Care called me after Dad's dialysis to confirm he was safe. That call meant everything."</p>
              <strong>— Rajesh K., Bengaluru</strong>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"I live in Singapore. Knowing Eldoo Care is with Mom gives me peace I haven't felt in years."</p>
              <strong>— Priya S., Chennai</strong>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"They were punctual, respectful, and Mom actually enjoys their company. Perfect service."</p>
              <strong>— Anand P., Coimbatore</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage - Cities */}
      <section className="coverage-section">
        <div className="container">
          <h2>We Serve 9 Cities Across South India</h2>
          <div className="coverage-content">
            <div className="cities-list">
              <div className="city-badge">Bengaluru</div>
              <div className="city-badge">Chennai</div>
              <div className="city-badge">Madurai</div>
              <div className="city-badge">Coimbatore</div>
              <div className="city-badge">Tiruppur</div>
              <div className="city-badge">Hosur</div>
              <div className="city-badge">Tirunelveli</div>
              <div className="city-badge">Thoothukudi</div>
              <div className="city-badge">Nagercoil</div>
            </div>
            <img src="/images/location.png" alt="Map of South India" className="coverage-map" />
          </div>
          <p className="coverage-text">
            Expanding steadily because every family deserves a care partner they can trust.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Book your first care session in less than 2 minutes.</p>
          <div className="cta-buttons">
            <Link to="/book" className="btn btn-primary btn-large">
              <i className="fas fa-calendar-check"></i> Book Now
            </Link>
            <a href="https://wa.me/919999999999" className="btn btn-secondary">
              <i className="fab fa-whatsapp"></i> Chat Now
            </a>
          </div>
        </div>
      </section>

      {/* Quick Booking Modal */}
      {bookingModal && (
        <div className="modal" onClick={() => setBookingModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setBookingModal(false)}>✕</button>
            <h3>Let's Get You Started</h3>
            <p>Choose how you'd like to book:</p>
            <Link to="/book" className="btn btn-primary btn-block" onClick={() => setBookingModal(false)}>
              <i className="fas fa-calendar-check"></i> Fill Form & Book
            </Link>
            <a href="https://wa.me/919999999999" className="btn btn-secondary btn-block">
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
            <p className="modal-footer">Response within minutes • No commitment needed</p>
          </div>
        </div>
      )}
    </div>
  );
}
