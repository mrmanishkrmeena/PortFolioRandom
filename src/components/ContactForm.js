import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import SingleSocialm from './subcomponents/SingleSocialm';

const ContactForm = () => {
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm();
   // eslint-disable-next-line
      const [disabled, setDisabled] = useState(false);
  
      const [alertInfo, setAlertInfo] = useState({
        display: false,
        message: '',
        type: '',
      });
      
      
      // Shows alert message for form submission feedback
      const toggleAlert = (message, type) => {
        setAlertInfo({ display: true, message, type });
    
        // Hide alert after 5 seconds
        setTimeout(() => {
          setAlertInfo({ display: false, message: '', type: '' });
        }, 5000);
      };
      
      // Function called on submit that uses emailjs to send email of valid contact form
      const onSubmit = async (data) => {
        // Destrcture data object
        const { name, email, subject, message } = data;
        try {
          // Disable form while processing submission
          setDisabled(true);
          
          const templateParams = {
            name,
            email,
            subject,
            message
          };
    
          await emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_USER_ID
          );
    
         // Display success alert
        toggleAlert('Form submission was successful!', 'success');
        } catch (e) {
          console.error(e);
          // Display error alert
          toggleAlert('Uh oh. Something went wrong.', 'danger');
        } finally {
          // Re-enable form submission
          setDisabled(false);
          // Reset contact form fields after submission
          reset();
        }
      };
    
    return (
        <div className='contact-Compo'>
            <h1 data-aos="zoom-in" data-aos-duration="1000" >How to Contact to me ?</h1>

        <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1500" className='contact-Form'>
        <h1> Say Hi !</h1>
        <form id='contactform' onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Row 1 of form */}
          <div className='formRow'>
            <div className='nameb'>
              <input
                type='text'
                name='name'
                {...register('name', {
                  required: { value: true, message: 'Please enter your name' },
                  maxLength: {
                    value: 30,
                    message: 'Please use 30 characters or less'
                  }
                })}
                className='formInput'
                placeholder='Name'
              ></input>
              {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
            </div>
            <div className='mailb'>
              <input
                type='email'
                name='email'
                {...register('email', {
                  required: true,
                  pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                })}
                className='formInput'
                placeholder='Email address'
              ></input>
              {errors.email && (
                <span className='errorMessage'>Please enter a valid email address</span>
              )}
            </div>
          </div>
          {/* Row 2 of form */}
          <div className='formRow'>
           
              <input
                type='text'
                name='subject'
                {...register('subject', {
                  required: { value: true, message: 'Please enter a subject' },
                  maxLength: {
                    value: 75,
                    message: 'Subject cannot exceed 75 characters'
                  }
                })}
                className='subjectInput'
                placeholder='Subject'
              ></input>
              {errors.subject && (
                <span className='errorMessage'>{errors.subject.message}</span>
              )}
           
          </div>
          {/* Row 3 of form */}
          <div className='formRow'>
           
              <textarea
                rows={3}
                name='message'
                {...register('message', {
                  required: true
                })}
                className='msgInput'
                placeholder='Message'
              ></textarea>
              {errors.message && <span className='errorMessage'>Please enter a message</span>}
            
          </div>
          <div className='formRow'>
            
            <button type='submit' className="buttonfx doubletake">
            Submit
        </button>
         
          </div>
          

        </form>
        {alertInfo.display && (
            <div
              className={`alert color-${alertInfo.type}`}
              role='alert'
            >
              {alertInfo.message}
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='alert'
                aria-label='Close'
                onClick={() =>
                  setAlertInfo({ display: false, message: '', type: '' })
                } // Clear the alert when close button is clicked
              ></button>
            </div>
          )}
      </div>
      <div className="Socialmedia">
  <div className="SingleSocialm"><SingleSocialm logo={require("../assests/icons/mailchimp.png")} text1="Mail Chimp" text2="Send Emails"/>
 
  </div>
  <div className="SingleSocialm"><SingleSocialm logo={require("../assests/icons/facebook.png")} text1="Facebook" text2="Chat Here"/>
 
 </div><div className="SingleSocialm"><SingleSocialm logo={require("../assests/icons/instagram.png")} text1="Instagram" text2="Chat Here"/>
 
 </div><div className="SingleSocialm"><SingleSocialm logo={require("../assests/icons/twitter.png")} text1="Twitter" text2="Tweet Here"/>
 
 </div> 
 
</div>
      
      </div>
    );
  };
  export default ContactForm;
