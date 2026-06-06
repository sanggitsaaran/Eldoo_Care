import { Link } from 'react-router-dom';
import { useState } from 'react';
import './PlansPage.css';

export default function PlansPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="plans-page">
      {/* Hero Section */}
      <section className="plans-hero">
        <div className="container">
          <h1>Plans Built for Indian Families</h1>
          <p>From wellness calls to full-time care. Choose your plan. Scale up anytime.</p>
        </div>
      </section>

      <section className="plans-content">
        <div className="container">
          {/* Subscription Plans Section */}
          <section className="subscription-plans-section">
            <h2>Subscription Plans</h2>
            <p className="section-subtitle">Monthly plans that scale with your parent's changing needs</p>
            <div className="subscription-grid">
              {/* Companion Plan */}
              <div className="subscription-card">
                <div className="plan-name">Companion</div>
                <div className="plan-price">
                  <span className="price">₹3,999</span>
                  <span className="period">/month</span>
                </div>
                <div className="plan-savings">Save ₹7,200/yr</div>
                <ul className="plan-features">
                  <li>✓ Wellness calls 3x/week</li>
                  <li>✓ Medication reminders</li>
                  <li>✓ Monthly health summary</li>
                  <li>✓ 2 escort trips</li>
                  <li>✓ Pharmacy runs</li>
                </ul>
                <Link to="/book" className="btn btn-primary">Start Plan</Link>
              </div>

              {/* Caregiver Plan */}
              <div className="subscription-card featured">
                <div className="plan-badge">Most Popular</div>
                <div className="plan-name">Caregiver</div>
                <div className="plan-price">
                  <span className="price">₹8,999</span>
                  <span className="period">/month</span>
                </div>
                <div className="plan-savings">Save ₹16,200/yr</div>
                <ul className="plan-features">
                  <li>✓ Daily wellness calls</li>
                  <li>✓ Vitals monitoring (BP, sugar, SpO2)</li>
                  <li>✓ Weekly health reports</li>
                  <li>✓ 4 escort trips</li>
                  <li>✓ 2 pharmacy runs</li>
                  <li>✓ 4 hrs/day caregiver (6 days/week)</li>
                  <li>✓ 1 home nurse visit/month</li>
                  <li>✓ Dedicated care manager</li>
                </ul>
                <Link to="/book" className="btn btn-primary">Start Plan</Link>
              </div>

              {/* Guardian Plan */}
              <div className="subscription-card">
                <div className="plan-name">Guardian</div>
                <div className="plan-price">
                  <span className="price">₹17,999</span>
                  <span className="period">/month</span>
                </div>
                <div className="plan-savings">Save ₹32,400/yr</div>
                <ul className="plan-features">
                  <li>✓ Daily wellness calls + as-needed</li>
                  <li>✓ Daily vitals tracking</li>
                  <li>✓ Weekly reports + real-time alerts</li>
                  <li>✓ 8 escort trips</li>
                  <li>✓ Unlimited pharmacy runs</li>
                  <li>✓ Emergency ambulance coordination</li>
                  <li>✓ 8 hrs/day caregiver (7 days/week)</li>
                  <li>✓ 4 home nurse visits/month</li>
                  <li>✓ Senior care manager (priority)</li>
                  <li>✓ Hospital admission support</li>
                  <li>✓ Centralized digital health records</li>
                </ul>
                <Link to="/book" className="btn btn-primary">Start Plan</Link>
              </div>
            </div>
          </section>

          {/* Individual Plans Section */}
          <section className="individual-plans-section">
            <h2>Individual Services</h2>
            <p className="section-subtitle">Book individual services without a monthly plan</p>
            <div className="individual-grid">
              {/* Medical Escort */}
              <div className="individual-card">
                <h3>Medical Escort</h3>
                <p>Full visit escort - drop, wait during appointment, return home. Prescription collection included.</p>
                <Link to="/book" className="btn btn-outline">Book Now</Link>
              </div>

              {/* Pharmacy & Errand Run */}
              <div className="individual-card">
                <h3>Pharmacy & Errand Run</h3>
                <p>Collection and delivery of prescriptions, medicines, or medical supplies. Confirmation sent to family.</p>
                <Link to="/book" className="btn btn-outline">Book Now</Link>
              </div>

              {/* Caregiver Visit */}
              <div className="individual-card">
                <h3>Caregiver Visit</h3>
                <p>Full-day support covering all daily activities, meals, medication, light housekeeping, and companionship.</p>
                <Link to="/book" className="btn btn-outline">Book Now</Link>
              </div>

              {/* Long-term Caregiver */}
              <div className="individual-card">
                <h3>Long-term Caregiver</h3>
                <p>Night support for elders needing movement assistance, medication, or reassurance through multiple days.</p>
                <Link to="/book" className="btn btn-outline">Book Now</Link>
              </div>

              {/* Home Nurse Visit */}
              <div className="individual-card">
                <h3>Home Nurse Visit</h3>
                <p>Certified nurse for injections, wound dressing, IV management, catheter care, or vitals monitoring.</p>
                <Link to="/book" className="btn btn-outline">Book Now</Link>
              </div>

              {/* Doctor Home Visit */}
              <div className="individual-card">
                <h3>Doctor Home Visit</h3>
                <p>MBBS physician for consultation, diagnosis, prescription, or chronic illness review - at your parent's home.</p>
                <Link to="/book" className="btn btn-outline">Book Now</Link>
              </div>
            </div>
          </section>

          {/* Promises Section */}
          <section className="promises-section">
            <h2>Our Promises to You</h2>
            <div className="promises-grid">
              <div className="promise-card">
                <div className="promise-number">1</div>
                <h3>You will know your caregiver before they meet your parent</h3>
                <p>Share full profile, photo, background check, languages. Request different match anytime.</p>
              </div>

              <div className="promise-card">
                <div className="promise-number">2</div>
                <h3>You will receive a report after every single visit</h3>
                <p>Written update sent same day for all visits (companion calls, hospital escorts, etc.)</p>
              </div>

              <div className="promise-card">
                <div className="promise-number">3</div>
                <h3>Your emergencies reach a real human</h3>
                <p>24/7 line connects directly to trained care coordinator. No IVR, real person answers within 3 rings.</p>
              </div>

              <div className="promise-card">
                <div className="promise-number">4</div>
                <h3>We replace any caregiver within 48 hours</h3>
                <p>If parent uncomfortable for any reason, replacement with 48 hours notice, no questions asked.</p>
              </div>

              <div className="promise-card">
                <div className="promise-number">5</div>
                <h3>No surprise charges, ever</h3>
                <p>Published prices. Any additional cost discussed before incurred.</p>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-items">
              {/* FAQ 1 */}
              <div className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === 0 ? null : 0)}
                >
                  <span>Can I speak to a care manager before committing?</span>
                  <span className={`faq-toggle ${activeFaq === 0 ? 'active' : ''}`}>+</span>
                </button>
                {activeFaq === 0 && (
                  <div className="faq-answer">
                    <p>Yes - always. Every family starts with a free 30-min call with a care manager. No paperwork, no payment, no pressure.</p>
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === 1 ? null : 1)}
                >
                  <span>What if the caregiver and my parent don't get along?</span>
                  <span className={`faq-toggle ${activeFaq === 1 ? 'active' : ''}`}>+</span>
                </button>
                {activeFaq === 1 && (
                  <div className="faq-answer">
                    <p>We replace them within 48 hours, no questions asked. Finding the right match sometimes takes one or two tries.</p>
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === 2 ? null : 2)}
                >
                  <span>How do I know what's happening on a daily basis?</span>
                  <span className={`faq-toggle ${activeFaq === 2 ? 'active' : ''}`}>+</span>
                </button>
                {activeFaq === 2 && (
                  <div className="faq-answer">
                    <p>Every visit generates a written update sent to the family - activity, mood, medication, any concerns. Plan subscribers also receive weekly health summaries and video briefings.</p>
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === 3 ? null : 3)}
                >
                  <span>What happens in a medical emergency?</span>
                  <span className={`faq-toggle ${activeFaq === 3 ? 'active' : ''}`}>+</span>
                </button>
                {activeFaq === 3 && (
                  <div className="faq-answer">
                    <p>Our 24/7 line connects directly to a care coordinator - not an IVR. We dispatch help, coordinate with nearest hospital, notify family in real time. You are never the last to know.</p>
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === 4 ? null : 4)}
                >
                  <span>Is there a minimum contract period?</span>
                  <span className={`faq-toggle ${activeFaq === 4 ? 'active' : ''}`}>+</span>
                </button>
                {activeFaq === 4 && (
                  <div className="faq-answer">
                    <p>No. Monthly plans can be cancelled with 7 days' notice. Individual services have no commitment at all.</p>
                  </div>
                )}
              </div>

              {/* FAQ 6 */}
              <div className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === 5 ? null : 5)}
                >
                  <span>Can I pay from outside India?</span>
                  <span className={`faq-toggle ${activeFaq === 5 ? 'active' : ''}`}>+</span>
                </button>
                {activeFaq === 5 && (
                  <div className="faq-answer">
                    <p>Yes. We accept international wire transfers and debit cards, and UPI for families in India. Invoices in INR, currency conversion at bank's rate.</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="plans-cta">
            <h2>Ready to Get Started?</h2>
            <p>Book your first service or chat with our care advisors</p>
            <div className="cta-buttons">
              <Link to="/book" className="btn btn-primary btn-large">
                Book Now
              </Link>
              <a href="https://wa.me/919900041047" className="btn btn-secondary">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
