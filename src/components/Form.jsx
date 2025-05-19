import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import '@/components/Form.css';
import ReCAPTCHA from 'react-google-recaptcha';
import '@/index.css';

function Form() {


  
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const userId = import.meta.env.VITE_USER_ID;
  const recapthca = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleCaptchaToken = (token) => {
    setCaptchaToken(token);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!captchaToken) {
      alert('Please complete the CAPTCHA before sending!');
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, userId)
      .then((result) => {
        console.log(result.text);
        console.log('message sent');
        setIsEmailSent(true);
        setCaptchaToken(null); // Reset captcha
        setTimeout(() => setIsEmailSent(false), 3000);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };
    
  return (
    <div className="form-container mb-16">
      {isEmailSent && (
        <div className="email-sent-popup font-poppins">Email sent!</div>
      )}
      <form ref={form} onSubmit={sendEmail} className="w-full">
        <label className="form-label" htmlFor="user_name">Your Name</label>
        <input className="form-input" type="text" name="user_name" id="user_name" required />

        <label className="form-label" htmlFor="user_email">Your Email</label>
        <input className="form-input" type="email" name="user_email" id="user_email" required />

        <label className="form-label" htmlFor="message">Message</label>
        <textarea className="form-textarea" name="message" id="message" required />

        <div className='my-4'>
          <ReCAPTCHA sitekey={recapthca}
            onChange={handleCaptchaToken}
          />
        </div>

        <input className="form-submit" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Form;



