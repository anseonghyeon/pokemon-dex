import { useNavigate } from 'react-router-dom'
import styled from "styled-components"

import imageSrc from './assets/logo.png'

const BannerLogoStyle = styled.img`
    width: 400px;
    height: auto;
    display: block;
`;

function BannerImg() {

  return <BannerLogoStyle alt='pokemon-logo' src={imageSrc}></BannerLogoStyle>
}

const BannerBtnStyle = styled.button`
    border-radius: 4px;
    background-color: #ca040e;
    color: white;
    border: 0;
    font-weight: 100;
    padding: 8px 15px 8px 15px;
    

    &:hover {
      background-color: #ca040edd;
      cursor: pointer;  
    }
`;

function BannerBtn() {
  const content = '포켓몬도감 시작하기';
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate('/dex');
  }

  return <BannerBtnStyle onClick={onClickHandler}>{content}</BannerBtnStyle>;
}

const BannerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
`;

function Home() {

  return (
    <>
      <BannerWrapper>
        <BannerImg />
        <BannerBtn />
      </BannerWrapper>
    </>
    
  )
}

export default Home