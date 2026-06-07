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

            <a href="https://wa.me/919900041047" className="btn btn-secondary">
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>

          <div className="hero-image">
            <img src="/images/eldercare-hero.png" alt="Eldoo Care - Professional Care" />
          </div>
        </div>
      </section>

      {/* Eldoo Intro - Value Proposition */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>Eldoo Care: Your Parents' Care, Reimagined</h2>
            <p>Eldoo puts a dedicated care team on the ground in India — so your parents get safe medical transport, trusted daily care, and a human who truly looks after them. You get peace of mind, real-time updates, and one number to call.</p>
          </div>
        </div>
      </section>

      {/* Trust Markers - Replace Why Choose Us */}
      <section className="trust-section">
        <div className="container">
          <h2>Why Families Trust Eldoo Care</h2>
          <div className="trust-grid">
            <div className="trust-card">
              <h3>✓ Verified & Trained</h3>
              <p>Every caregiver is police-verified, health-screened, and trained in elder-specific care protocols.</p>
            </div>
            <div className="trust-card">
              <h3>✓ Full Transparency</h3>
              <p>Daily updates, visit photos, and a live care log shared with the family — no guesswork.</p>
            </div>
            <div className="trust-card">
              <h3>✓ Flexible & No Lock-in</h3>
              <p>Pause, upgrade, or cancel your plan at any time. Switch caregivers within 48 hours if needed.</p>
            </div>
            <div className="trust-card">
              <h3>✓ Built for NRI Families</h3>
              <p>Time-zone friendly briefings, international payments, and a care manager who is your proxy in India.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Avail Service - 4-Step Timeline */}
      <section className="avail-service-section">
        <div className="container">
          <h2>How to Avail Service</h2>
          <div className="timeline-grid">
            <div className="timeline-card">
              <div className="timeline-day">Day 1 - 30 mins</div>
              <h3>Tell Us About Your Parent</h3>
              <p>A free call with a care manager. No forms, no jargon — just an honest conversation about what your parent needs.</p>
            </div>
            <div className="timeline-card">
              <div className="timeline-day">Day 1-2 - Matched for you</div>
              <h3>We Build Your Care Team</h3>
              <p>We assign a dedicated care manager and a verified caregiver matched to your parent's personality, language, and needs.</p>
            </div>
            <div className="timeline-card">
              <div className="timeline-day">Day 2 - First visit</div>
              <h3>Care Begins at Home</h3>
              <p>Your caregiver arrives, meets your parent, and starts the care plan. You get a confirmation with photos and a first report.</p>
            </div>
            <div className="timeline-card">
              <div className="timeline-day">Ongoing - Every day</div>
              <h3>You Stay Informed, Always</h3>
              <p>Daily updates, weekly family briefings, and a care manager you can reach on WhatsApp or call — whenever you need.</p>
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
              <img src="/images/transport-service.png" alt="Medical Transport" className="service-card-image" />
              <div className="service-card-content">
                <h3>Medical Transport</h3>
                <p>Safe rides to doctors, hospitals, and clinics with trained assistance.</p>
              </div>
            </div>
            <div className="service-card">
              <img src="/images/home-care.png" alt="Home Care" className="service-card-image" />
              <div className="service-card-content">
                <h3>Home Care</h3>
                <p>Daily help with bathing, grooming, meals, and medications at home.</p>
              </div>
            </div>
            <div className="service-card">
              <img src="/images/Med-esc.png" alt="Medical Escorts" className="service-card-image" />
              <div className="service-card-content">
                <h3>Medical Escorts</h3>
                <p>For complex care needs — medical professionals travel with them.</p>
              </div>
            </div>
            <div className="service-card">
              <img src="/images/care-plan.png" alt="Care Management" className="service-card-image" />
              <div className="service-card-content">
                <h3>Care Management</h3>
                <p>We handle everything — coordination, scheduling, and care planning.</p>
              </div>
            </div>
          </div>
          <Link to="/plans" className="btn btn-outline">
            See All Plans & Pricing
          </Link>
        </div>
      </section>

      {/* Priya's Testimonial - Credential Section */}
      <section className="credential-section">
        <div className="container">
          <div className="credential-card">
            <div className="credential-header">
              <p className="credential-label">Verified Trust</p>
            </div>
            <div className="credential-content">
              <blockquote>
                <p>"Within two days of calling Eldoo, there was a caregiver with my mother in Chennai. I got a photo and a voice note that same evening. For the first time in three years, I slept without worrying."</p>
                <footer>— Priya, based in Toronto, mother cared for in Chennai</footer>
              </blockquote>
              <Link to="/book" className="btn btn-primary">
                BOOK NOW
              </Link>
            </div>
          </div>
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
              <strong>— Saritha R., Chennai</strong>
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
            <a href="https://wa.me/919900041047" className="btn btn-secondary">
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
            <a href="https://wa.me/919900041047" className="btn btn-secondary btn-block">
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
            <p className="modal-footer">Response within minutes • No commitment needed</p>
          </div>
        </div>
      )}
    </div>
  );
}
