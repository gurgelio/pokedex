import db from "prisma/db";
import Image from "next/image";

export default async function Home() {
	const pokemonList = (
		await db.pokemon.findMany({ where: { is_default: true } })
	).sort((a, b) => a.id - b.id);

	return (
		<main>
			{pokemonList.map((pokemon) => (
				<li key={pokemon.id}>{pokemon.identifier}</li>
			))}
		</main>
	);
}
