import TextField from '@mui/material/TextField';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';



function ContactMe() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_emcvirw', 'template_in92p1d', form.current, 'HLT0BGu62DtHHhH-D')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
      <div className="CardMake">
          <div className="ContactForm">
            <h1 className="pageHeading">Contact Me</h1>
            <div className="ContactFormText">
              <form ref={form} onSubmit={sendEmail}>
                <div className="fullWidth">
                <TextField style = {{width: '80%'}} id="outlined-basic" label="Name" variant="outlined" name="user_name" margin='normal'/>
                </div>
                <div className="fullWidth">
                <TextField style = {{width: '80%'}} id="outlined-basic" label="Email" variant="outlined" name="user_email" margin='normal'/>
                </div>
                <div className="fullWidth">
                <TextField style = {{width: '80%'}} id="outlined-basic" label="Message" variant="outlined" name="user_name" multiline={true} rows={6} margin='normal'/>
                </div>
                <div className="fullWidth">
                <Button style = {{width: 100}} variant="contained" type="submit" value="Send" fullWidth={false}>Submit</Button>
                </div>
              </form> 
          </div>           
        </div>
      </div>
    );
  }
  
  export default ContactMe;
  