import React, { useRef, useState} from 'react'
import emailjs from '@emailjs/browser';


function Form() {


  
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const userId = import.meta.env.VITE_USER_ID;

  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs
      .sendForm(serviceId, templateId, form.current, userId)
      .then((result) => {
        console.log(result.text);
        console.log('message sent');
        setIsEmailSent(true);
        setTimeout(() => {
          setIsEmailSent(false);
        }, 3000); // Reset the "email sent" message after 3 seconds
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
      <form ref={form} onSubmit={sendEmail}>
        <label className="form-label" htmlFor="user_name">
          Your Name
        </label>
        <input className="form-input" type="text" name="user_name" id="user_name" required />

        <label className="form-label" htmlFor="user_email">
          Your Email
        </label>
        <input
          className="form-input"
          type="email"
          name="user_email"
          id="user_email"
          required
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
        />

        <label className="form-label" htmlFor="message">
          What can I help you with?
        </label>
        <textarea className="form-textarea" name="message" id="message" required />

        <input className="form-submit button-main3 w-full sm:w-1/3  font-poppins font-semibold btn px-5 py-2 my-5 rounded-lg" type="submit" value="Send" />
      </form>
    </div>
  )
}

export default Form



