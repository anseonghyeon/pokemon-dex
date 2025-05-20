import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import imageSrc from './assets/1.png'

function Img() {

  return <img src={imageSrc} alt="pokemon-logo" className='logo-img'/>;
}

function Btn() {
  const text = '포켓몬도감 시작하기';
  const navigate = useNavigate();

  const onClickHandler = () => {
    // TODO: LINK로 Dex.jsx로 가도록 구현
    navigate('/dex');
  }

  return <button onClick={onClickHandler} className='start-button'>{text}</button>;
}

function Home() {

  return (
    <>
    <div className='banner-cover'>
        <Img />
        <Btn />
    </div>
    </>
  )
}

export default Home