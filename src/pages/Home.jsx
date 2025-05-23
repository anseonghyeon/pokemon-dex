import styled from "styled-components"
import { useNavigate } from 'react-router-dom'

import logoImage from '../assets/logo.png'

const BannerWrapperStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const BannerLogoStyle = styled.img`
    width: 400px;
    height: auto;
    display: block;
`;

const BannerBtnStyle = styled.button`
    border-radius: 4px;
    background-color: #3559a1;
    color: white;
    border: 0; 
    font-weight: 400;
    padding: 8px 15px 8px 15px;
    
    &:hover {
      background-color: #3559a1dd;
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

function Home() {
  return (
    <>
      <BannerWrapperStyle>
        <BannerLogoStyle alt='pokemon-logo' src={logoImage} />
        <BannerBtn />
      </BannerWrapperStyle>
    </>
  );
}

export default Home