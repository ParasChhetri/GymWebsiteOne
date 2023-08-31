import React from 'react';
import './Plans.css'
import {plansData} from '../../data/plansData'
import {FaCheck} from 'react-icons/fa6';

const Plans = () => {
  return (
    <div className='plans-container' id='plans'>
        <div className="plans-heading">
            <span>Plans </span>
            <span className='stroke'>for your </span>
            <span>journey</span>
        </div>

        {/* PLANS CARD */}
        <div className="plans">
          {plansData.map((plan ,i) => {
            return (
              <div className='plan'>
                {plan.icon}
                <span>{plan.name} </span>
                <span>₹ {plan.price}</span>

                <div className="features">
                  {plan.features.map((feature, i) => {
                    return (
                      <div className='feature'>
                        <FaCheck style={{color: 'white'}}/>
                        <span key={i}>{feature}</span>
                      </div>
                    );
                  })}
                </div>

                {/* FOR CARD BUTTON */}
                <div className='card-button'>
                  <button className="btn">Subscribe</button>
                </div>
              </div>
            );
          })}
        </div>
    </div>
  );
}

export default Plans;
