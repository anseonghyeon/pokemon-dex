import { useState } from 'react'
import './Home.css'
import imageSrc from './assets/1.png'

function Img() {

  return <img src={imageSrc} alt="pokemon-logo" className='logo-img'/>;
}

function Btn(props) {
  const text = '포켓몬도감 시작하기';

  const onClickHandler = () => {
    alert('LINK로 Dex.jsx로 가도록 구현');
    // TODO: LINK로 Dex.jsx로 가도록 구현
  }

  return <button onClick={onClickHandler} className='start-button'>{props.btnText}</button>;
}

function Home() {
  const [text, setText] = useState('포켓몬도감 시작하기')

  return (
    <>
    <div className='banner-cover'>
        <Img />
        <Btn btnText={text}/>
    </div>
    </>
  )
}

export default Home