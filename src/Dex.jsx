import { useState } from 'react'
import './Dex.css'

function Dashboard() {
  return (
    <div className='dashboard'>
      <h1>나만의 포켓몬</h1>
      <div className='pokemon-slot-wrapper'>
        <div className='pokemon-slot'></div>
        <div className='pokemon-slot'></div>
        <div className='pokemon-slot'></div>
        <div className='pokemon-slot'></div>
        <div className='pokemon-slot'></div>
        <div className='pokemon-slot'></div>
      </div>
    </div>
  ) 
}

function PokemonList() {
  const pokemon = [
    {image: '이상해씨 이미지', name: '이상해씨', no: '001'},
    {image: '이상해풀 이미지', name: '이상해풀', no: '002'},
    {image: '이상해꽃 이미지', name: '이상해꽃', no: '003'},
    {image: '파이리 이미지', name: '파이리', no: '004'},
    {image: '리자드 이미지', name: '리자드', no: '005'},
    {image: '리자몽 이미지', name: '리자몽', no: '006'},
  ]

  return (
    <div className='pokemon-list'>
      {pokemon.map((pokemon) => {
        return <PokemonCard pokemon={pokemon} />;
      })}
    </div>
  );
}

function PokemonCard({ pokemon }) {
  return (
    <div className='pokemon-car'>
      <div>{pokemon.no}</div>
      <div>{pokemon.name}</div>
      <div>{pokemon.image}</div>
    </div>
  )
}

function Dex() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dashboard/>
      <PokemonList/>
    </>
  )
}

export default Dex