import React      from "react";
import emailjs    from "emailjs-com";
import EmailPng   from "../Data/email.png";
import PhonePng   from "../Data/phone.png";
import SocialInfo from "../SocialInfo";
import AOS        from "aos";
import                 "aos/dist/aos.css";

AOS.init();
const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o7b8gt8",
        "template_m1e5u99",
        e.target,
        "user_guY833kGXKL0bP9ZXzcfW"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-wraper" id="Contact">
      <div className="container">
        <form className="container" onSubmit={sendEmail} data-aos="fade-up">
          <input type="hidden" name="contact_number" />
          <div>
            <h1 className="display-4 contact-title">Lets Connect!</h1>
            <div className="row contact-info">
              <div className="col">
                <img class="img-thumbnail m-2" src={EmailPng} alt="CV Icon" />
                <p className="lead">marcmuylaert00@gmail.com</p>
              </div>
              <div className="col">
                <img class="img-thumbnail m-2" src={PhonePng} alt="CV Icon" />
                <p className="lead">0471.57.25.49</p>
              </div>
            </div>
          </div>
          <div className="row form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              name="name"
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="row form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              name="email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="row form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea
              name="message"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" value="send" className="btn bg-light">
            Submit
          </button>
        </form>
        <SocialInfo />
      </div>
    </div>
  );
};

export default Contact;
