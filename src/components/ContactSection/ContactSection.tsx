import React, { useState } from 'react';
import './ContactSection.css';

export interface ContactSectionProps {
  id?: string;
  className?: string;
  onSuccess?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  id = 'contact',
  className = '',
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    location: '',
    markets: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  return (
    <section id={id} className={`contact-section relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-0 mt-16 mb-4 sm:mt-24 sm:mb-6 lg:mt-28 lg:mb-8 ${className}`}>
      <div className="contact-section-layout relative w-full">
        
        <div className="contact-section-intro w-full flex flex-col justify-start">
          <h2 className="w-full text-center font-serif text-4xl sm:w-auto sm:text-left sm:text-5xl lg:text-[62px] font-normal leading-[1.06] tracking-[-0.025em] text-white select-none">
            Where <br className="hidden sm:block" />
            would you <br className="hidden sm:block" />
            like to grow<span className="text-[#CCFF00]">?</span>
          </h2>

          <div className="my-6 h-0 w-[290px] max-w-full self-center border-t border-white sm:my-8 sm:self-auto" aria-hidden="true" />

          <p 
            className="contact-intro-description canela-text text-center text-white max-w-[384px] mt-8 sm:mt-10 sm:text-left"
            style={{
              fontFamily: "Canela, 'Canela Text', 'Playfair Display', Georgia, serif",
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '22px',
              lineHeight: '29px',
              letterSpacing: '0%',
              verticalAlign: 'middle',
              marginTop: '36px',
              color: '#FFFFFF',
            }}
          >
            Tell us a little about your brand and what you are looking to achieve. We’ll get in touch to arrange a conversation.
          </p>
        </div>

        <div className="contact-form-column w-full">
          {submitted ? (
            <div className="bg-[#121417] border border-[#CCFF00]/40 rounded-3xl p-8 sm:p-10 text-center shadow-2xl">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#CCFF00]/15 flex items-center justify-center text-[#CCFF00] text-3xl font-bold">
                ✓
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-3">Thank you for reaching out</h3>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-6">
                We've received your details and our team will get in touch shortly to discuss your international growth plans.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wider uppercase transition-all"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form-grid">
              <div className="contact-form-field">
                <label htmlFor="contact-name" className="contact-form-label">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="contact-form-input"
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="contact-company" className="contact-form-label">
                  Brand or company
                </label>
                <input
                  id="contact-company"
                  type="text"
                  required
                  placeholder="Brand or company name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="contact-form-input"
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="contact-email" className="contact-form-label">
                  Work email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="you@brand.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="contact-form-input"
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="contact-location" className="contact-form-label">
                  Where is your brand based?
                </label>
                <input
                  id="contact-location"
                  type="text"
                  placeholder="Country or region"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="contact-form-input"
                />
              </div>

              <div className="contact-form-field contact-form-field-wide">
                <label htmlFor="contact-markets" className="contact-form-label">
                  Which market or markets are you interested in?
                </label>
                <input
                  id="contact-markets"
                  type="text"
                  placeholder="e.g. UK, EU, Middle East, Asia..."
                  value={formData.markets}
                  onChange={(e) => setFormData({ ...formData, markets: e.target.value })}
                  className="contact-form-input"
                />
              </div>

              <div className="contact-form-field contact-form-field-wide">
                <label htmlFor="contact-message" className="contact-form-label">
                  What would you like to discuss?
                </label>
                <textarea
                  id="contact-message"
                  placeholder="Tell us a little about your brand and what you are looking to achieve..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="contact-form-input contact-message-input"
                />
              </div>

              <div className="contact-form-submit contact-form-field-wide">
                <button
                  type="submit"
                  className="contact-submit-btn"
                >
                  <span className="contact-submit-text">Start the conversation</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
