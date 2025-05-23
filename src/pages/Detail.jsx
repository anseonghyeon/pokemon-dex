import React from 'react';
import styled from "styled-components"
import {useLocation, useNavigate} from 'react-router-dom';

const DetailWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  height: 100vh;
  border-radius: 5px;
  background-color: ${props => {
      const type = {'노말': '#949492', '불꽃': '#e56c40', '물': '#5384c5', '풀': '#66a93e', '전기': '#fab813', '얼음': '#66cbe8', '격투': '#df9c3f', '독': '#745198', '땅': '#9b7743',
        '비행': '#a2c3e7', '에스퍼': '#db6c7b', '벌레': '#9fa245', '바위': '#bfb886', '고스트': '#67486f', '드래곤': '#535da8', '악': '#4f4848', '강철': '#67aac6', '페어리': '#ccb2c7'
      }

      if(props.color !== null) {
        return type[props.color];
      } else {
        return 'white';
      }
      
    }};
`;

const DetailImgStyle = styled.img`
  display: block;
  width: 200px;
  height: auto;
`;

const DetailNameStyle = styled.h1`
  color: #3559a1;
`;

const DetailTypeStyle = styled.div`
  font-weight: bold;
`;

const DetailDescStyle = styled.div`
  font-weight: bold;
`;

const DetailBackButtonStyle = styled.button`
  background-color: #3559a1;
  color: white;  
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
  border: 0;
  width: 200px;

  &:hover {
      background-color: #4569b1;
      cursor: pointer;  
    }
`;

function Detail() {
  const buttonText = '뒤로가기';

  // style 설정만하는데 props를 쓰니 그리고 depth도 1depth임 그냥 location으로 받아온거 쓰자
  const location = useLocation();
  const { pokemon } = (location.state !== null) ? location.state : null;
  
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate('/dex', { state: { pokemon: data.pokemon }});
  }

  return (
    <>
      <DetailWrapperStyle color={pokemon.types[0]}>
        <DetailImgStyle src={pokemon?.img_url}></DetailImgStyle>
        <DetailNameStyle>{pokemon.korean_name}</DetailNameStyle>
        <DetailTypeStyle>타입 : {pokemon.types.join(' / ')}</DetailTypeStyle>
        <DetailDescStyle>{pokemon.description}</DetailDescStyle>
        <DetailBackButtonStyle onClick={onClickHandler}>{buttonText}</DetailBackButtonStyle>
      </DetailWrapperStyle>
    </>
  );
}

export default Detail;