
import useSwr from 'swr'
import axios from 'axios'
import { type PropsWithoutRef } from 'react'

interface ShowProps {
  pokemonId: string
}

function Show({ pokemonId }: PropsWithoutRef<ShowProps>) {
  const { data, error, isLoading } = useSwr(`api/v2/pokemon-species/${pokemonId}`, async url => {
    const response = await axios.get(`https://pokeapi.co/${url}`)
    return response.data
  })

  if (error != null) return <div>error</div>
  if (isLoading) return <div>loading...</div>

  return <>
    {JSON.stringify(data)}
  </>
}

export default Show
