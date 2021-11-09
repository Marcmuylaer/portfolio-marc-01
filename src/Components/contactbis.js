import React, { useState } from "react";
import                          "./app.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const failMessage = () => {
    let formMess = document.querySelector(".form-message");
    formMess.innerHTML = "Message was NOT sent, fill in missing fields";
    formMess.style.opacity = "1";
    formMess.style.background = "rgb(253, 87, 87)";
    formMess.style.color = "rgb(0, 0, 0)";
    console.log("formMess " + formMess.innerHTML);
  };

  const isName = () => {
    let nameplace = document.getElementById("not-name");

    if (name.match(/^[aA-zZ\s]+$/)) {
      nameplace.style.display = "none";
      return true;
    } else {
      nameplace.style.display = "block";
      nameplace.style.animation = "dongle 1s";
      setTimeout(() => {
        nameplace.style.animation = "none";
      }, 1000);
      return false;
    }
  };

  const isMess = () => {
    let nameplace = document.getElementById("not-mess");

    if (message) {
      console.log("mmmeesss" + message);
      nameplace.style.display = "none";
      return true;
    } else {
      nameplace.style.display = "block";
      nameplace.style.animation = "dongle 1s";
      setTimeout(() => {
        nameplace.style.animation = "none";
      }, 1000);
      return false;
    }
  };
  const isMail = () => {
    let mail = document.getElementById("not-mail");
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
      mail.style.display = "none";
      return true;
    } else {
      mail.style.display = "block";
      mail.style.animation = "dongle 1s";
      setTimeout(() => {
        mail.style.animation = "none";
      }, 1000);
      return false;
    }
  };

  const isPhone = () => {
    console.log("pppp" + "phone");
    let nameplace = document.getElementById("not-phone");

    if (
      phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
    ) {
      nameplace.style.display = "none";
      return true;
    } else {
      nameplace.style.display = "block";
      nameplace.style.animation = "dongle 1s";
      setTimeout(() => {
        nameplace.style.animation = "none";
      }, 1000);
      return false;
    }
  };

  const successMessage = () => {
    let formMess = document.querySelector(".form-message");
    formMess.innerHTML = "Message sent";
    console.log("formMess " + formMess.innerHTML);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (isName() && isMail() && isPhone() && isMess()) {
      sendFeedback("template_8pv6gwx", {
        name,
        company,
        phone,
        email,
        message
      });
      {
        document.querySelector(".inputter").style.background = "none";
      }
    } else {
      failMessage("Thank you for filling in correctly");
      // alert("your email was NOT sent");

      // if (name !== true) {
      //   console.log("nnnnn " + name);
      //   document.querySelector("#name").placeholder = "what is your name?";
      //   document.querySelector("#name").style.borderBottom =
      //     "rgb(253, 87, 87) solid 3px";
      //   document.querySelector("#name").style.paddingLeft = "5px";
      // }
      // if (message !== true) {
      //   console.log("mmmm " + message);
      //   document.querySelector("#message").placeholder = "message ?";
      //   document.querySelector("#message").style.borderBottom =
      //     "rgb(253, 87, 87) solid 3px";
      //   document.querySelector("#message").style.paddingLeft = "5px";
      // }
    }
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("service_axh468g", templateId, variables)
      .then(res => {
        console.log("success !");
        successMessage();
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .then(res => {
        // document.querySelector(".form-message").innerHTML = "Thank You!";
        document.querySelector(".form-message").style.background = "lime";
        document.querySelector(".form-message").style.color = "black";
        setTimeout(() => {
          document.querySelector(".form-message").innerHTML = "";
          document.querySelector(".form-message").style.background = "none";
        }, 4000);
      })
      .catch(err => {
        failMessage("Syntax error");
      });
  };
  //problem this is not timing out

  return (
    <form className="contact-form">
      <h2>Let's meet ;-)</h2>
      <div className="form-content">
        <div className="name-content">
          <label id="not-name">Only letters in your name, please</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={e => setName(e.target.value)}
            placeholder="name *"
            value={name}
            className="inputter"
          />
        </div>
        <input
          type="text"
          id="company"
          name="company"
          onChange={e => setCompany(e.target.value)}
          placeholder="company"
          value={company}
          className="inputter"
        />
        <div className="name-content">
          <label id="not-phone">
            Only numbers in your phone number, please
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={e => setPhone(e.target.value)}
            placeholder="phone number"
            value={phone}
            className="inputter"
          />
        </div>
        <div className="email-content">
          <label id="not-mail">Please fill in a valid Email address</label>
          <input
            type="mail"
            id="email"
            name="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
            autoComplete="off"
            className="inputter"
          />
        </div>
        <div className="email-content">
          <label id="not-mess">You forgot to write a message</label>
          <div className="name-content">
            <textarea
              id="message"
              name="message"
              onChange={e => setMessage(e.target.value)}
              placeholder="message *"
              value={message}
              className="inputter"
            />
          </div>
        </div>
      </div>
      <input
        className="button"
        type="button"
        value="Send email"
        onClick={handleSubmit}
      />
      <div className="form-message"></div>
    </form>
  );
};

export default Contactbis;
