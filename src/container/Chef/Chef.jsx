import React from 'react';
import {images} from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section_padding'>
  <div className='app__wrapper_img app__wrapper_img-reverse'>
    <img src={images.chef} alt=''/>
    
    
    </div>
    <div className='app__wrapper_info'>

    <SubHeading title="Chef's Word"/>
    <h1 className='headtext__cormorant'>Our Motto</h1> 
    <div className='app__chef-content'>
      <div className='app__chef-content_quote'>
        <img src={images.quote} alt=''/>
        <p className='p__opensans'>The good that thou
         doest today would often be forgotten but let that not put your heart at war, just eat good food</p>
        </div>
        <p className='p__opensans'>I can and I will, Barry Mcockinner</p>
        
        
        </div> 

        <div className='app__chef-sign'>
          <p>Adaeze Monwuba Petra</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt=''/>
        </div>
    </div> 
  </div>
);

export default Chef;
