import { type PropsWithoutRef } from 'react'
import { Link } from 'wouter'

interface PokemonCardProps {
  id: number
  name: string
}

export default function PokemonCard({ id, name }: PropsWithoutRef<PokemonCardProps>) {
  return <article>
      <Link href={`/pokemon/${id}`}>
        <img
          width="200"
          height="200"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        />
      </Link>
      <footer className='text-center'>
        <Link href={`/pokemon/${id}`}>{name}</Link>
      </footer>
</article>
}
