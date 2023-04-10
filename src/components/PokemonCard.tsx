import { PropsWithoutRef } from "react"

interface PokemonCardProps {
  id: number
  name: string
}


export default function PokemonCard({id, name}: PropsWithoutRef<PokemonCardProps>) {
  return <article>
  <img
    width="200"
    height="200"
    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
  />
  <footer className='text-center'>{name}</footer>
</article>
}