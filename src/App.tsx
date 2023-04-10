import useSwrInfinite from 'swr/infinite'
import axios from 'axios'
import PokemonCard from './components/PokemonCard'

function App() {
  const { data, error, isLoading, setSize } = useSwrInfinite((page, data) => `api/v2/pokemon-species/?offset=${page * 100}&limit=100`, async url => {
    const response = await axios.get(`https://pokeapi.co/${url}`)
    return response.data.results as NamedAPIResource[]
  })

  if (error) return <div>error</div>
  if (isLoading) return <div>loading...</div>

  return <main className="container">
    <div className="pokemon-list">
      {data?.flat().map((pokemon, index) => (
        <PokemonCard key={index} id={index + 1} name={pokemon.name}/>
      ))}
    </div>
      <button onClick={() => setSize(size => size + 1)}>Load More</button>
  </main>
}

export default App
