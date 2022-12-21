import React from 'react';
import './Slider.scss';
import banner1 from '../../assets/imgs/banner1.jpg';
import banner2 from '../../assets/imgs/banner2.jpg';
import banner3 from '../../assets/imgs/banner3.jpg';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { useState } from 'react';


const Slider = () => {

  const [currSlide, setCurrSlide] = useState(0);

  const prevSlide = () => {
    setCurrSlide(currSlide === 0 ? 2 : currSlide - 1)
  }

  const nextSlide = () => {
    setCurrSlide(currSlide === 2 ? 0 : currSlide + 1)
  }

  const data = [banner1, banner2, banner3];
  return (
    <div className='slider'>
       <div style={{transform: `translateX(-${currSlide * 100}vw)`}} className="container">
        <img src={data[0]} alt='banner1' />
        <img src={data[1]} alt='banner2' />
        <img src={data[2]} alt='banner3' />
       </div>
       <div className="icons">
        <div onClick={prevSlide} className="icon"><WestOutlinedIcon /></div>
        <div onClick={nextSlide} className="icon"><EastOutlinedIcon /></div>
       </div>
    </div>
  )
}

export default Slider