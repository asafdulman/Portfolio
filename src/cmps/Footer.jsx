import React from 'react'
import { animateScroll as scroll } from "react-scroll";

export function Footer() {

    function toTop() {
        scroll.scrollToTop();
    }
    return (
        <div className="footer-box">

            <div className="contact-details">
            <div onClick={toTop} className="back-to-top-box">
            <i class="fas fa-angle-double-up fa-2x back-to-top-btn"></i>

            </div>
                <div className="mail">
                    <i className="far fa-envelope"></i>
                    <i className="fab fa-github"></i>
                </div>
                <div className="github">
                    <p>asafdulman@gmail.com</p>
                    <a  href="https://github.com/asafdulman" target="_blank" rel="noreferrer" >Github</a>

                </div>
            </div>
            <div className="social-box">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/asaf.dulman"><i className="fab fa-2x fa-facebook-square social-facebook-icon"></i></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/asaf-dulman-b6b090123/"><i className="fab fa-2x fa-linkedin social-linkedin-icon"></i></a>
                <p>Asaf Dulman 2020.</p>

            </div>
        </div>
    )
}
