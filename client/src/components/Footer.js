import React from "react";
import "../styles/Footer.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';


function Footer() {

    return (
        <div className="footer">
            <div className="footer-container">
                <h1 className="contact">Contact us</h1>
                <h5 className="email">letterboxd@gmail.com</h5>
                <h5 className="react">Created by React © 2022 Copyright: Letterboxd.com</h5>
                <div className="icons">
                    <TwitterIcon className="twitter" />
                    <InstagramIcon className="instagram" />
                    <MailIcon/>
                </div>



            </div>

        </div>
        



    )
}

export default Footer;