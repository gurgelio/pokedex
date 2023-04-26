
import useSwr from 'swr'
import { type PropsWithoutRef } from 'react'

interface ShowProps {
  pokemonId: string
}

function Show({ pokemonId }: PropsWithoutRef<ShowProps>) {
  const { data, error, isLoading } = useSwr(`api/v2/pokemon/${pokemonId}`, async url => {
    return await fetch(`https://pokeapi.co/${url}`).then(async res => await res.json()) as Pokemon
  })

  if (error != null) return <div>error</div>
  if (isLoading) return <div>loading...</div>

  return <>
    {JSON.stringify(data)}
  </>
}

export default Show
