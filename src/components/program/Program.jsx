import React from 'react';
import './Program.css';
import {programsData} from '../../data/programsData';

function Program() {
  return (
    <div className="programs" id="programs">
        {/* HEADER */}
        <div className="programs-header">
            <span>Programs</span>
            <span className='stroke'>To shape</span>
            <span>Yourself</span>
        </div>

        {/* PROGRAMS DEATAILS */}
        <div className="programs-catagories">
          {programsData.map((programs) =>{
            return (
              <div className="catagories">
                {programs.image}
                <span>{programs.heading}</span>
                <span>{programs.details}</span>
                <div className="join-now"><span>Join Now</span>
                </div>
              </div>
            );
          })}
        </div>
    </div>
  );
}

export default Program;