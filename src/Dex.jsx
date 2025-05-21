import { useState } from 'react'
import styled from "styled-components"
import './Dex.css'
import imageSrc from './assets/pokeball.png'


const PokemonCardDefaultStyle = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    box-shadow: 1px 1px 6px gray;
`;

const PokemonCardListStyle = styled.div`
    width: 200px;
    height: 300px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 1px 1px 6px gray;
`;

const PokemonCardDashboardStyle = styled.div`
    width: 100px;
    height: 150px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 1px 1px 6px gray;
`;

function PokemonCard({ pokemon, setMyPokemon, action, index }) {
  const handleAddClick = () => {
    setMyPokemon(prev => {
      const exists = prev.some(p => p?.no === pokemon.no);
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

  const handleDeleteClick = () => {
    setMyPokemon(prev => {
      const newList = [...prev];
      newList[index] = null;
      return newList;
    });
  };

  if(pokemon === null) {
    return (
      <PokemonCardDefaultStyle alt='pokemon-ball' src={imageSrc}></PokemonCardDefaultStyle>
    );
    
  }
  if(action === 'PokemonList') {
    return (
      <PokemonCardListStyle>
        <div>{pokemon.no}</div>
        <div>{pokemon.name}</div>
        <div>{pokemon.image}</div>
        <button onClick={handleAddClick}>추가</button>
      </PokemonCardListStyle>
    )
  } else if(action ==='Dashboard') {
    return (
      <PokemonCardDashboardStyle>
        <div>{pokemon.no}</div>
        <div>{pokemon.name}</div>
        <div>{pokemon.image}</div>
        <button onClick={handleDeleteClick}>삭제</button>
      </PokemonCardDashboardStyle>
    )
  } 

  return null;
}



const DashBoardHeaderStyle = styled.h1`
    color: red;
    font-weight: 500;
    font-size: 25px;
    text-align: center;
`;

const PokemonSlotWrapper = styled.div`
    display: flex;
    gap: 80px;
    background-color: black;
`;

const PokemonSlot = styled.div`
    width: 100px;
    height: cover;
    background-color: white;
    border-radius: 10px;
    border: 1px dashed gray;
`;

const DashBoardStyle = styled.div`
    background-color: #f7f7f7;
    border-radius: 10px;
    padding: 30px;
`;

function Dashboard({ myPokemon, setMyPokemon }) {
  

  const headerName = '나만의 포켓몬';

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

const PokemonListStyle = styled.div`
    background-color: #f7f7f7;
    border-radius: 10px;
    padding: 30px;
    margin-top: 20px;
    display: flex;
    gap: 20px;
`;

function PokemonList({ allPokemon, setMyPokemon }) {
  

  return (
    <PokemonListStyle>
      {allPokemon.map((pokemon) => {
        return <PokemonCard pokemon={pokemon} setMyPokemon={setMyPokemon} action={'PokemonList'}/>;
      })}
    </PokemonListStyle>

  );
}

function Dex() {
  // 내가 가진 포켓몬
  const [myPokemon, setMyPokemon] = useState([null, null, null, null ,null, null]);

  // Mock up 포켓몬 리스트
  const allPokemon = [
    { image: '이상해씨 이미지', name: '이상해씨', no: '001' },
    { image: '이상해풀 이미지', name: '이상해풀', no: '002' },
    { image: '이상해꽃 이미지', name: '이상해꽃', no: '003' },
    { image: '파이리 이미지', name: '파이리', no: '004' },
    { image: '리자드 이미지', name: '리자드', no: '005' },
    { image: '리자몽 이미지', name: '리자몽', no: '006' },
  ]

  return (
    <>
      <Dashboard myPokemon={myPokemon} setMyPokemon={setMyPokemon} />
      <PokemonList allPokemon={allPokemon} setMyPokemon={setMyPokemon} />
    </>
  )
}

export default Dex