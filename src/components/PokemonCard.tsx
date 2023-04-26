import { type PropsWithoutRef } from 'react'
import { Link } from 'wouter'

interface PokemonCardProps {
  id: number
  name: string
  image: string
}

export default function PokemonCard({ id, name, image }: PropsWithoutRef<PokemonCardProps>) {
  return <article>
      <Link href={`/pokemon/${id}`}>
        <img
          width="200"
          height="200"
          loading="lazy"
          src={image}
        />
      </Link>
      <footer className='text-center'>
        <Link href={`/pokemon/${id}`}>{name}</Link>
      </footer>
</article>
}
