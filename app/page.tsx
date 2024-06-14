import db from "prisma/db";
import PokemonCard from "components/PokemonCard";
import PokemonList from "components/PokemonList";

export default async function Home() {
	const pokemonList = (
		await db.pokemon.findMany({ where: { is_default: true } })
	).sort((a, b) => a.id - b.id);

	return (
		<main className="container flex flex-col items-center">
			<h1 className="text-4xl text-center my-8 uppercase">Pokédex</h1>
			<PokemonList pokemonList={pokemonList} />
		</main>
	);
}
