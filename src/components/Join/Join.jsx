import React from 'react';
import './Join.css';

const Join = () => {
  return (
    <div className='join' id='join-us'>
      <div className="join-l">
        <div>
            <span>Join us </span>
            <span>and</span>
        </div>
        <div>
            <span>level up </span>
            <span>your body</span>
        </div>
      </div>
      <div className="join-r">
        <form action="" className="email-container">
            <input type="email" name='user_email' placeholder='Enter your Email address'/>
            <button className='btn btn-j'>Join Now</button>
        </form>
      </div>
    </div>
  );
}

export default Join;
