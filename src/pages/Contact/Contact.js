import React, { useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import "./Contact.css";
import axios from "axios";
import { baseUrl } from "../../utils/urls";
import { toast } from "react-hot-toast";
import Aos from "aos";
import CustomTitle from "../../utils/CustomTitle";
const Contact = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  useEffect(()=>{
    Aos.init({duration:700})
  },[])
  const contactSubmit = (e) => {
    e.preventDefault();
    axios.post(`${baseUrl}/contacts/`,
    {
      first_name: fname,
      last_name: lname,
      email: email,
      subject: subject,
      message: message
  }).then((response)=>{
    if(response.status===201){
      toast.success("Message sent successfully!!!")
      window.location.reload();
    }
  },(error)=>{
    toast.error('Something went wrong')
  })
  };
  return (
    <MainLayout>
      <CustomTitle title="Contact" />
      <div className="su__main" data-aos="zoom-in">


      <h1 className="ctct__pg_main_header">Contact</h1>
     
        <div className="su__form_container">
          <p className="contact_heading">
            PLEASE, FEEL YOURSELF COMFORTABLE TO FILL IN OUR CONTACT FORM
          </p>

          <div className="contact_body">
            <form onSubmit={contactSubmit}>
              <input
                className="co_input"
                type="text"
                placeholder="First name"
                required
                value={fname}
                onChange={(e) => {
                  setFname(e.target.value);
                }}
              />
              <input
                className="co_input"
                type="text"
                placeholder="Last name"
                required
                value={lname}
                onChange={(e) => {
                  setLname(e.target.value);
                }}
              />
              <input
                className="co_input"
                type="text"
                placeholder="E-mail"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                className="co_input"
                type="text"
                placeholder="Subject"
                required
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
              <input
                className="co_inputm"
                type="text"
                placeholder="Message"
                required
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              <button type="submit" className="submit_button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
