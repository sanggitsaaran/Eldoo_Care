import { Link } from 'react-router-dom';
import './AboutUsPage.css';

export default function AboutUsPage() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <h1>Built by Children. For Their Parents.</h1>
          <p>We understand the worry of distance. We're here to change that.</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card vision">
              <div className="vm-icon"><i className="fas fa-eye"></i></div>
              <h3>Our Vision</h3>
              <p>A world where no parent ages alone, where children can be present — even from a distance — and where every older adult lives with dignity, safety, and respect.</p>
            </div>
            <div className="vm-card mission">
              <div className="vm-icon"><i className="fas fa-heart"></i></div>
              <h3>Our Mission</h3>
              <p>We bridge the gap between home and hospital so you are never alone. Clinical care in your living room. Safe rides to the specialist. Always there.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="promise-section">
        <div className="container">
          <h2>Safety for Them. Certainty for You.</h2>
          <div className="promise-grid">
            <div className="promise-card">
              <i className="fas fa-shield-alt"></i>
              <h4>Safe Healing at Home</h4>
              <p>Clinical-grade care delivered where they feel safest.</p>
            </div>
            <div className="promise-card">
              <i className="fas fa-car"></i>
              <h4>Secure Care Transport</h4>
              <p>From home to hospital and back — always with trained professionals.</p>
            </div>
            <div className="promise-card">
              <i className="fas fa-user-check"></i>
              <h4>Professional Care</h4>
              <p>Verified, trained, and monitored caregivers you can trust.</p>
            </div>
            <div className="promise-card">
              <i className="fas fa-phone"></i>
              <h4>Always Available</h4>
              <p>24/7 support via phone, WhatsApp, or app — whatever you prefer.</p>
            </div>
            <div className="promise-card">
              <i className="fas fa-bell"></i>
              <h4>Real-Time Updates</h4>
              <p>Know exactly where they are and how they're doing.</p>
            </div>
            <div className="promise-card">
              <i className="fas fa-star"></i>
              <h4>Dignity Always</h4>
              <p>Professional service with genuine warmth and respect.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="leadership-section">
        <div className="container">
          <h2>The People Behind Eldoo Care</h2>
          <div className="leadership-content">
            <div className="founder-card">
              <img src="/images/founder.png" alt="Founder" />
              <div className="founder-info">
                <h3>Omprakash</h3>
                <p className="title">Founder & CEO</p>
                <p className="bio">
                  Omprakash studied at the London School of Economics. For a decade, he led teams across government, the United Nations, and leading companies — building infrastructure that makes systems work better for people.
                </p>
                <p className="bio">
                  Then, his own parents needed care from thousands of miles away. He couldn't be there. Neither could any system. He refused to accept that.
                </p>
                <p className="bio">
                  <strong>Eldoo Care</strong> is his answer: a promise that distance will never come between a child's love and a parent's care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="impact-section">
        <div className="container">
          <h2>The Numbers That Matter</h2>
          <p className="impact-intro">These represent families that trust us. Parents who feel safe. Children who can focus on work and life.</p>
          
          <div className="impact-grid">
            <div className="milestone">
              <div className="phase">Phase 1 (Now)</div>
              <div className="stats-row">
                <div className="stat">
                  <div className="stat-value">100+</div>
                  <div className="stat-label">Families Served</div>
                </div>
                <div className="stat">
                  <div className="stat-value">1,000+</div>
                  <div className="stat-label">Hours of Care Weekly</div>
                </div>
                <div className="stat">
                  <div className="stat-value">9</div>
                  <div className="stat-label">Cities</div>
                </div>
              </div>
            </div>

            <div className="milestone">
              <div className="phase">Phase 2 (Next)</div>
              <div className="stats-row">
                <div className="stat">
                  <div className="stat-value">500+</div>
                  <div className="stat-label">Families Served</div>
                </div>
                <div className="stat">
                  <div className="stat-value">5,000+</div>
                  <div className="stat-label">Hours of Care Weekly</div>
                </div>
                <div className="stat">
                  <div className="stat-value">30+</div>
                  <div className="stat-label">Cities</div>
                </div>
              </div>
            </div>

            <div className="milestone">
              <div className="phase">Phase 3 (Vision)</div>
              <div className="stats-row">
                <div className="stat">
                  <div className="stat-value">1000+</div>
                  <div className="stat-label">Families Served</div>
                </div>
                <div className="stat">
                  <div className="stat-value">10,000+</div>
                  <div className="stat-label">Hours of Care Weekly</div>
                </div>
                <div className="stat">
                  <div className="stat-value">Pan</div>
                  <div className="stat-label">India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="cities-section">
        <div className="container">
          <h2>We Serve 9 Cities Across South India</h2>
          <div className="cities-grid">
            <div className="city-item">
              <i className="fas fa-map-pin"></i>
              <span>Bengaluru</span>
            </div>
            <div className="city-item">
              <i className="fas fa-map-pin"></i>
              <span>Chennai</span>
            </div>
            <div className="city-item">
              <i className="fas fa-map-pin"></i>
              <span>Madurai</span>
            </div>
            <div className="city-item">
              <i className="fas fa-map-pin"></i>
              <span>Coimbatore</span>
            </div>
            <div className="city-item">
              <i className="fas fa-map-pin"></i>
              <span>Tiruppur</span>
            </div>
            <div className="city-item">
              <i className="fas fa-map-pin"></i>
              <span>Hosur</span>
            </div>
            <div className="city-item">
              <i className="fas fa-map-pin"></i>
              <span>Tirunelveli</span>
            </div>
            <div className="city-item">
              <i className="fas fa-map-pin"></i>
              <span>Thoothukudi</span>
            </div>
            <div className="city-item">
              <i className="fas fa-map-pin"></i>
              <span>Nagercoil</span>
            </div>
          </div>
          <p className="cities-note">Expanding because every family in every city deserves a care partner they can trust.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <h2>Join the Eldoo Care Family</h2>
          <p>Let us be your constant companion in care.</p>
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
    </div>
  );
}
