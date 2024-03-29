import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import contactVector from '../../assets/contact_anime.png';
import gitHub from '../../assets/gh.png';
import linkedIn from '../../assets/li.png';
import medium from '../../assets/medium.png';
import wellfound from '../../assets/wellfound.png';

function Contact() {
  const [state, handleSubmit] = useForm('mpznvgqj');
  if (state.succeeded) {
    setTimeout(() => {
      document.getElementById('contact-form').reset();
    }, 2500);
  }
  return (
    <div className="section-container">
      <Header
        heading="Get in touch"
        subHeading="I'm always interested in hearing about new projects, so if you'd like to chat please get in touch."
      />
      <div className="contact-form-container">
        {
            state.succeeded
            && (
            <div className="alert">
              The form was submitted successfully!
            </div>
            )
        }
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          id="contact-form"
        >
          <input
            type="email"
            className="input-box email-input"
            placeholder="Your Email Address"
            name="email"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <textarea
            type="text"
            placeholder="Your Message"
            name="message"
            className="input-box body-input"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            className="contact-btn"
            disabled={state.submitting}
          >
            Send Email
          </button>
        </form>
      </div>
      <div className="social-icons-container">
        <a
          href="https://github.com/Bhekisile"
          className="social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gitHub} alt="github" loading="lazy" />
        </a>
        <a
          href="https://www.linkedin.com/in/bhekisile-jozi/"
          className="social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedIn} alt="linkedin" loading="lazy" />
        </a>
        <a
          href="https://wellfound.com/profile/edit/overview"
          className="social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <img src={wellfound} alt="web" loading="lazy" />
        </a>
        <a
          href="https://medium.com/@bhekisilejozi"
          className="social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <img src={medium} alt="medium" loading="lazy" />
        </a>
      </div>
      <Footer
        phrase="Read more "
        link="about me."
        toAddress="/about"
      />
      <div className="vector-frame">
        <img
          src={contactVector}
          alt="contact"
          loading="lazy"
          className="about-vector"
        />
      </div>
    </div>
  );
}

export default Contact;
