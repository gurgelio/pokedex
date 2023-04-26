import useSwr from 'swr'
import PokemonCard from '@/components/PokemonCard'
import { useEffect, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function Index() {
  const [search, setSearch] = useState('')
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([])

  const { data, error } = useSwr('api/v2/pokemon/?limit=1008', async url => {
    const response = await fetch(`https://pokeapi.co/${url}`).then(async response => await response.json()) as { results: NamedAPIResource[] }
    return response.results.map((data, index) => ({
      id: index + 1,
      name: data.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    }))
  })

  useEffect(() => {
    if (data == null) return

    setFilteredPokemon(data.filter(pokemon => pokemon.name.includes(search)))
  }, [search, data])

  if (error != null) return <div>error</div>

  return <>
    <h1 className='text-4xl text-center my-8 uppercase'>Pokédex</h1>
    <input id="search" type="search" value={search} onChange={e => { setSearch(e.target.value) }} />
    <div className="pokemon-list">
      {filteredPokemon.map(pokemon => (
        <PokemonCard {...pokemon} key={pokemon.id} />
      ))}
    </div>
  </>
}

export default Index
