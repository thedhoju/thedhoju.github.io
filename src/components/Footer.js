import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <div className='footer'>
            <div className='socialicons'>
                <a href="https://www.facebook.com"> <FacebookIcon /> </a>
                <a href="https://www.instagram.com"> <InstagramIcon /> </a>
                <a href="https://www.twitter.com"> <TwitterIcon /> </a>
                <a href="https://www.linkedin.com"> <LinkedInIcon /> </a>

            </div>
            <h3> © 2021. | Designed By Bibek Bhujel | All Rights Reserved. </h3>
        </div>
    )
}

export default Footer;