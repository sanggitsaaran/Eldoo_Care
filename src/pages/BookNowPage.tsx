import { useState } from 'react';
import './BookNowPage.css';

export default function BookNowPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    setIsSubmitting(true);
    // Formspree will handle the rest
    // The form will submit to Formspree endpoint and redirect on success
  };

  return (
    <div className="book-page">
      {/* Hero */}
      <section className="book-hero">
        <div className="container">
          <h1>Care is One Click Away</h1>
          <p>Choose how you want to book and we'll get you started in minutes.</p>
        </div>
      </section>

      {/* Content */}
      <section className="book-content">
        <div className="container">
          {/* Two Column - Form & WhatsApp */}
          <div className="book-methods">
            {/* Form Method */}
            <div className="book-form-section">
              <h2>Tell Us What You Need</h2>
              <p>Fill out the form and a care advisor will call you within the hour.</p>

              <form 
                action="https://formspree.io/f/YOUR_FORMSPREE_ID"
                method="POST"
                onSubmit={handleSubmit}
                className="booking-form"
              >
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g., Rajesh"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="e.g., +91 98765 43210"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <select
                    id="city"
                    name="city"
                    required
                  >
                    <option value="">Select a city</option>
                    <option value="bengaluru">Bengaluru</option>
                    <option value="chennai">Chennai</option>
                    <option value="madurai">Madurai</option>
                    <option value="coimbatore">Coimbatore</option>
                    <option value="tiruppur">Tiruppur</option>
                    <option value="hosur">Hosur</option>
                    <option value="tirunelveli">Tirunelveli</option>
                    <option value="thoothukudi">Thoothukudi</option>
                    <option value="nagercoil">Nagercoil</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Needed *</label>
                  <select
                    id="service"
                    name="service"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="move">Move - Medical Transport</option>
                    <option value="assist">Assist - Home Care</option>
                    <option value="careride">CareRide - Medical Escorts</option>
                    <option value="careplan">CarePlan - Full Coordination</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="notes">What Do They Need Help With?</label>
                  <textarea
                    id="notes"
                    name="notes"
                    placeholder="e.g., Hospital appointment Tuesday morning"
                    rows={4}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-large" disabled={isSubmitting}>
                  <i className="fas fa-paper-plane"></i> {isSubmitting ? 'Sending...' : 'Send My Request'}
                </button>

                <div className="form-note">
                  <p><i className="fas fa-info-circle"></i> No contracts. No hidden fees. We'll discuss pricing on the call.</p>
                </div>
              </form>
            </div>

            {/* WhatsApp Method */}
            <div className="book-whatsapp-section">
              <h2>Prefer Instant Chat?</h2>
              <p>Message us on WhatsApp for real-time responses.</p>

              <a href="https://wa.me/919900041047?text=Hi%20Eldoo%20Care%21%20I%20need%20help%20with%20care%20for%20my%20parent." 
                 className="whatsapp-card">
                <div className="whatsapp-content">
                  <i className="fab fa-whatsapp"></i>
                  <h3>Chat Now on WhatsApp</h3>
                  <p>We typically respond within 2-5 minutes</p>
                  <div className="whatsapp-cta">
                    <span>Start Chat <i className="fas fa-arrow-right"></i></span>
                  </div>
                </div>
              </a>

              <div className="whatsapp-info">
                <h4>Why WhatsApp?</h4>
                <ul>
                  <li><i className="fas fa-check"></i> Instant responses</li>
                  <li><i className="fas fa-check"></i> Easy to share photos/details</li>
                  <li><i className="fas fa-check"></i> No app download needed</li>
                  <li><i className="fas fa-check"></i> Available 24/7</li>
                </ul>
              </div>

              <div className="call-option">
                <h4>Or Call Us Directly</h4>
                <a href="tel:+919900041047" className="phone-link">
                  <i className="fas fa-phone"></i> +91 99000 41047
                </a>
                <p>Available 24/7. We speak Hindi, Tamil, Kannada & English.</p>
              </div>
            </div>
          </div>

          {/* Trust Section */}
          <div className="trust-section">
            <h2>Why Trust Eldoo Care?</h2>
            <div className="trust-grid">
              <div className="trust-card">
                <i className="fas fa-shield-alt"></i>
                <h4>Verified Professionals</h4>
                <p>Every caregiver is background-checked and trained.</p>
              </div>
              <div className="trust-card">
                <i className="fas fa-bell"></i>
                <h4>Real-Time Updates</h4>
                <p>Know when they're on the way and when they arrive.</p>
              </div>
              <div className="trust-card">
                <i className="fas fa-headset"></i>
                <h4>24/7 Support</h4>
                <p>We're always here if you need anything.</p>
              </div>
              <div className="trust-card">
                <i className="fas fa-heart"></i>
                <h4>Professional Care</h4>
                <p>Clinical expertise with genuine human warmth.</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="faq-section">
            <h2>Quick Answers</h2>
            <div className="faq-accordion">
              <div className="faq-item">
                <h4>When can you send someone?</h4>
                <p>For urgent needs, we can send someone within 30 minutes in most areas. For scheduled care, we plan around your needs.</p>
              </div>
              <div className="faq-item">
                <h4>What if I need to cancel?</h4>
                <p>No problem. Cancel anytime without penalty. We're flexible because life is unpredictable.</p>
              </div>
              <div className="faq-item">
                <h4>How do I pay?</h4>
                <p>After your first care session, we'll discuss pricing and payment options. UPI, cards, or bank transfers — whatever works for you.</p>
              </div>
              <div className="faq-item">
                <h4>What if I'm not satisfied?</h4>
                <p>Tell us. We'll send someone different or refund you. Your family's satisfaction is everything to us.</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="final-cta">
            <h2>Ready to Get Started?</h2>
            <p>Your family's safety and comfort are our priority.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">
                <i className="fas fa-paper-plane"></i> Submit Form Above
              </button>
              <a href="https://wa.me/919900041047" className="btn btn-secondary">
                <i className="fab fa-whatsapp"></i> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
