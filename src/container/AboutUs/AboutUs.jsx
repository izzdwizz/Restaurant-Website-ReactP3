import React from 'react';
import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.p} alt=''/>
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About us</h1>
        <img src={images.spoon} alt='' className='spoon__img'/>
        <p className='p__opensans'> A group of chefs are ready 
        to give you the best of the best when it comes to mindblowing delicacies</p>
      <button type='button' className='custom__button'>Know more</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
    <img src={images.knife} alt=''/>
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='' className='spoon__img'/>
        <p className='p__opensans'> A group of chefs are ready 
        to give you the best of the best when it comes to mindblowing delicacies</p>
        <button type='button' className='custom__button'>No more</button>
  </div>


    </div>
  </div>
);

export default AboutUs;
