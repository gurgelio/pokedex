import { Switch, Route } from 'wouter'
import Index from './pages'
import Show from './pages/show'

function App() {
  return <main className="container">
    <Switch>
      <Route path="/pokemon/:pokemonId">
        {params => <Show pokemonId={params.pokemonId ?? ''} />}
      </Route>
      <Route path="/" component={Index} />
      <Route path="/:rest*">{(params) => `404, Sorry the page ${params.rest ?? ''} does not exist!`}</Route>
    </Switch>
  </main>
}

export default App
