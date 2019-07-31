import React from "react";
import Logo from "../../img/rentech-logo-new.png";
import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react"

const Footer = props => {
    return (
        <div className="profile-footer">
            <Icon className='footer-nav' size='large' name='react' />
            <Icon className='footer-nav' size='large' name='sass' />
            <a className='footer-nav' href='https://rentech-ryan.netlify.com/'>Ryan Marketing Page</a>
            <NavLink className='footer-nav' to=''>Raajn Marketing Page</NavLink>
            <NavLink className='footer-nav' to=''>About the Team</NavLink>
            <Icon className='footer-nav' size='large' name='html5' />
            <Icon className='footer-nav' size='large' name='js square' />
            <p>©2019 RenTech --- Dj-Ad-Sky</p>
        </div>
    );
};

export default Footer;