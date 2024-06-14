import type { pokemon } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import capitalize from "utils/capitalize";

interface PokemonCardProps {
	pokemon: pokemon;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
	return (
		<div className="">
			<Link
				href={`/pokemon/${pokemon.id}`}
				className="flex flex-col items-center justify-center bg-neutral-700 rounded-sm"
			>
				<Image
					width={64}
					height={64}
					loading="lazy"
					src={`/images/pokemon/${pokemon.id}.png`}
					alt={pokemon.identifier}
				/>
				<p>{capitalize(pokemon.identifier)}</p>
			</Link>
		</div>
	);
}
