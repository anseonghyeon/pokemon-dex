import { useState } from 'react'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'

import pokeballImage from '../assets/pokeball.png'
import MOCK_DATA from '../data/mock'

const PokemonCardButtonStyle = styled.button`
  color: white;
  background-color: #3559a1;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  border: 0;

  &:hover {
      background-color: #4569b1;
      cursor: pointer;  
    }
`;

const PokemonCardDefaultStyle = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    box-shadow: 1px 1px 6px gray;
`;

const PokemonCardListStyle = styled.div`
    width: 200px;
    height: 300px;
    border-radius: 10px;
    box-shadow: 1px 1px 6px gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
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

    &:hover {
      transform: translateY(-5px);
      box-shadow: 1px 1px 6px #000000aa;
      cursor: pointer;  
    }
`;

const PokemonCardDashboardStyle = styled.div`
    width: 100px;
    height: 150px;
    border-radius: 10px;
    box-shadow: 1px 1px 6px gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
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

    &:hover {
      transform: translateY(-5px);
      box-shadow: 1px 1px 6px #000000aa;
      cursor: pointer;  
    }
`;

const PokemonCardImgStyle = styled.img`
  width: 80px;
  height: 80px;
`;

const PokemonCardNameStyle = styled.div`
  font-weight: bold;  
`;

const PokemonCardIdStyle = styled.div`
  color: gray;
`;

const DashBoardHeaderStyle = styled.h1`
    color: #3559a1;
    font-weight: bolder;
    font-size: 25px;
    text-align: center;
    padding-bottom: 15px;
`;

const PokemonSlotWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 80px;
`;

const PokemonSlot = styled.div`
    width: 100px;
    height: fit-content;
    background-color: white;
    border-radius: 10px;
    border: 1px dashed gray;

`;

const DashBoardStyle = styled.div`
    background-color: #f7f7f7;
    border-radius: 10px;
    padding: 30px;
`;

const PokemonListStyle = styled.div`
    background-color: #f7f7f7;
    border-radius: 10px;
    padding: 30px;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`;

function PokemonCard({ pokemon, setMyPokemon, action, index }) {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate('/detail', { state: {pokemon}});
  }

  const handleAddClick = (e) => {
    e.stopPropagation();
    setMyPokemon(prev => {
      const exists = prev.some(p => p?.id === pokemon.id);
      if (exists) {
        alert('이미 선택된 포켓몬입니다.');
        return prev;
      }
  
      const emptyIndex = prev.findIndex(p => p === null);
      if (emptyIndex === -1) {
        alert('더 이상 선택할 수 없습니다.');
        return prev;
      }
  
      const newList = [...prev];
      newList[emptyIndex] = pokemon;
      return newList;
    });
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    setMyPokemon(prev => {
      const newList = [...prev];
      newList[index] = null;
      return newList;
    });
  };

  if(pokemon === null) {
    return (
      <PokemonCardDefaultStyle alt='pokemon-ball' src={pokeballImage}></PokemonCardDefaultStyle>
    );
  }

  if(action === 'Dashboard') {
    return (
      <PokemonCardDashboardStyle color={pokemon.types[0]} onClick={onClickHandler}>
        <PokemonCardImgStyle src={pokemon.img_url} alt={pokemon.korean_name}></PokemonCardImgStyle>
        <PokemonCardNameStyle>{pokemon.korean_name}</PokemonCardNameStyle>
        <PokemonCardIdStyle>{`No. ${String(pokemon.id).padStart(3, '0')}`}</PokemonCardIdStyle>
        <PokemonCardButtonStyle onClick={handleDeleteClick}>삭제</PokemonCardButtonStyle>
      </PokemonCardDashboardStyle>
    )
  } else if(action ==='PokemonList') {
    return (
      <PokemonCardListStyle color={pokemon.types[0]} onClick={onClickHandler}>
        <PokemonCardImgStyle src={pokemon.img_url} alt={pokemon.korean_name}></PokemonCardImgStyle>
        <PokemonCardNameStyle>{pokemon.korean_name}</PokemonCardNameStyle>
        <PokemonCardIdStyle>{`No. ${String(pokemon.id).padStart(3, '0')}`}</PokemonCardIdStyle>
        <PokemonCardButtonStyle onClick={handleAddClick}>추가</PokemonCardButtonStyle>
      </PokemonCardListStyle>
    )
  } 

  return null;
}

function Dashboard({ myPokemon, setMyPokemon }) {
  const headerName = 'Pokemon Dex';

  return (
    <DashBoardStyle>
      <DashBoardHeaderStyle>{headerName}</DashBoardHeaderStyle>
      <PokemonSlotWrapper>
        {myPokemon.map((pokemon, idx) => (
          <PokemonSlot key={idx}>
            <PokemonCard pokemon={pokemon} setMyPokemon={setMyPokemon} action={'Dashboard'} index={idx}></PokemonCard>
          </PokemonSlot>
        ))}
      </PokemonSlotWrapper>
    </DashBoardStyle>
  );
}

function PokemonList({ allPokemon, setMyPokemon }) {
  
  return (
    <PokemonListStyle>
      {allPokemon.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} setMyPokemon={setMyPokemon} action={'PokemonList'}/>;
      })}
    </PokemonListStyle>
  );
}

function Dex() {
  const allPokemon = MOCK_DATA;
  const [myPokemon, setMyPokemon] = useState([null, null, null, null ,null, null]);

  return (
    <>
      <Dashboard myPokemon={myPokemon} setMyPokemon={setMyPokemon} />
      <PokemonList allPokemon={allPokemon} setMyPokemon={setMyPokemon} />
    </>
  );
}

export default Dex