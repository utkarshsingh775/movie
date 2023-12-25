import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
               
                <div className="infoText" style={{color: "white"}}>
                Created with love by Utkarsh Singh
                   
                </div>
                <div className="socialIcons">
                <a href="https://www.instagram.com/utkarsh_.singh._?igsh=ZGNjOWZkYTE3MQ==" target="_blank">
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    </a>
                  
                    <a href="https://www.linkedin.com/in/utkarsh-singh-841810248/" target="_blank">  <span className="icon" >
                        <FaLinkedin />
                    </span>
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
