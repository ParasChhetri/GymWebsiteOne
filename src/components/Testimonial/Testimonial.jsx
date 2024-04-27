import React, { useState } from 'react';
import './Testimonial.css';
import {testimonialsData} from '../../data/testimonialsData';
import {FaArrowLeft} from 'react-icons/fa6';
import {FaArrowRight} from 'react-icons/fa6';

function Testimonial() {

  let [select, setSelect] = useState(0);
  let tLength = testimonialsData.length;
  return (
    <div className='testimonials' id='testimonials'>
      <div className="left-t">
        <span>Testimonials</span>
        <span className='stroke'>What they</span>
        <span>say about us</span>
        <span>
          {testimonialsData[select].review}
        </span>
        <span>
          <span>
            {testimonialsData[select].name}
          </span>{" "}
          - {testimonialsData[select].status}
        </span>
      </div>
      <div className="right-t">
        <img src={testimonialsData[select].image} alt="Error loading" />

        {/* ARROWS */}
        <div className="arrows">
          <FaArrowLeft style={{fontSize: "2rem", color: "white", cursor: "pointer"}} onClick={() => {
            select === 0 ? setSelect(tLength - 1) : setSelect((prev) => prev - 1);
          }}/>
          <FaArrowRight style={{fontSize: "2rem", color: "white", cursor: "pointer"}} onClick={() => {
            select === tLength - 1 ? setSelect(0) : setSelect((prev) => prev + 1);
          }}/>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;