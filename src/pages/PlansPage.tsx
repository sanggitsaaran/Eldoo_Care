import { Link } from 'react-router-dom';
import './PlansPage.css';

export default function PlansPage() {
  return (
    <div className="plans-page">
      <section className="plans-hero">
        <div className="container">
          <h1>Simple Plans for Every Need</h1>
          <p>Choose what fits your family. Scale up anytime as needs change.</p>
        </div>
      </section>

      <section className="plans-content">
        <div className="container">
          <div className="plans-intro">
            <p>Our four service pillars cover everything from hospital rides to daily home care. Pick one or combine them.</p>
          </div>

          <div className="plans-grid">
            {/* Plan 1 */}
            <div className="plan-card">
              <img src="/images/transport-service.png" alt="Move Service" className="plan-image" />
              <div className="plan-header">
                <h3>Move<br/><span>Medical Transport</span></h3>
              </div>
              <div className="plan-features">
                <ul>
                  <li><i className="fas fa-check"></i> Safe rides to hospitals & clinics</li>
                  <li><i className="fas fa-check"></i> Trained drivers assist at every step</li>
                  <li><i className="fas fa-check"></i> On-demand or scheduled</li>
                  <li><i className="fas fa-check"></i> Real-time tracking</li>
                </ul>
              </div>
              <div className="plan-cta">
                <p className="price">Starting from ₹250/ride</p>
                <Link to="/book" className="btn btn-primary">Book Now</Link>
              </div>
            </div>

            {/* Plan 2 */}
            <div className="plan-card">
              <img src="/images/home-care.png" alt="Assist Service" className="plan-image" />
              <div className="plan-header">
                <h3>Assist<br/><span>Home Care</span></h3>
              </div>
              <div className="plan-features">
                <ul>
                  <li><i className="fas fa-check"></i> Daily bathing & grooming help</li>
                  <li><i className="fas fa-check"></i> Meal prep & medication reminders</li>
                  <li><i className="fas fa-check"></i> Mobility assistance</li>
                  <li><i className="fas fa-check"></i> Same caregiver, every visit</li>
                </ul>
              </div>
              <div className="plan-cta">
                <p className="price">₹800 - 1,200/day</p>
                <Link to="/book" className="btn btn-primary">Book Now</Link>
              </div>
            </div>

            {/* Plan 3 */}
            <div className="plan-card featured">
              <img src="/images/care-ride.png" alt="CareRide Service" className="plan-image" />
              <div className="featured-badge">Most Popular</div>
              <div className="plan-header">
                <h3>CareRide<br/><span>Medical Escorts</span></h3>
              </div>
              <div className="plan-features">
                <ul>
                  <li><i className="fas fa-check"></i> Medical professional travels with them</li>
                  <li><i className="fas fa-check"></i> Post-surgery & emergency transfers</li>
                  <li><i className="fas fa-check"></i> Complex care situations</li>
                  <li><i className="fas fa-check"></i> Equipped vehicles</li>
                </ul>
              </div>
              <div className="plan-cta">
                <p className="price">Starting from ₹1,200/ride</p>
                <Link to="/book" className="btn btn-primary">Book Now</Link>
              </div>
            </div>

            {/* Plan 4 */}
            <div className="plan-card">
              <div className="plan-header">
                <div className="plan-icon">📋</div>
                <h3>CarePlan<br/><span>Full Coordination</span></h3>
              </div>
              <div className="plan-features">
                <ul>
                  <li><i className="fas fa-check"></i> Complete care planning</li>
                  <li><i className="fas fa-check"></i> Coordinate transport + home care</li>
                  <li><i className="fas fa-check"></i> Dedicated care manager</li>
                  <li><i className="fas fa-check"></i> Health check-ins included</li>
                </ul>
              </div>
              <div className="plan-cta">
                <p className="price">Custom pricing</p>
                <Link to="/book" className="btn btn-primary">Discuss</Link>
              </div>
            </div>
          </div>

          {/* Flexible Frequency */}
          <div className="flexibility-section">
            <h2>Choose Your Frequency</h2>
            <div className="flexibility-options">
              <div className="option">
                <strong>One-Time</strong>
                <p>Book as needed</p>
              </div>
              <div className="option">
                <strong>Weekly</strong>
                <p>Regular schedule</p>
              </div>
              <div className="option">
                <strong>Daily</strong>
                <p>Consistent care</p>
              </div>
              <div className="option">
                <strong>Monthly</strong>
                <p>Fixed plan</p>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="included-section">
            <h2>What's Always Included</h2>
            <div className="included-grid">
              <div className="included-item">
                <i className="fas fa-mobile-alt"></i>
                <h4>WhatsApp Booking</h4>
                <p>Instant requests on the app you use daily</p>
              </div>
              <div className="included-item">
                <i className="fas fa-bell"></i>
                <h4>Real-Time Updates</h4>
                <p>Know when they're on the way & when they arrive</p>
              </div>
              <div className="included-item">
                <i className="fas fa-user-check"></i>
                <h4>Verified Professionals</h4>
                <p>Background-checked, trained, and monitored</p>
              </div>
              <div className="included-item">
                <i className="fas fa-shield-alt"></i>
                <h4>Safety First</h4>
                <p>We handle all the safety protocols</p>
              </div>
            </div>
          </div>

          {/* FAQ Simple */}
          <div className="faq-section">
            <h2>Quick Answers</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h4>Can I change plans anytime?</h4>
                <p>Yes. No long-term contracts. Adjust or pause whenever you need.</p>
              </div>
              <div className="faq-item">
                <h4>How quickly can you send someone?</h4>
                <p>Within 30 minutes for urgent needs in most areas. We're fast.</p>
              </div>
              <div className="faq-item">
                <h4>What if I need care outside our cities?</h4>
                <p>Tell us. We're expanding rapidly and may already cover your area.</p>
              </div>
              <div className="faq-item">
                <h4>Do you offer long-term contracts?</h4>
                <p>No. Pay for what you use. Some families save with 6-month plans though.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="plans-cta">
            <h2>Ready to Start?</h2>
            <p>Book your first care session or chat with our care advisors</p>
            <div className="cta-buttons">
              <Link to="/book" className="btn btn-primary btn-large">
                <i className="fas fa-calendar-check"></i> Book Now
              </Link>
              <a href="https://wa.me/919900041047" className="btn btn-secondary">
                <i className="fab fa-whatsapp"></i> Chat Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
