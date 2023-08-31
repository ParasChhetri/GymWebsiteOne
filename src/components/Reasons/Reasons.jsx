import React from 'react';
import './Reasons.css';
import ReasonsImg1 from '../../assets/reasonsImg1.jpg';
import ReasonsImg5 from '../../assets/reasonsImg5.jpg';
import Tick from '../../assets/tick.png';

const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="left-r">
          <img src={ReasonsImg1} alt="ReasonsImg1" className='imgResp'/>
          <img src={ReasonsImg5} alt="ReasonsImg5" className='imgResp'/>
      </div>

      {/* REASONS SECTION */}
      <div className="right-r">
        <div>
          <span className='stroke-text'>Reason </span>
        </div>
        <div>
          <span>to choose us</span>
        </div>

        {/* GIVING REASONS */}
        <div className='details-r-one'>
          <img src={Tick} alt="tick" />
          <span>Over 140+ expert coaches</span>
        </div>
        <div className='details-r-one'>
          <img src={Tick} alt="tick" />
          <span>Train smarter and faster than before</span>
        </div>
        <div className='details-r-one'>
          <img src={Tick} alt="tick" />
          <span>1 free program for new member</span>
        </div>
        <div className='details-r-one'>
          <img src={Tick} alt="tick" />
          <span>Free benifts with every plan</span>
        </div>
        <div className='details-r-one'>
          <img src={Tick} alt="tick" />
          <span>Over 2000 people got desired results</span>
        </div>
      </div>
    </div>
  );
}

export default Reasons;