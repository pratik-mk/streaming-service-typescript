import React from "react";
import "./style.css";
import logo from "../../images/logo1.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="ht-footer">
      <div className="container">
        <div className="flex-parent-ft">
          <div className="flex-child-ft item1">
            <Link
              to={{
                pathname: `/`,
              }}
            >
              <img className="logo" src={logo} alt="" width="119" height="58" />
            </Link>
          </div>
          <div className="flex-child-ft item2">
            <h4>Resources</h4>
            <ul>
              <li>
                <Link
                  to={{
                    pathname: `/about`,
                  }}
                >
                  <a >About</a>
                </Link>
              </li>
              
              <li>
                <Link
                  to={{
                    pathname: `/contact-us`,
                  }}
                >
                  <a>Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-child-ft item3">
            <h4>Legal</h4>
            <ul>
              <li>
                <Link
                  to={{
                    pathname: `/terms-of-use`,
                  }}
                >
                  <a>Terms of Use</a>
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: `/privacy-policy`,
                  }}
                >
                  <a>Privacy Policy</a>
                </Link>
              </li>
              
            </ul>
          </div>
          <div className="flex-child-ft item5">
            <h4>Announcement</h4>
            <p>
              BlockBust.tk does not store any files on our server,
              <br /> we only linked to the media which is hosted on 3rd party
              services.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
