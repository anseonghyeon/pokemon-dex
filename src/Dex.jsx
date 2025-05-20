import { useState } from 'react'
import './Dex.css'

function Dashboard() {

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

function PokemonCard(props) {
  
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