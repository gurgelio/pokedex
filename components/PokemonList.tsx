"use client";

import PokemonCard from "components/PokemonCard";
import type { pokemon } from "@prisma/client";
import { useState } from "react";
import SearchIcon from "public/icons/search.svg";

interface PokemonListProps {
	pokemonList: pokemon[];
}

export default function PokemonList({ pokemonList }: PokemonListProps) {
	const [search, setSearch] = useState("");
	const filteredList = pokemonList.filter((pokemon) =>
		pokemon.identifier.includes(search),
	);

	return (
		<>
			<div className="relative inline-flex">
				<SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 stroke-neutral-500 w-7 aspect-square" />
				<input
					id="search"
					type="text"
					value={search}
					className="outline-none rounded-full my-4 bg-neutral-700 bg-left bg-no-repeat p-2 px-9 self-center justify-self-center"
					placeholder="Search..."
					onChange={(e) => {
						setSearch(e.target.value);
					}}
				/>
			</div>
			<ul className="grid px-4 max-w-full grid-cols-1 gap-4 justify-between text-center">
				{filteredList.map((pokemon) => (
					<PokemonCard key={pokemon.id} pokemon={pokemon} />
				))}
			</ul>
		</>
	);
}
