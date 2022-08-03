import React from 'react'

// icons
import { FiLinkedin, FiMapPin, FiMail, FiPhoneCall } from 'react-icons/fi'

// styles
import '../assets/styles/portfolio.css'
import '../assets/styles/contact.css'

function Contact() {
  return (
    <>
      <header className="header-contact">
        <div className="logo">CONTACT</div>
        <h1>- Don't be Shy, Say Hello!</h1>
        <div className="line"></div>
      </header>
      <section className="contact">
        <div className="content contact-content">
          <div className="container">
            <div className="contact-form bg-form">
              <div className="title-form">SEND ME A MESSAGE</div>
              <form action="https://api.staticforms.xyz/submit" method='POST'>
                <input type="hidden" name='accessKey' value="f18cb31f-735e-4ba7-be8d-abfc59e4c3a2"/>
                <input type="hidden" name="redirectTo" value="/"/>
                <div className="fields">
                  <div className="field name">
                      <input type="text" placeholder="Name" name="name" required/>
                  </div>
                  <div className="field email">
                      <input type="email" placeholder="Email" name="email" required/>
                  </div>
                </div>
                <div className="field">
                    <input type="text" placeholder="Subject" name="subject" required/>
                </div>
                <div className="field textarea">
                    <textarea placeholder="Describe your interest..." name="message" required></textarea>
                </div>
                <div className="button">
                    <button type="submit" name="Submit">SEND MESSAGE</button>
                </div>
              </form>
            </div>
            <div className="contact-info">
              <div className="infos">
                <div className="info-title">CONTACT INFOS</div>
                <div className="user-info">
                  <FiMapPin/>
                  <div className="info">São Paulo, Brasil</div>
                </div>
                <div className="user-info">
                  <FiMail/>
                  <div className="info">webperformerz@gmail.com</div>
                </div>
                <div className="user-info">
                  <FiPhoneCall/>
                  <div className="info">+55 11 91565-7659</div>
                </div>
                <div className="user-info">
                  <FiLinkedin/>
                  <div className="info">linkedin.com/in/WebPerformer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact