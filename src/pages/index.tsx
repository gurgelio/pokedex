import useSwr from 'swr'
import axios from 'axios'
import PokemonCard from '@/components/PokemonCard'
import { useState } from 'react'

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function Index() {
  const [search, setSearch] = useState('')
  const { data, error, isLoading } = useSwr('api/v2/pokemon-species/?limit=10100', async url => {
    const response = await axios.get(`https://pokeapi.co/${url}`)
    return response.data.results as NamedAPIResource[]
  })

  if (error != null) return <div>error</div>
  if (isLoading) return <div>loading...</div>

  return <>
    <h1>Pokédex</h1>
    <input id="search" type="search" value={search} onChange={e => { setSearch(e.target.value) }} />
    <div className="pokemon-list">
      {data?.flat().map((pokemon, index) => (
        <PokemonCard key={index} id={index + 1} name={pokemon.name}/>
      ))}
    </div>
  </>
}

export default Index
