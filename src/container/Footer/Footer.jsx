import React from 'react';
import {images} from'../../constants';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import './Footer.css';

const Footer = () => (
  <div className='app__footer app__bg section__padding'>
    <FooterOverlay/>
    <Newsletter/>
    

    <div className='app__footer-links'>


      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>123 Wherever There's GoodFood St, Enugu, 410001, Nigeria.</p>
        <p className='p__opensans'>+234 8147270841</p>
        <p className='p__opensans'>+234 8112984553.</p>

      </div>

      <div className='app__footer-links_logo'>
        <img src={images.popina} alt=''/>
        <p className='p__opensans'> "The best way to find yourself is to lose yourself in the service of others"</p>
        <img src={images.spoon} alt='' className='spoon__img' style={{marginTop:'15px'}}/>
        <div className='app__footer-links_icons'>
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
        </div>
      </div>

      <div className='app__footer-links_work'>

      <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday -  Friday:</p>
        <p className='p__opensans'>08:00am - 11:45 pm</p>
        <p className='p__opensans'>Saturday - Sunday:</p>
        <p className='p__opensans'>07:00am - 10:45 pm</p>

      </div>


    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'> 2023 Popina. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
