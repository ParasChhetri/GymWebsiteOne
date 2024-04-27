import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import gymHero2 from '../../assets/gymHero2.png';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';

const Hero = () => {

    let transition = {type: 'spring', duration: 3}
  return (
    <div className="hero" id='home'>
        <div className="left-h">
            <Header />
            {/* AD PART */}
            <div className="ad">
                <motion.div
                initial = {{left: "238px"}}
                whileInView={{left: "8px"}}
                transition={{...transition, type: "tween"}}
                ></motion.div>
                <span><i>The best fitness club in your town</i></span>
            </div>

            {/* HERO HEADING */}
            <div className="hero-text">
                <div>
                    <span>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span className='stroke-text'>Ideal </span>
                    <span>body</span>
                </div>
                <div>
                    <span className='hero-moto'>We will help you to shape your body and boost your public confidance. Become our next happy customer fast by joining us.</span>
                </div>
            </div>

            {/* FIGURES */}
            <div className="figures">
                <div>
                    <span><NumberCounter end={140} start={100} delay='4' preFix='+'/></span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span><NumberCounter end={2000} start={1900} delay='2' preFix='+'/></span>
                    <span>members joined</span>
                </div>
                <div>
                    <span><NumberCounter end={50} start={0} delay='1' preFix='+'/></span>
                    <span>fitness programs</span>
                </div>
            </div>

            {/* HERO BUTTONS */}
            <div className='hero-buttons'>
                <button className="btn">Get Started</button>
                <button className="btn">Learn More</button>
            </div>
        </div>
        <div className="right-h">
            <button className="btn">Join Now</button>

            {/* HERO IMAGE */}
            <img src={gymHero2} alt="gymHeroImg" className='hero-image'/>
        </div>
    </div>
  );
}

export default Hero;
