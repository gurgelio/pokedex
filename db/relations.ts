import { relations } from "drizzle-orm/relations";
import { languages, move_damage_class_prose, move_damage_classes, pokemon_color_names, pokemon_colors, growth_rates, experience, berry_firmness_names, berry_firmness, conquest_move_range_prose, conquest_move_ranges, move_meta_category_prose, move_meta_categories, conquest_stat_names, conquest_stats, pokeathlon_stat_names, pokeathlon_stats, move_target_prose, move_targets, conquest_warrior_stat_names, conquest_warrior_stats, item_fling_effect_prose, item_fling_effects, pokemon_habitat_names, pokemon_habitats, item_pockets, item_categories, pokemon_move_method_prose, pokemon_move_methods, language_names, item_pocket_names, move_meta_ailment_names, move_meta_ailments, encounter_condition_prose, encounter_conditions, egg_group_prose, egg_groups, growth_rate_prose, super_contest_effect_prose, super_contest_effects, stats, conquest_warrior_archetypes, conquest_warriors, genders, contest_type_names, contest_types, pal_park_area_names, pal_park_areas, item_flag_prose, item_flags, conquest_move_displacement_prose, conquest_move_displacements, move_battle_style_prose, move_battle_styles, move_flag_prose, move_flags, conquest_warrior_skill_names, conquest_warrior_skills, conquest_move_effect_prose, conquest_move_effects, move_effect_prose, move_effects, region_names, regions, conquest_episode_names, conquest_episodes, locations, generations, evolution_trigger_prose, evolution_triggers, contest_effect_prose, contest_effects, pokedexes, encounter_condition_values, pokemon_shape_prose, pokemon_shapes, encounter_method_prose, encounter_methods, generation_names, conquest_episode_warriors, abilities, location_areas, stat_names, items, item_category_prose, version_groups, conquest_warrior_names, natures, pokedex_prose, characteristics, location_game_indices, conquest_warrior_ranks, encounter_condition_value_prose, types, location_names, conquest_warrior_transformation, nature_battle_style_preferences, ability_changelog, location_area_prose, version_group_pokemon_move_methods, ability_flavor_text, item_flavor_summaries, evolution_chains, ability_prose, type_game_indices, move_effect_changelog, nature_names, conquest_warrior_rank_stat_map, conquest_kingdoms, version_group_regions, conquest_warrior_specialties, item_flag_map, item_prose, nature_pokeathlon_stats, versions, berries, moves, ability_names, encounter_slots, item_game_indices, type_names, type_efficacy, pokedex_version_groups, item_flavor_text, item_names, characteristic_text, machines, location_area_encounter_rates, pokemon_species, berry_flavors, conquest_move_data, conquest_transformation_warriors, move_flavor_summaries, move_meta, version_names, move_meta_stat_changes, move_changelog, move_names, move_flag_map, move_flavor_text, contest_combos, super_contest_combos, ability_changelog_prose, conquest_kingdom_names, move_effect_changelog_prose, pokemon_species_flavor_summaries, conquest_max_links, conquest_transformation_pokemon, conquest_pokemon_moves, conquest_pokemon_abilities, pokemon, pal_park, pokemon_species_prose, conquest_pokemon_stats, pokemon_species_flavor_text, pokemon_evolution, pokemon_species_names, pokemon_dex_numbers, pokemon_egg_groups, conquest_pokemon_evolution, pokemon_stats, pokemon_moves, pokemon_types, pokemon_items, pokemon_game_indices, pokemon_abilities, pokemon_forms, encounters, encounter_condition_value_map, pokemon_form_generations, pokemon_form_names, pokemon_form_pokeathlon_stats } from "./schema";

export const move_damage_class_proseRelations = relations(move_damage_class_prose, ({one}) => ({
	language: one(languages, {
		fields: [move_damage_class_prose.local_language_id],
		references: [languages.id]
	}),
	move_damage_class: one(move_damage_classes, {
		fields: [move_damage_class_prose.move_damage_class_id],
		references: [move_damage_classes.id]
	}),
}));

export const languagesRelations = relations(languages, ({many}) => ({
	move_damage_class_proses: many(move_damage_class_prose),
	pokemon_color_names: many(pokemon_color_names),
	berry_firmness_names: many(berry_firmness_names),
	conquest_move_range_proses: many(conquest_move_range_prose),
	move_meta_category_proses: many(move_meta_category_prose),
	conquest_stat_names: many(conquest_stat_names),
	pokeathlon_stat_names: many(pokeathlon_stat_names),
	move_target_proses: many(move_target_prose),
	conquest_warrior_stat_names: many(conquest_warrior_stat_names),
	item_fling_effect_proses: many(item_fling_effect_prose),
	pokemon_habitat_names: many(pokemon_habitat_names),
	pokemon_move_method_proses: many(pokemon_move_method_prose),
	language_names_local_language_id: many(language_names, {
		relationName: "language_names_local_language_id_languages_id"
	}),
	language_names_language_id: many(language_names, {
		relationName: "language_names_language_id_languages_id"
	}),
	item_pocket_names: many(item_pocket_names),
	move_meta_ailment_names: many(move_meta_ailment_names),
	encounter_condition_proses: many(encounter_condition_prose),
	egg_group_proses: many(egg_group_prose),
	growth_rate_proses: many(growth_rate_prose),
	super_contest_effect_proses: many(super_contest_effect_prose),
	contest_type_names: many(contest_type_names),
	pal_park_area_names: many(pal_park_area_names),
	item_flag_proses: many(item_flag_prose),
	conquest_move_displacement_proses: many(conquest_move_displacement_prose),
	move_battle_style_proses: many(move_battle_style_prose),
	move_flag_proses: many(move_flag_prose),
	conquest_warrior_skill_names: many(conquest_warrior_skill_names),
	conquest_move_effect_proses: many(conquest_move_effect_prose),
	move_effect_proses: many(move_effect_prose),
	region_names: many(region_names),
	conquest_episode_names: many(conquest_episode_names),
	evolution_trigger_proses: many(evolution_trigger_prose),
	contest_effect_proses: many(contest_effect_prose),
	pokemon_shape_proses: many(pokemon_shape_prose),
	encounter_method_proses: many(encounter_method_prose),
	generation_names: many(generation_names),
	stat_names: many(stat_names),
	item_category_proses: many(item_category_prose),
	conquest_warrior_names: many(conquest_warrior_names),
	pokedex_proses: many(pokedex_prose),
	encounter_condition_value_proses: many(encounter_condition_value_prose),
	location_names: many(location_names),
	location_area_proses: many(location_area_prose),
	ability_flavor_texts: many(ability_flavor_text),
	item_flavor_summaries: many(item_flavor_summaries),
	ability_proses: many(ability_prose),
	nature_names: many(nature_names),
	item_proses: many(item_prose),
	ability_names: many(ability_names),
	type_names: many(type_names),
	item_flavor_texts: many(item_flavor_text),
	item_names: many(item_names),
	characteristic_texts: many(characteristic_text),
	move_flavor_summaries: many(move_flavor_summaries),
	version_names: many(version_names),
	move_names: many(move_names),
	move_flavor_texts: many(move_flavor_text),
	ability_changelog_proses: many(ability_changelog_prose),
	conquest_kingdom_names: many(conquest_kingdom_names),
	move_effect_changelog_proses: many(move_effect_changelog_prose),
	pokemon_species_flavor_summaries: many(pokemon_species_flavor_summaries),
	pokemon_species_proses: many(pokemon_species_prose),
	pokemon_species_flavor_texts: many(pokemon_species_flavor_text),
	pokemon_species_names: many(pokemon_species_names),
	pokemon_form_names: many(pokemon_form_names),
}));

export const move_damage_classesRelations = relations(move_damage_classes, ({many}) => ({
	move_damage_class_proses: many(move_damage_class_prose),
	stats: many(stats),
	types: many(types),
	moves: many(moves),
}));

export const pokemon_color_namesRelations = relations(pokemon_color_names, ({one}) => ({
	language: one(languages, {
		fields: [pokemon_color_names.local_language_id],
		references: [languages.id]
	}),
	pokemon_color: one(pokemon_colors, {
		fields: [pokemon_color_names.pokemon_color_id],
		references: [pokemon_colors.id]
	}),
}));

export const pokemon_colorsRelations = relations(pokemon_colors, ({many}) => ({
	pokemon_color_names: many(pokemon_color_names),
	pokemon_species: many(pokemon_species),
}));

export const experienceRelations = relations(experience, ({one}) => ({
	growth_rate: one(growth_rates, {
		fields: [experience.growth_rate_id],
		references: [growth_rates.id]
	}),
}));

export const growth_ratesRelations = relations(growth_rates, ({many}) => ({
	experiences: many(experience),
	growth_rate_proses: many(growth_rate_prose),
	pokemon_species: many(pokemon_species),
}));

export const berry_firmness_namesRelations = relations(berry_firmness_names, ({one}) => ({
	language: one(languages, {
		fields: [berry_firmness_names.local_language_id],
		references: [languages.id]
	}),
	berry_firmness: one(berry_firmness, {
		fields: [berry_firmness_names.berry_firmness_id],
		references: [berry_firmness.id]
	}),
}));

export const berry_firmnessRelations = relations(berry_firmness, ({many}) => ({
	berry_firmness_names: many(berry_firmness_names),
	berries: many(berries),
}));

export const conquest_move_range_proseRelations = relations(conquest_move_range_prose, ({one}) => ({
	language: one(languages, {
		fields: [conquest_move_range_prose.local_language_id],
		references: [languages.id]
	}),
	conquest_move_range: one(conquest_move_ranges, {
		fields: [conquest_move_range_prose.conquest_move_range_id],
		references: [conquest_move_ranges.id]
	}),
}));

export const conquest_move_rangesRelations = relations(conquest_move_ranges, ({many}) => ({
	conquest_move_range_proses: many(conquest_move_range_prose),
	conquest_move_data: many(conquest_move_data),
}));

export const move_meta_category_proseRelations = relations(move_meta_category_prose, ({one}) => ({
	language: one(languages, {
		fields: [move_meta_category_prose.local_language_id],
		references: [languages.id]
	}),
	move_meta_category: one(move_meta_categories, {
		fields: [move_meta_category_prose.move_meta_category_id],
		references: [move_meta_categories.id]
	}),
}));

export const move_meta_categoriesRelations = relations(move_meta_categories, ({many}) => ({
	move_meta_category_proses: many(move_meta_category_prose),
	move_metas: many(move_meta),
}));

export const conquest_stat_namesRelations = relations(conquest_stat_names, ({one}) => ({
	language: one(languages, {
		fields: [conquest_stat_names.local_language_id],
		references: [languages.id]
	}),
	conquest_stat: one(conquest_stats, {
		fields: [conquest_stat_names.conquest_stat_id],
		references: [conquest_stats.id]
	}),
}));

export const conquest_statsRelations = relations(conquest_stats, ({many}) => ({
	conquest_stat_names: many(conquest_stat_names),
	conquest_pokemon_stats: many(conquest_pokemon_stats),
	conquest_pokemon_evolutions: many(conquest_pokemon_evolution),
}));

export const pokeathlon_stat_namesRelations = relations(pokeathlon_stat_names, ({one}) => ({
	language: one(languages, {
		fields: [pokeathlon_stat_names.local_language_id],
		references: [languages.id]
	}),
	pokeathlon_stat: one(pokeathlon_stats, {
		fields: [pokeathlon_stat_names.pokeathlon_stat_id],
		references: [pokeathlon_stats.id]
	}),
}));

export const pokeathlon_statsRelations = relations(pokeathlon_stats, ({many}) => ({
	pokeathlon_stat_names: many(pokeathlon_stat_names),
	nature_pokeathlon_stats: many(nature_pokeathlon_stats),
	pokemon_form_pokeathlon_stats: many(pokemon_form_pokeathlon_stats),
}));

export const move_target_proseRelations = relations(move_target_prose, ({one}) => ({
	language: one(languages, {
		fields: [move_target_prose.local_language_id],
		references: [languages.id]
	}),
	move_target: one(move_targets, {
		fields: [move_target_prose.move_target_id],
		references: [move_targets.id]
	}),
}));

export const move_targetsRelations = relations(move_targets, ({many}) => ({
	move_target_proses: many(move_target_prose),
	moves: many(moves),
	move_changelogs: many(move_changelog),
}));

export const conquest_warrior_stat_namesRelations = relations(conquest_warrior_stat_names, ({one}) => ({
	language: one(languages, {
		fields: [conquest_warrior_stat_names.local_language_id],
		references: [languages.id]
	}),
	conquest_warrior_stat: one(conquest_warrior_stats, {
		fields: [conquest_warrior_stat_names.warrior_stat_id],
		references: [conquest_warrior_stats.id]
	}),
}));

export const conquest_warrior_statsRelations = relations(conquest_warrior_stats, ({many}) => ({
	conquest_warrior_stat_names: many(conquest_warrior_stat_names),
	conquest_warrior_rank_stat_maps: many(conquest_warrior_rank_stat_map),
}));

export const item_fling_effect_proseRelations = relations(item_fling_effect_prose, ({one}) => ({
	language: one(languages, {
		fields: [item_fling_effect_prose.local_language_id],
		references: [languages.id]
	}),
	item_fling_effect: one(item_fling_effects, {
		fields: [item_fling_effect_prose.item_fling_effect_id],
		references: [item_fling_effects.id]
	}),
}));

export const item_fling_effectsRelations = relations(item_fling_effects, ({many}) => ({
	item_fling_effect_proses: many(item_fling_effect_prose),
	items: many(items),
}));

export const pokemon_habitat_namesRelations = relations(pokemon_habitat_names, ({one}) => ({
	language: one(languages, {
		fields: [pokemon_habitat_names.local_language_id],
		references: [languages.id]
	}),
	pokemon_habitat: one(pokemon_habitats, {
		fields: [pokemon_habitat_names.pokemon_habitat_id],
		references: [pokemon_habitats.id]
	}),
}));

export const pokemon_habitatsRelations = relations(pokemon_habitats, ({many}) => ({
	pokemon_habitat_names: many(pokemon_habitat_names),
	pokemon_species: many(pokemon_species),
}));

export const item_categoriesRelations = relations(item_categories, ({one, many}) => ({
	item_pocket: one(item_pockets, {
		fields: [item_categories.pocket_id],
		references: [item_pockets.id]
	}),
	items: many(items),
	item_category_proses: many(item_category_prose),
}));

export const item_pocketsRelations = relations(item_pockets, ({many}) => ({
	item_categories: many(item_categories),
	item_pocket_names: many(item_pocket_names),
}));

export const pokemon_move_method_proseRelations = relations(pokemon_move_method_prose, ({one}) => ({
	language: one(languages, {
		fields: [pokemon_move_method_prose.local_language_id],
		references: [languages.id]
	}),
	pokemon_move_method: one(pokemon_move_methods, {
		fields: [pokemon_move_method_prose.pokemon_move_method_id],
		references: [pokemon_move_methods.id]
	}),
}));

export const pokemon_move_methodsRelations = relations(pokemon_move_methods, ({many}) => ({
	pokemon_move_method_proses: many(pokemon_move_method_prose),
	version_group_pokemon_move_methods: many(version_group_pokemon_move_methods),
	pokemon_moves: many(pokemon_moves),
}));

export const language_namesRelations = relations(language_names, ({one}) => ({
	language_local_language_id: one(languages, {
		fields: [language_names.local_language_id],
		references: [languages.id],
		relationName: "language_names_local_language_id_languages_id"
	}),
	language_language_id: one(languages, {
		fields: [language_names.language_id],
		references: [languages.id],
		relationName: "language_names_language_id_languages_id"
	}),
}));

export const item_pocket_namesRelations = relations(item_pocket_names, ({one}) => ({
	language: one(languages, {
		fields: [item_pocket_names.local_language_id],
		references: [languages.id]
	}),
	item_pocket: one(item_pockets, {
		fields: [item_pocket_names.item_pocket_id],
		references: [item_pockets.id]
	}),
}));

export const move_meta_ailment_namesRelations = relations(move_meta_ailment_names, ({one}) => ({
	language: one(languages, {
		fields: [move_meta_ailment_names.local_language_id],
		references: [languages.id]
	}),
	move_meta_ailment: one(move_meta_ailments, {
		fields: [move_meta_ailment_names.move_meta_ailment_id],
		references: [move_meta_ailments.id]
	}),
}));

export const move_meta_ailmentsRelations = relations(move_meta_ailments, ({many}) => ({
	move_meta_ailment_names: many(move_meta_ailment_names),
	move_metas: many(move_meta),
}));

export const encounter_condition_proseRelations = relations(encounter_condition_prose, ({one}) => ({
	language: one(languages, {
		fields: [encounter_condition_prose.local_language_id],
		references: [languages.id]
	}),
	encounter_condition: one(encounter_conditions, {
		fields: [encounter_condition_prose.encounter_condition_id],
		references: [encounter_conditions.id]
	}),
}));

export const encounter_conditionsRelations = relations(encounter_conditions, ({many}) => ({
	encounter_condition_proses: many(encounter_condition_prose),
	encounter_condition_values: many(encounter_condition_values),
}));

export const egg_group_proseRelations = relations(egg_group_prose, ({one}) => ({
	language: one(languages, {
		fields: [egg_group_prose.local_language_id],
		references: [languages.id]
	}),
	egg_group: one(egg_groups, {
		fields: [egg_group_prose.egg_group_id],
		references: [egg_groups.id]
	}),
}));

export const egg_groupsRelations = relations(egg_groups, ({many}) => ({
	egg_group_proses: many(egg_group_prose),
	pokemon_egg_groups: many(pokemon_egg_groups),
}));

export const growth_rate_proseRelations = relations(growth_rate_prose, ({one}) => ({
	language: one(languages, {
		fields: [growth_rate_prose.local_language_id],
		references: [languages.id]
	}),
	growth_rate: one(growth_rates, {
		fields: [growth_rate_prose.growth_rate_id],
		references: [growth_rates.id]
	}),
}));

export const super_contest_effect_proseRelations = relations(super_contest_effect_prose, ({one}) => ({
	language: one(languages, {
		fields: [super_contest_effect_prose.local_language_id],
		references: [languages.id]
	}),
	super_contest_effect: one(super_contest_effects, {
		fields: [super_contest_effect_prose.super_contest_effect_id],
		references: [super_contest_effects.id]
	}),
}));

export const super_contest_effectsRelations = relations(super_contest_effects, ({many}) => ({
	super_contest_effect_proses: many(super_contest_effect_prose),
	moves: many(moves),
}));

export const statsRelations = relations(stats, ({one, many}) => ({
	move_damage_class: one(move_damage_classes, {
		fields: [stats.damage_class_id],
		references: [move_damage_classes.id]
	}),
	stat_names: many(stat_names),
	natures_increased_stat_id: many(natures, {
		relationName: "natures_increased_stat_id_stats_id"
	}),
	natures_decreased_stat_id: many(natures, {
		relationName: "natures_decreased_stat_id_stats_id"
	}),
	characteristics: many(characteristics),
	move_meta_stat_changes: many(move_meta_stat_changes),
	pokemon_stats: many(pokemon_stats),
}));

export const conquest_warriorsRelations = relations(conquest_warriors, ({one, many}) => ({
	conquest_warrior_archetype: one(conquest_warrior_archetypes, {
		fields: [conquest_warriors.archetype_id],
		references: [conquest_warrior_archetypes.id]
	}),
	gender: one(genders, {
		fields: [conquest_warriors.gender_id],
		references: [genders.id]
	}),
	conquest_episode_warriors: many(conquest_episode_warriors),
	conquest_warrior_names: many(conquest_warrior_names),
	conquest_warrior_ranks: many(conquest_warrior_ranks),
	conquest_warrior_transformations: many(conquest_warrior_transformation),
	conquest_warrior_specialties: many(conquest_warrior_specialties),
	conquest_transformation_warriors: many(conquest_transformation_warriors),
}));

export const conquest_warrior_archetypesRelations = relations(conquest_warrior_archetypes, ({many}) => ({
	conquest_warriors: many(conquest_warriors),
}));

export const gendersRelations = relations(genders, ({many}) => ({
	conquest_warriors: many(conquest_warriors),
	pokemon_evolutions: many(pokemon_evolution),
	conquest_pokemon_evolutions: many(conquest_pokemon_evolution),
}));

export const contest_type_namesRelations = relations(contest_type_names, ({one}) => ({
	language: one(languages, {
		fields: [contest_type_names.local_language_id],
		references: [languages.id]
	}),
	contest_type: one(contest_types, {
		fields: [contest_type_names.contest_type_id],
		references: [contest_types.id]
	}),
}));

export const contest_typesRelations = relations(contest_types, ({many}) => ({
	contest_type_names: many(contest_type_names),
	natures_likes_flavor_id: many(natures, {
		relationName: "natures_likes_flavor_id_contest_types_id"
	}),
	natures_hates_flavor_id: many(natures, {
		relationName: "natures_hates_flavor_id_contest_types_id"
	}),
	moves: many(moves),
	berry_flavors: many(berry_flavors),
}));

export const pal_park_area_namesRelations = relations(pal_park_area_names, ({one}) => ({
	language: one(languages, {
		fields: [pal_park_area_names.local_language_id],
		references: [languages.id]
	}),
	pal_park_area: one(pal_park_areas, {
		fields: [pal_park_area_names.pal_park_area_id],
		references: [pal_park_areas.id]
	}),
}));

export const pal_park_areasRelations = relations(pal_park_areas, ({many}) => ({
	pal_park_area_names: many(pal_park_area_names),
	pal_parks: many(pal_park),
}));

export const item_flag_proseRelations = relations(item_flag_prose, ({one}) => ({
	language: one(languages, {
		fields: [item_flag_prose.local_language_id],
		references: [languages.id]
	}),
	item_flag: one(item_flags, {
		fields: [item_flag_prose.item_flag_id],
		references: [item_flags.id]
	}),
}));

export const item_flagsRelations = relations(item_flags, ({many}) => ({
	item_flag_proses: many(item_flag_prose),
	item_flag_maps: many(item_flag_map),
}));

export const conquest_move_displacement_proseRelations = relations(conquest_move_displacement_prose, ({one}) => ({
	language: one(languages, {
		fields: [conquest_move_displacement_prose.local_language_id],
		references: [languages.id]
	}),
	conquest_move_displacement: one(conquest_move_displacements, {
		fields: [conquest_move_displacement_prose.move_displacement_id],
		references: [conquest_move_displacements.id]
	}),
}));

export const conquest_move_displacementsRelations = relations(conquest_move_displacements, ({many}) => ({
	conquest_move_displacement_proses: many(conquest_move_displacement_prose),
	conquest_move_data: many(conquest_move_data),
}));

export const move_battle_style_proseRelations = relations(move_battle_style_prose, ({one}) => ({
	language: one(languages, {
		fields: [move_battle_style_prose.local_language_id],
		references: [languages.id]
	}),
	move_battle_style: one(move_battle_styles, {
		fields: [move_battle_style_prose.move_battle_style_id],
		references: [move_battle_styles.id]
	}),
}));

export const move_battle_stylesRelations = relations(move_battle_styles, ({many}) => ({
	move_battle_style_proses: many(move_battle_style_prose),
	nature_battle_style_preferences: many(nature_battle_style_preferences),
}));

export const move_flag_proseRelations = relations(move_flag_prose, ({one}) => ({
	language: one(languages, {
		fields: [move_flag_prose.local_language_id],
		references: [languages.id]
	}),
	move_flag: one(move_flags, {
		fields: [move_flag_prose.move_flag_id],
		references: [move_flags.id]
	}),
}));

export const move_flagsRelations = relations(move_flags, ({many}) => ({
	move_flag_proses: many(move_flag_prose),
	move_flag_maps: many(move_flag_map),
}));

export const conquest_warrior_skill_namesRelations = relations(conquest_warrior_skill_names, ({one}) => ({
	language: one(languages, {
		fields: [conquest_warrior_skill_names.local_language_id],
		references: [languages.id]
	}),
	conquest_warrior_skill: one(conquest_warrior_skills, {
		fields: [conquest_warrior_skill_names.skill_id],
		references: [conquest_warrior_skills.id]
	}),
}));

export const conquest_warrior_skillsRelations = relations(conquest_warrior_skills, ({many}) => ({
	conquest_warrior_skill_names: many(conquest_warrior_skill_names),
	conquest_warrior_ranks: many(conquest_warrior_ranks),
}));

export const conquest_move_effect_proseRelations = relations(conquest_move_effect_prose, ({one}) => ({
	language: one(languages, {
		fields: [conquest_move_effect_prose.local_language_id],
		references: [languages.id]
	}),
	conquest_move_effect: one(conquest_move_effects, {
		fields: [conquest_move_effect_prose.conquest_move_effect_id],
		references: [conquest_move_effects.id]
	}),
}));

export const conquest_move_effectsRelations = relations(conquest_move_effects, ({many}) => ({
	conquest_move_effect_proses: many(conquest_move_effect_prose),
	conquest_move_data: many(conquest_move_data),
}));

export const move_effect_proseRelations = relations(move_effect_prose, ({one}) => ({
	language: one(languages, {
		fields: [move_effect_prose.local_language_id],
		references: [languages.id]
	}),
	move_effect: one(move_effects, {
		fields: [move_effect_prose.move_effect_id],
		references: [move_effects.id]
	}),
}));

export const move_effectsRelations = relations(move_effects, ({many}) => ({
	move_effect_proses: many(move_effect_prose),
	move_effect_changelogs: many(move_effect_changelog),
	moves: many(moves),
	move_changelogs: many(move_changelog),
}));

export const region_namesRelations = relations(region_names, ({one}) => ({
	language: one(languages, {
		fields: [region_names.local_language_id],
		references: [languages.id]
	}),
	region: one(regions, {
		fields: [region_names.region_id],
		references: [regions.id]
	}),
}));

export const regionsRelations = relations(regions, ({many}) => ({
	region_names: many(region_names),
	locations: many(locations),
	generations: many(generations),
	pokedexes: many(pokedexes),
	version_group_regions: many(version_group_regions),
}));

export const conquest_episode_namesRelations = relations(conquest_episode_names, ({one}) => ({
	language: one(languages, {
		fields: [conquest_episode_names.local_language_id],
		references: [languages.id]
	}),
	conquest_episode: one(conquest_episodes, {
		fields: [conquest_episode_names.episode_id],
		references: [conquest_episodes.id]
	}),
}));

export const conquest_episodesRelations = relations(conquest_episodes, ({many}) => ({
	conquest_episode_names: many(conquest_episode_names),
	conquest_episode_warriors: many(conquest_episode_warriors),
	conquest_warrior_transformations_current_episode_id: many(conquest_warrior_transformation, {
		relationName: "conquest_warrior_transformation_current_episode_id_conquest_episodes_id"
	}),
	conquest_warrior_transformations_completed_episode_id: many(conquest_warrior_transformation, {
		relationName: "conquest_warrior_transformation_completed_episode_id_conquest_episodes_id"
	}),
}));

export const locationsRelations = relations(locations, ({one, many}) => ({
	region: one(regions, {
		fields: [locations.region_id],
		references: [regions.id]
	}),
	location_areas: many(location_areas),
	location_game_indices: many(location_game_indices),
	location_names: many(location_names),
	pokemon_evolutions: many(pokemon_evolution),
}));

export const generationsRelations = relations(generations, ({one, many}) => ({
	region: one(regions, {
		fields: [generations.main_region_id],
		references: [regions.id]
	}),
	generation_names: many(generation_names),
	abilities: many(abilities),
	version_groups: many(version_groups),
	location_game_indices: many(location_game_indices),
	types: many(types),
	type_game_indices: many(type_game_indices),
	moves: many(moves),
	item_game_indices: many(item_game_indices),
	pokemon_species: many(pokemon_species),
	pokemon_form_generations: many(pokemon_form_generations),
}));

export const evolution_trigger_proseRelations = relations(evolution_trigger_prose, ({one}) => ({
	language: one(languages, {
		fields: [evolution_trigger_prose.local_language_id],
		references: [languages.id]
	}),
	evolution_trigger: one(evolution_triggers, {
		fields: [evolution_trigger_prose.evolution_trigger_id],
		references: [evolution_triggers.id]
	}),
}));

export const evolution_triggersRelations = relations(evolution_triggers, ({many}) => ({
	evolution_trigger_proses: many(evolution_trigger_prose),
	pokemon_evolutions: many(pokemon_evolution),
}));

export const contest_effect_proseRelations = relations(contest_effect_prose, ({one}) => ({
	language: one(languages, {
		fields: [contest_effect_prose.local_language_id],
		references: [languages.id]
	}),
	contest_effect: one(contest_effects, {
		fields: [contest_effect_prose.contest_effect_id],
		references: [contest_effects.id]
	}),
}));

export const contest_effectsRelations = relations(contest_effects, ({many}) => ({
	contest_effect_proses: many(contest_effect_prose),
	moves: many(moves),
}));

export const pokedexesRelations = relations(pokedexes, ({one, many}) => ({
	region: one(regions, {
		fields: [pokedexes.region_id],
		references: [regions.id]
	}),
	pokedex_proses: many(pokedex_prose),
	pokedex_version_groups: many(pokedex_version_groups),
	pokemon_dex_numbers: many(pokemon_dex_numbers),
}));

export const encounter_condition_valuesRelations = relations(encounter_condition_values, ({one, many}) => ({
	encounter_condition: one(encounter_conditions, {
		fields: [encounter_condition_values.encounter_condition_id],
		references: [encounter_conditions.id]
	}),
	encounter_condition_value_proses: many(encounter_condition_value_prose),
	encounter_condition_value_maps: many(encounter_condition_value_map),
}));

export const pokemon_shape_proseRelations = relations(pokemon_shape_prose, ({one}) => ({
	language: one(languages, {
		fields: [pokemon_shape_prose.local_language_id],
		references: [languages.id]
	}),
	pokemon_shape: one(pokemon_shapes, {
		fields: [pokemon_shape_prose.pokemon_shape_id],
		references: [pokemon_shapes.id]
	}),
}));

export const pokemon_shapesRelations = relations(pokemon_shapes, ({many}) => ({
	pokemon_shape_proses: many(pokemon_shape_prose),
	pokemon_species: many(pokemon_species),
}));

export const encounter_method_proseRelations = relations(encounter_method_prose, ({one}) => ({
	language: one(languages, {
		fields: [encounter_method_prose.local_language_id],
		references: [languages.id]
	}),
	encounter_method: one(encounter_methods, {
		fields: [encounter_method_prose.encounter_method_id],
		references: [encounter_methods.id]
	}),
}));

export const encounter_methodsRelations = relations(encounter_methods, ({many}) => ({
	encounter_method_proses: many(encounter_method_prose),
	encounter_slots: many(encounter_slots),
	location_area_encounter_rates: many(location_area_encounter_rates),
}));

export const generation_namesRelations = relations(generation_names, ({one}) => ({
	language: one(languages, {
		fields: [generation_names.local_language_id],
		references: [languages.id]
	}),
	generation: one(generations, {
		fields: [generation_names.generation_id],
		references: [generations.id]
	}),
}));

export const conquest_episode_warriorsRelations = relations(conquest_episode_warriors, ({one}) => ({
	conquest_warrior: one(conquest_warriors, {
		fields: [conquest_episode_warriors.warrior_id],
		references: [conquest_warriors.id]
	}),
	conquest_episode: one(conquest_episodes, {
		fields: [conquest_episode_warriors.episode_id],
		references: [conquest_episodes.id]
	}),
}));

export const abilitiesRelations = relations(abilities, ({one, many}) => ({
	generation: one(generations, {
		fields: [abilities.generation_id],
		references: [generations.id]
	}),
	ability_changelogs: many(ability_changelog),
	ability_flavor_texts: many(ability_flavor_text),
	ability_proses: many(ability_prose),
	ability_names: many(ability_names),
	conquest_pokemon_abilities: many(conquest_pokemon_abilities),
	pokemon_abilities: many(pokemon_abilities),
}));

export const location_areasRelations = relations(location_areas, ({one, many}) => ({
	location: one(locations, {
		fields: [location_areas.location_id],
		references: [locations.id]
	}),
	location_area_proses: many(location_area_prose),
	location_area_encounter_rates: many(location_area_encounter_rates),
	encounters: many(encounters),
}));

export const stat_namesRelations = relations(stat_names, ({one}) => ({
	language: one(languages, {
		fields: [stat_names.local_language_id],
		references: [languages.id]
	}),
	stat: one(stats, {
		fields: [stat_names.stat_id],
		references: [stats.id]
	}),
}));

export const itemsRelations = relations(items, ({one, many}) => ({
	item_fling_effect: one(item_fling_effects, {
		fields: [items.fling_effect_id],
		references: [item_fling_effects.id]
	}),
	item_category: one(item_categories, {
		fields: [items.category_id],
		references: [item_categories.id]
	}),
	item_flavor_summaries: many(item_flavor_summaries),
	evolution_chains: many(evolution_chains),
	item_flag_maps: many(item_flag_map),
	item_proses: many(item_prose),
	berries: many(berries),
	item_game_indices: many(item_game_indices),
	item_flavor_texts: many(item_flavor_text),
	item_names: many(item_names),
	machines: many(machines),
	pokemon_evolutions_held_item_id: many(pokemon_evolution, {
		relationName: "pokemon_evolution_held_item_id_items_id"
	}),
	pokemon_evolutions_trigger_item_id: many(pokemon_evolution, {
		relationName: "pokemon_evolution_trigger_item_id_items_id"
	}),
	conquest_pokemon_evolutions: many(conquest_pokemon_evolution),
	pokemon_items: many(pokemon_items),
}));

export const item_category_proseRelations = relations(item_category_prose, ({one}) => ({
	language: one(languages, {
		fields: [item_category_prose.local_language_id],
		references: [languages.id]
	}),
	item_category: one(item_categories, {
		fields: [item_category_prose.item_category_id],
		references: [item_categories.id]
	}),
}));

export const version_groupsRelations = relations(version_groups, ({one, many}) => ({
	generation: one(generations, {
		fields: [version_groups.generation_id],
		references: [generations.id]
	}),
	ability_changelogs: many(ability_changelog),
	version_group_pokemon_move_methods: many(version_group_pokemon_move_methods),
	ability_flavor_texts: many(ability_flavor_text),
	move_effect_changelogs: many(move_effect_changelog),
	version_group_regions: many(version_group_regions),
	versions: many(versions),
	encounter_slots: many(encounter_slots),
	pokedex_version_groups: many(pokedex_version_groups),
	item_flavor_texts: many(item_flavor_text),
	machines: many(machines),
	move_changelogs: many(move_changelog),
	move_flavor_texts: many(move_flavor_text),
	pokemon_moves: many(pokemon_moves),
	pokemon_forms: many(pokemon_forms),
}));

export const conquest_warrior_namesRelations = relations(conquest_warrior_names, ({one}) => ({
	language: one(languages, {
		fields: [conquest_warrior_names.local_language_id],
		references: [languages.id]
	}),
	conquest_warrior: one(conquest_warriors, {
		fields: [conquest_warrior_names.warrior_id],
		references: [conquest_warriors.id]
	}),
}));

export const naturesRelations = relations(natures, ({one, many}) => ({
	contest_type_likes_flavor_id: one(contest_types, {
		fields: [natures.likes_flavor_id],
		references: [contest_types.id],
		relationName: "natures_likes_flavor_id_contest_types_id"
	}),
	contest_type_hates_flavor_id: one(contest_types, {
		fields: [natures.hates_flavor_id],
		references: [contest_types.id],
		relationName: "natures_hates_flavor_id_contest_types_id"
	}),
	stat_increased_stat_id: one(stats, {
		fields: [natures.increased_stat_id],
		references: [stats.id],
		relationName: "natures_increased_stat_id_stats_id"
	}),
	stat_decreased_stat_id: one(stats, {
		fields: [natures.decreased_stat_id],
		references: [stats.id],
		relationName: "natures_decreased_stat_id_stats_id"
	}),
	nature_battle_style_preferences: many(nature_battle_style_preferences),
	nature_names: many(nature_names),
	nature_pokeathlon_stats: many(nature_pokeathlon_stats),
}));

export const pokedex_proseRelations = relations(pokedex_prose, ({one}) => ({
	language: one(languages, {
		fields: [pokedex_prose.local_language_id],
		references: [languages.id]
	}),
	pokedex: one(pokedexes, {
		fields: [pokedex_prose.pokedex_id],
		references: [pokedexes.id]
	}),
}));

export const characteristicsRelations = relations(characteristics, ({one, many}) => ({
	stat: one(stats, {
		fields: [characteristics.stat_id],
		references: [stats.id]
	}),
	characteristic_texts: many(characteristic_text),
}));

export const location_game_indicesRelations = relations(location_game_indices, ({one}) => ({
	generation: one(generations, {
		fields: [location_game_indices.generation_id],
		references: [generations.id]
	}),
	location: one(locations, {
		fields: [location_game_indices.location_id],
		references: [locations.id]
	}),
}));

export const conquest_warrior_ranksRelations = relations(conquest_warrior_ranks, ({one, many}) => ({
	conquest_warrior_skill: one(conquest_warrior_skills, {
		fields: [conquest_warrior_ranks.skill_id],
		references: [conquest_warrior_skills.id]
	}),
	conquest_warrior: one(conquest_warriors, {
		fields: [conquest_warrior_ranks.warrior_id],
		references: [conquest_warriors.id]
	}),
	conquest_warrior_transformations: many(conquest_warrior_transformation),
	conquest_warrior_rank_stat_maps: many(conquest_warrior_rank_stat_map),
	conquest_max_links: many(conquest_max_links),
}));

export const encounter_condition_value_proseRelations = relations(encounter_condition_value_prose, ({one}) => ({
	language: one(languages, {
		fields: [encounter_condition_value_prose.local_language_id],
		references: [languages.id]
	}),
	encounter_condition_value: one(encounter_condition_values, {
		fields: [encounter_condition_value_prose.encounter_condition_value_id],
		references: [encounter_condition_values.id]
	}),
}));

export const typesRelations = relations(types, ({one, many}) => ({
	move_damage_class: one(move_damage_classes, {
		fields: [types.damage_class_id],
		references: [move_damage_classes.id]
	}),
	generation: one(generations, {
		fields: [types.generation_id],
		references: [generations.id]
	}),
	conquest_warrior_transformations: many(conquest_warrior_transformation),
	type_game_indices: many(type_game_indices),
	conquest_kingdoms: many(conquest_kingdoms),
	conquest_warrior_specialties: many(conquest_warrior_specialties),
	berries: many(berries),
	moves: many(moves),
	type_names: many(type_names),
	type_efficacies_target_type_id: many(type_efficacy, {
		relationName: "type_efficacy_target_type_id_types_id"
	}),
	type_efficacies_damage_type_id: many(type_efficacy, {
		relationName: "type_efficacy_damage_type_id_types_id"
	}),
	move_changelogs: many(move_changelog),
	pokemon_evolutions_party_type_id: many(pokemon_evolution, {
		relationName: "pokemon_evolution_party_type_id_types_id"
	}),
	pokemon_evolutions_known_move_type_id: many(pokemon_evolution, {
		relationName: "pokemon_evolution_known_move_type_id_types_id"
	}),
	pokemon_types: many(pokemon_types),
}));

export const location_namesRelations = relations(location_names, ({one}) => ({
	language: one(languages, {
		fields: [location_names.local_language_id],
		references: [languages.id]
	}),
	location: one(locations, {
		fields: [location_names.location_id],
		references: [locations.id]
	}),
}));

export const conquest_warrior_transformationRelations = relations(conquest_warrior_transformation, ({one, many}) => ({
	type: one(types, {
		fields: [conquest_warrior_transformation.collection_type_id],
		references: [types.id]
	}),
	conquest_warrior: one(conquest_warriors, {
		fields: [conquest_warrior_transformation.distant_warrior_id],
		references: [conquest_warriors.id]
	}),
	conquest_episode_current_episode_id: one(conquest_episodes, {
		fields: [conquest_warrior_transformation.current_episode_id],
		references: [conquest_episodes.id],
		relationName: "conquest_warrior_transformation_current_episode_id_conquest_episodes_id"
	}),
	conquest_episode_completed_episode_id: one(conquest_episodes, {
		fields: [conquest_warrior_transformation.completed_episode_id],
		references: [conquest_episodes.id],
		relationName: "conquest_warrior_transformation_completed_episode_id_conquest_episodes_id"
	}),
	conquest_warrior_rank: one(conquest_warrior_ranks, {
		fields: [conquest_warrior_transformation.transformed_warrior_rank_id],
		references: [conquest_warrior_ranks.id]
	}),
	conquest_transformation_warriors: many(conquest_transformation_warriors),
	conquest_transformation_pokemon: many(conquest_transformation_pokemon),
}));

export const nature_battle_style_preferencesRelations = relations(nature_battle_style_preferences, ({one}) => ({
	move_battle_style: one(move_battle_styles, {
		fields: [nature_battle_style_preferences.move_battle_style_id],
		references: [move_battle_styles.id]
	}),
	nature: one(natures, {
		fields: [nature_battle_style_preferences.nature_id],
		references: [natures.id]
	}),
}));

export const ability_changelogRelations = relations(ability_changelog, ({one, many}) => ({
	version_group: one(version_groups, {
		fields: [ability_changelog.changed_in_version_group_id],
		references: [version_groups.id]
	}),
	ability: one(abilities, {
		fields: [ability_changelog.ability_id],
		references: [abilities.id]
	}),
	ability_changelog_proses: many(ability_changelog_prose),
}));

export const location_area_proseRelations = relations(location_area_prose, ({one}) => ({
	language: one(languages, {
		fields: [location_area_prose.local_language_id],
		references: [languages.id]
	}),
	location_area: one(location_areas, {
		fields: [location_area_prose.location_area_id],
		references: [location_areas.id]
	}),
}));

export const version_group_pokemon_move_methodsRelations = relations(version_group_pokemon_move_methods, ({one}) => ({
	pokemon_move_method: one(pokemon_move_methods, {
		fields: [version_group_pokemon_move_methods.pokemon_move_method_id],
		references: [pokemon_move_methods.id]
	}),
	version_group: one(version_groups, {
		fields: [version_group_pokemon_move_methods.version_group_id],
		references: [version_groups.id]
	}),
}));

export const ability_flavor_textRelations = relations(ability_flavor_text, ({one}) => ({
	language: one(languages, {
		fields: [ability_flavor_text.language_id],
		references: [languages.id]
	}),
	version_group: one(version_groups, {
		fields: [ability_flavor_text.version_group_id],
		references: [version_groups.id]
	}),
	ability: one(abilities, {
		fields: [ability_flavor_text.ability_id],
		references: [abilities.id]
	}),
}));

export const item_flavor_summariesRelations = relations(item_flavor_summaries, ({one}) => ({
	language: one(languages, {
		fields: [item_flavor_summaries.local_language_id],
		references: [languages.id]
	}),
	item: one(items, {
		fields: [item_flavor_summaries.item_id],
		references: [items.id]
	}),
}));

export const evolution_chainsRelations = relations(evolution_chains, ({one, many}) => ({
	item: one(items, {
		fields: [evolution_chains.baby_trigger_item_id],
		references: [items.id]
	}),
	pokemon_species: many(pokemon_species),
}));

export const ability_proseRelations = relations(ability_prose, ({one}) => ({
	language: one(languages, {
		fields: [ability_prose.local_language_id],
		references: [languages.id]
	}),
	ability: one(abilities, {
		fields: [ability_prose.ability_id],
		references: [abilities.id]
	}),
}));

export const type_game_indicesRelations = relations(type_game_indices, ({one}) => ({
	generation: one(generations, {
		fields: [type_game_indices.generation_id],
		references: [generations.id]
	}),
	type: one(types, {
		fields: [type_game_indices.type_id],
		references: [types.id]
	}),
}));

export const move_effect_changelogRelations = relations(move_effect_changelog, ({one, many}) => ({
	version_group: one(version_groups, {
		fields: [move_effect_changelog.changed_in_version_group_id],
		references: [version_groups.id]
	}),
	move_effect: one(move_effects, {
		fields: [move_effect_changelog.effect_id],
		references: [move_effects.id]
	}),
	move_effect_changelog_proses: many(move_effect_changelog_prose),
}));

export const nature_namesRelations = relations(nature_names, ({one}) => ({
	language: one(languages, {
		fields: [nature_names.local_language_id],
		references: [languages.id]
	}),
	nature: one(natures, {
		fields: [nature_names.nature_id],
		references: [natures.id]
	}),
}));

export const conquest_warrior_rank_stat_mapRelations = relations(conquest_warrior_rank_stat_map, ({one}) => ({
	conquest_warrior_stat: one(conquest_warrior_stats, {
		fields: [conquest_warrior_rank_stat_map.warrior_stat_id],
		references: [conquest_warrior_stats.id]
	}),
	conquest_warrior_rank: one(conquest_warrior_ranks, {
		fields: [conquest_warrior_rank_stat_map.warrior_rank_id],
		references: [conquest_warrior_ranks.id]
	}),
}));

export const conquest_kingdomsRelations = relations(conquest_kingdoms, ({one, many}) => ({
	type: one(types, {
		fields: [conquest_kingdoms.type_id],
		references: [types.id]
	}),
	conquest_kingdom_names: many(conquest_kingdom_names),
	conquest_pokemon_evolutions: many(conquest_pokemon_evolution),
}));

export const version_group_regionsRelations = relations(version_group_regions, ({one}) => ({
	region: one(regions, {
		fields: [version_group_regions.region_id],
		references: [regions.id]
	}),
	version_group: one(version_groups, {
		fields: [version_group_regions.version_group_id],
		references: [version_groups.id]
	}),
}));

export const conquest_warrior_specialtiesRelations = relations(conquest_warrior_specialties, ({one}) => ({
	type: one(types, {
		fields: [conquest_warrior_specialties.type_id],
		references: [types.id]
	}),
	conquest_warrior: one(conquest_warriors, {
		fields: [conquest_warrior_specialties.warrior_id],
		references: [conquest_warriors.id]
	}),
}));

export const item_flag_mapRelations = relations(item_flag_map, ({one}) => ({
	item_flag: one(item_flags, {
		fields: [item_flag_map.item_flag_id],
		references: [item_flags.id]
	}),
	item: one(items, {
		fields: [item_flag_map.item_id],
		references: [items.id]
	}),
}));

export const item_proseRelations = relations(item_prose, ({one}) => ({
	language: one(languages, {
		fields: [item_prose.local_language_id],
		references: [languages.id]
	}),
	item: one(items, {
		fields: [item_prose.item_id],
		references: [items.id]
	}),
}));

export const nature_pokeathlon_statsRelations = relations(nature_pokeathlon_stats, ({one}) => ({
	pokeathlon_stat: one(pokeathlon_stats, {
		fields: [nature_pokeathlon_stats.pokeathlon_stat_id],
		references: [pokeathlon_stats.id]
	}),
	nature: one(natures, {
		fields: [nature_pokeathlon_stats.nature_id],
		references: [natures.id]
	}),
}));

export const versionsRelations = relations(versions, ({one, many}) => ({
	version_group: one(version_groups, {
		fields: [versions.version_group_id],
		references: [version_groups.id]
	}),
	location_area_encounter_rates: many(location_area_encounter_rates),
	version_names: many(version_names),
	pokemon_species_flavor_texts: many(pokemon_species_flavor_text),
	pokemon_items: many(pokemon_items),
	pokemon_game_indices: many(pokemon_game_indices),
	encounters: many(encounters),
}));

export const berriesRelations = relations(berries, ({one, many}) => ({
	type: one(types, {
		fields: [berries.natural_gift_type_id],
		references: [types.id]
	}),
	berry_firmness: one(berry_firmness, {
		fields: [berries.firmness_id],
		references: [berry_firmness.id]
	}),
	item: one(items, {
		fields: [berries.item_id],
		references: [items.id]
	}),
	berry_flavors: many(berry_flavors),
}));

export const movesRelations = relations(moves, ({one, many}) => ({
	super_contest_effect: one(super_contest_effects, {
		fields: [moves.super_contest_effect_id],
		references: [super_contest_effects.id]
	}),
	contest_effect: one(contest_effects, {
		fields: [moves.contest_effect_id],
		references: [contest_effects.id]
	}),
	contest_type: one(contest_types, {
		fields: [moves.contest_type_id],
		references: [contest_types.id]
	}),
	move_effect: one(move_effects, {
		fields: [moves.effect_id],
		references: [move_effects.id]
	}),
	move_damage_class: one(move_damage_classes, {
		fields: [moves.damage_class_id],
		references: [move_damage_classes.id]
	}),
	move_target: one(move_targets, {
		fields: [moves.target_id],
		references: [move_targets.id]
	}),
	type: one(types, {
		fields: [moves.type_id],
		references: [types.id]
	}),
	generation: one(generations, {
		fields: [moves.generation_id],
		references: [generations.id]
	}),
	machines: many(machines),
	conquest_move_data: many(conquest_move_data),
	move_flavor_summaries: many(move_flavor_summaries),
	move_metas: many(move_meta),
	move_meta_stat_changes: many(move_meta_stat_changes),
	move_changelogs: many(move_changelog),
	move_names: many(move_names),
	move_flag_maps: many(move_flag_map),
	move_flavor_texts: many(move_flavor_text),
	contest_combos_second_move_id: many(contest_combos, {
		relationName: "contest_combos_second_move_id_moves_id"
	}),
	contest_combos_first_move_id: many(contest_combos, {
		relationName: "contest_combos_first_move_id_moves_id"
	}),
	super_contest_combos_second_move_id: many(super_contest_combos, {
		relationName: "super_contest_combos_second_move_id_moves_id"
	}),
	super_contest_combos_first_move_id: many(super_contest_combos, {
		relationName: "super_contest_combos_first_move_id_moves_id"
	}),
	conquest_pokemon_moves: many(conquest_pokemon_moves),
	pokemon_evolutions: many(pokemon_evolution),
	pokemon_moves: many(pokemon_moves),
}));

export const ability_namesRelations = relations(ability_names, ({one}) => ({
	language: one(languages, {
		fields: [ability_names.local_language_id],
		references: [languages.id]
	}),
	ability: one(abilities, {
		fields: [ability_names.ability_id],
		references: [abilities.id]
	}),
}));

export const encounter_slotsRelations = relations(encounter_slots, ({one, many}) => ({
	encounter_method: one(encounter_methods, {
		fields: [encounter_slots.encounter_method_id],
		references: [encounter_methods.id]
	}),
	version_group: one(version_groups, {
		fields: [encounter_slots.version_group_id],
		references: [version_groups.id]
	}),
	encounters: many(encounters),
}));

export const item_game_indicesRelations = relations(item_game_indices, ({one}) => ({
	generation: one(generations, {
		fields: [item_game_indices.generation_id],
		references: [generations.id]
	}),
	item: one(items, {
		fields: [item_game_indices.item_id],
		references: [items.id]
	}),
}));

export const type_namesRelations = relations(type_names, ({one}) => ({
	language: one(languages, {
		fields: [type_names.local_language_id],
		references: [languages.id]
	}),
	type: one(types, {
		fields: [type_names.type_id],
		references: [types.id]
	}),
}));

export const type_efficacyRelations = relations(type_efficacy, ({one}) => ({
	type_target_type_id: one(types, {
		fields: [type_efficacy.target_type_id],
		references: [types.id],
		relationName: "type_efficacy_target_type_id_types_id"
	}),
	type_damage_type_id: one(types, {
		fields: [type_efficacy.damage_type_id],
		references: [types.id],
		relationName: "type_efficacy_damage_type_id_types_id"
	}),
}));

export const pokedex_version_groupsRelations = relations(pokedex_version_groups, ({one}) => ({
	version_group: one(version_groups, {
		fields: [pokedex_version_groups.version_group_id],
		references: [version_groups.id]
	}),
	pokedex: one(pokedexes, {
		fields: [pokedex_version_groups.pokedex_id],
		references: [pokedexes.id]
	}),
}));

export const item_flavor_textRelations = relations(item_flavor_text, ({one}) => ({
	language: one(languages, {
		fields: [item_flavor_text.language_id],
		references: [languages.id]
	}),
	version_group: one(version_groups, {
		fields: [item_flavor_text.version_group_id],
		references: [version_groups.id]
	}),
	item: one(items, {
		fields: [item_flavor_text.item_id],
		references: [items.id]
	}),
}));

export const item_namesRelations = relations(item_names, ({one}) => ({
	language: one(languages, {
		fields: [item_names.local_language_id],
		references: [languages.id]
	}),
	item: one(items, {
		fields: [item_names.item_id],
		references: [items.id]
	}),
}));

export const characteristic_textRelations = relations(characteristic_text, ({one}) => ({
	language: one(languages, {
		fields: [characteristic_text.local_language_id],
		references: [languages.id]
	}),
	characteristic: one(characteristics, {
		fields: [characteristic_text.characteristic_id],
		references: [characteristics.id]
	}),
}));

export const machinesRelations = relations(machines, ({one}) => ({
	move: one(moves, {
		fields: [machines.move_id],
		references: [moves.id]
	}),
	item: one(items, {
		fields: [machines.item_id],
		references: [items.id]
	}),
	version_group: one(version_groups, {
		fields: [machines.version_group_id],
		references: [version_groups.id]
	}),
}));

export const location_area_encounter_ratesRelations = relations(location_area_encounter_rates, ({one}) => ({
	version: one(versions, {
		fields: [location_area_encounter_rates.version_id],
		references: [versions.id]
	}),
	encounter_method: one(encounter_methods, {
		fields: [location_area_encounter_rates.encounter_method_id],
		references: [encounter_methods.id]
	}),
	location_area: one(location_areas, {
		fields: [location_area_encounter_rates.location_area_id],
		references: [location_areas.id]
	}),
}));

export const pokemon_speciesRelations = relations(pokemon_species, ({one, many}) => ({
	growth_rate: one(growth_rates, {
		fields: [pokemon_species.growth_rate_id],
		references: [growth_rates.id]
	}),
	pokemon_habitat: one(pokemon_habitats, {
		fields: [pokemon_species.habitat_id],
		references: [pokemon_habitats.id]
	}),
	pokemon_shape: one(pokemon_shapes, {
		fields: [pokemon_species.shape_id],
		references: [pokemon_shapes.id]
	}),
	pokemon_color: one(pokemon_colors, {
		fields: [pokemon_species.color_id],
		references: [pokemon_colors.id]
	}),
	evolution_chain: one(evolution_chains, {
		fields: [pokemon_species.evolution_chain_id],
		references: [evolution_chains.id]
	}),
	pokemon_specy: one(pokemon_species, {
		fields: [pokemon_species.evolves_from_species_id],
		references: [pokemon_species.id],
		relationName: "pokemon_species_evolves_from_species_id_pokemon_species_id"
	}),
	pokemon_species: many(pokemon_species, {
		relationName: "pokemon_species_evolves_from_species_id_pokemon_species_id"
	}),
	generation: one(generations, {
		fields: [pokemon_species.generation_id],
		references: [generations.id]
	}),
	pokemon_species_flavor_summaries: many(pokemon_species_flavor_summaries),
	conquest_max_links: many(conquest_max_links),
	conquest_transformation_pokemon: many(conquest_transformation_pokemon),
	conquest_pokemon_moves: many(conquest_pokemon_moves),
	conquest_pokemon_abilities: many(conquest_pokemon_abilities),
	pokemon: many(pokemon),
	pal_parks: many(pal_park),
	pokemon_species_proses: many(pokemon_species_prose),
	conquest_pokemon_stats: many(conquest_pokemon_stats),
	pokemon_species_flavor_texts: many(pokemon_species_flavor_text),
	pokemon_evolutions_trade_species_id: many(pokemon_evolution, {
		relationName: "pokemon_evolution_trade_species_id_pokemon_species_id"
	}),
	pokemon_evolutions_party_species_id: many(pokemon_evolution, {
		relationName: "pokemon_evolution_party_species_id_pokemon_species_id"
	}),
	pokemon_evolutions_evolved_species_id: many(pokemon_evolution, {
		relationName: "pokemon_evolution_evolved_species_id_pokemon_species_id"
	}),
	pokemon_species_names: many(pokemon_species_names),
	pokemon_dex_numbers: many(pokemon_dex_numbers),
	pokemon_egg_groups: many(pokemon_egg_groups),
	conquest_pokemon_evolutions: many(conquest_pokemon_evolution),
}));

export const berry_flavorsRelations = relations(berry_flavors, ({one}) => ({
	contest_type: one(contest_types, {
		fields: [berry_flavors.contest_type_id],
		references: [contest_types.id]
	}),
	berry: one(berries, {
		fields: [berry_flavors.berry_id],
		references: [berries.id]
	}),
}));

export const conquest_move_dataRelations = relations(conquest_move_data, ({one}) => ({
	conquest_move_displacement: one(conquest_move_displacements, {
		fields: [conquest_move_data.displacement_id],
		references: [conquest_move_displacements.id]
	}),
	conquest_move_range: one(conquest_move_ranges, {
		fields: [conquest_move_data.range_id],
		references: [conquest_move_ranges.id]
	}),
	conquest_move_effect: one(conquest_move_effects, {
		fields: [conquest_move_data.effect_id],
		references: [conquest_move_effects.id]
	}),
	move: one(moves, {
		fields: [conquest_move_data.move_id],
		references: [moves.id]
	}),
}));

export const conquest_transformation_warriorsRelations = relations(conquest_transformation_warriors, ({one}) => ({
	conquest_warrior: one(conquest_warriors, {
		fields: [conquest_transformation_warriors.present_warrior_id],
		references: [conquest_warriors.id]
	}),
	conquest_warrior_transformation: one(conquest_warrior_transformation, {
		fields: [conquest_transformation_warriors.transformation_id],
		references: [conquest_warrior_transformation.transformed_warrior_rank_id]
	}),
}));

export const move_flavor_summariesRelations = relations(move_flavor_summaries, ({one}) => ({
	language: one(languages, {
		fields: [move_flavor_summaries.local_language_id],
		references: [languages.id]
	}),
	move: one(moves, {
		fields: [move_flavor_summaries.move_id],
		references: [moves.id]
	}),
}));

export const move_metaRelations = relations(move_meta, ({one}) => ({
	move_meta_ailment: one(move_meta_ailments, {
		fields: [move_meta.meta_ailment_id],
		references: [move_meta_ailments.id]
	}),
	move_meta_category: one(move_meta_categories, {
		fields: [move_meta.meta_category_id],
		references: [move_meta_categories.id]
	}),
	move: one(moves, {
		fields: [move_meta.move_id],
		references: [moves.id]
	}),
}));

export const version_namesRelations = relations(version_names, ({one}) => ({
	language: one(languages, {
		fields: [version_names.local_language_id],
		references: [languages.id]
	}),
	version: one(versions, {
		fields: [version_names.version_id],
		references: [versions.id]
	}),
}));

export const move_meta_stat_changesRelations = relations(move_meta_stat_changes, ({one}) => ({
	stat: one(stats, {
		fields: [move_meta_stat_changes.stat_id],
		references: [stats.id]
	}),
	move: one(moves, {
		fields: [move_meta_stat_changes.move_id],
		references: [moves.id]
	}),
}));

export const move_changelogRelations = relations(move_changelog, ({one}) => ({
	move_effect: one(move_effects, {
		fields: [move_changelog.effect_id],
		references: [move_effects.id]
	}),
	move_target: one(move_targets, {
		fields: [move_changelog.target_id],
		references: [move_targets.id]
	}),
	type: one(types, {
		fields: [move_changelog.type_id],
		references: [types.id]
	}),
	version_group: one(version_groups, {
		fields: [move_changelog.changed_in_version_group_id],
		references: [version_groups.id]
	}),
	move: one(moves, {
		fields: [move_changelog.move_id],
		references: [moves.id]
	}),
}));

export const move_namesRelations = relations(move_names, ({one}) => ({
	language: one(languages, {
		fields: [move_names.local_language_id],
		references: [languages.id]
	}),
	move: one(moves, {
		fields: [move_names.move_id],
		references: [moves.id]
	}),
}));

export const move_flag_mapRelations = relations(move_flag_map, ({one}) => ({
	move_flag: one(move_flags, {
		fields: [move_flag_map.move_flag_id],
		references: [move_flags.id]
	}),
	move: one(moves, {
		fields: [move_flag_map.move_id],
		references: [moves.id]
	}),
}));

export const move_flavor_textRelations = relations(move_flavor_text, ({one}) => ({
	language: one(languages, {
		fields: [move_flavor_text.language_id],
		references: [languages.id]
	}),
	version_group: one(version_groups, {
		fields: [move_flavor_text.version_group_id],
		references: [version_groups.id]
	}),
	move: one(moves, {
		fields: [move_flavor_text.move_id],
		references: [moves.id]
	}),
}));

export const contest_combosRelations = relations(contest_combos, ({one}) => ({
	move_second_move_id: one(moves, {
		fields: [contest_combos.second_move_id],
		references: [moves.id],
		relationName: "contest_combos_second_move_id_moves_id"
	}),
	move_first_move_id: one(moves, {
		fields: [contest_combos.first_move_id],
		references: [moves.id],
		relationName: "contest_combos_first_move_id_moves_id"
	}),
}));

export const super_contest_combosRelations = relations(super_contest_combos, ({one}) => ({
	move_second_move_id: one(moves, {
		fields: [super_contest_combos.second_move_id],
		references: [moves.id],
		relationName: "super_contest_combos_second_move_id_moves_id"
	}),
	move_first_move_id: one(moves, {
		fields: [super_contest_combos.first_move_id],
		references: [moves.id],
		relationName: "super_contest_combos_first_move_id_moves_id"
	}),
}));

export const ability_changelog_proseRelations = relations(ability_changelog_prose, ({one}) => ({
	language: one(languages, {
		fields: [ability_changelog_prose.local_language_id],
		references: [languages.id]
	}),
	ability_changelog: one(ability_changelog, {
		fields: [ability_changelog_prose.ability_changelog_id],
		references: [ability_changelog.id]
	}),
}));

export const conquest_kingdom_namesRelations = relations(conquest_kingdom_names, ({one}) => ({
	language: one(languages, {
		fields: [conquest_kingdom_names.local_language_id],
		references: [languages.id]
	}),
	conquest_kingdom: one(conquest_kingdoms, {
		fields: [conquest_kingdom_names.kingdom_id],
		references: [conquest_kingdoms.id]
	}),
}));

export const move_effect_changelog_proseRelations = relations(move_effect_changelog_prose, ({one}) => ({
	language: one(languages, {
		fields: [move_effect_changelog_prose.local_language_id],
		references: [languages.id]
	}),
	move_effect_changelog: one(move_effect_changelog, {
		fields: [move_effect_changelog_prose.move_effect_changelog_id],
		references: [move_effect_changelog.id]
	}),
}));

export const pokemon_species_flavor_summariesRelations = relations(pokemon_species_flavor_summaries, ({one}) => ({
	language: one(languages, {
		fields: [pokemon_species_flavor_summaries.local_language_id],
		references: [languages.id]
	}),
	pokemon_specy: one(pokemon_species, {
		fields: [pokemon_species_flavor_summaries.pokemon_species_id],
		references: [pokemon_species.id]
	}),
}));

export const conquest_max_linksRelations = relations(conquest_max_links, ({one}) => ({
	pokemon_specy: one(pokemon_species, {
		fields: [conquest_max_links.pokemon_species_id],
		references: [pokemon_species.id]
	}),
	conquest_warrior_rank: one(conquest_warrior_ranks, {
		fields: [conquest_max_links.warrior_rank_id],
		references: [conquest_warrior_ranks.id]
	}),
}));

export const conquest_transformation_pokemonRelations = relations(conquest_transformation_pokemon, ({one}) => ({
	pokemon_specy: one(pokemon_species, {
		fields: [conquest_transformation_pokemon.pokemon_species_id],
		references: [pokemon_species.id]
	}),
	conquest_warrior_transformation: one(conquest_warrior_transformation, {
		fields: [conquest_transformation_pokemon.transformation_id],
		references: [conquest_warrior_transformation.transformed_warrior_rank_id]
	}),
}));

export const conquest_pokemon_movesRelations = relations(conquest_pokemon_moves, ({one}) => ({
	move: one(moves, {
		fields: [conquest_pokemon_moves.move_id],
		references: [moves.id]
	}),
	pokemon_specy: one(pokemon_species, {
		fields: [conquest_pokemon_moves.pokemon_species_id],
		references: [pokemon_species.id]
	}),
}));

export const conquest_pokemon_abilitiesRelations = relations(conquest_pokemon_abilities, ({one}) => ({
	ability: one(abilities, {
		fields: [conquest_pokemon_abilities.ability_id],
		references: [abilities.id]
	}),
	pokemon_specy: one(pokemon_species, {
		fields: [conquest_pokemon_abilities.pokemon_species_id],
		references: [pokemon_species.id]
	}),
}));

export const pokemonRelations = relations(pokemon, ({one, many}) => ({
	pokemon_specy: one(pokemon_species, {
		fields: [pokemon.species_id],
		references: [pokemon_species.id]
	}),
	pokemon_stats: many(pokemon_stats),
	pokemon_moves: many(pokemon_moves),
	pokemon_types: many(pokemon_types),
	pokemon_items: many(pokemon_items),
	pokemon_game_indices: many(pokemon_game_indices),
	pokemon_abilities: many(pokemon_abilities),
	pokemon_forms: many(pokemon_forms),
	encounters: many(encounters),
}));

export const pal_parkRelations = relations(pal_park, ({one}) => ({
	pal_park_area: one(pal_park_areas, {
		fields: [pal_park.area_id],
		references: [pal_park_areas.id]
	}),
	pokemon_specy: one(pokemon_species, {
		fields: [pal_park.species_id],
		references: [pokemon_species.id]
	}),
}));

export const pokemon_species_proseRelations = relations(pokemon_species_prose, ({one}) => ({
	language: one(languages, {
		fields: [pokemon_species_prose.local_language_id],
		references: [languages.id]
	}),
	pokemon_specy: one(pokemon_species, {
		fields: [pokemon_species_prose.pokemon_species_id],
		references: [pokemon_species.id]
	}),
}));

export const conquest_pokemon_statsRelations = relations(conquest_pokemon_stats, ({one}) => ({
	conquest_stat: one(conquest_stats, {
		fields: [conquest_pokemon_stats.conquest_stat_id],
		references: [conquest_stats.id]
	}),
	pokemon_specy: one(pokemon_species, {
		fields: [conquest_pokemon_stats.pokemon_species_id],
		references: [pokemon_species.id]
	}),
}));

export const pokemon_species_flavor_textRelations = relations(pokemon_species_flavor_text, ({one}) => ({
	language: one(languages, {
		fields: [pokemon_species_flavor_text.language_id],
		references: [languages.id]
	}),
	version: one(versions, {
		fields: [pokemon_species_flavor_text.version_id],
		references: [versions.id]
	}),
	pokemon_specy: one(pokemon_species, {
		fields: [pokemon_species_flavor_text.species_id],
		references: [pokemon_species.id]
	}),
}));

export const pokemon_evolutionRelations = relations(pokemon_evolution, ({one}) => ({
	pokemon_specy_trade_species_id: one(pokemon_species, {
		fields: [pokemon_evolution.trade_species_id],
		references: [pokemon_species.id],
		relationName: "pokemon_evolution_trade_species_id_pokemon_species_id"
	}),
	type_party_type_id: one(types, {
		fields: [pokemon_evolution.party_type_id],
		references: [types.id],
		relationName: "pokemon_evolution_party_type_id_types_id"
	}),
	pokemon_specy_party_species_id: one(pokemon_species, {
		fields: [pokemon_evolution.party_species_id],
		references: [pokemon_species.id],
		relationName: "pokemon_evolution_party_species_id_pokemon_species_id"
	}),
	type_known_move_type_id: one(types, {
		fields: [pokemon_evolution.known_move_type_id],
		references: [types.id],
		relationName: "pokemon_evolution_known_move_type_id_types_id"
	}),
	move: one(moves, {
		fields: [pokemon_evolution.known_move_id],
		references: [moves.id]
	}),
	item_held_item_id: one(items, {
		fields: [pokemon_evolution.held_item_id],
		references: [items.id],
		relationName: "pokemon_evolution_held_item_id_items_id"
	}),
	location: one(locations, {
		fields: [pokemon_evolution.location_id],
		references: [locations.id]
	}),
	gender: one(genders, {
		fields: [pokemon_evolution.gender_id],
		references: [genders.id]
	}),
	item_trigger_item_id: one(items, {
		fields: [pokemon_evolution.trigger_item_id],
		references: [items.id],
		relationName: "pokemon_evolution_trigger_item_id_items_id"
	}),
	evolution_trigger: one(evolution_triggers, {
		fields: [pokemon_evolution.evolution_trigger_id],
		references: [evolution_triggers.id]
	}),
	pokemon_specy_evolved_species_id: one(pokemon_species, {
		fields: [pokemon_evolution.evolved_species_id],
		references: [pokemon_species.id],
		relationName: "pokemon_evolution_evolved_species_id_pokemon_species_id"
	}),
}));

export const pokemon_species_namesRelations = relations(pokemon_species_names, ({one}) => ({
	language: one(languages, {
		fields: [pokemon_species_names.local_language_id],
		references: [languages.id]
	}),
	pokemon_specy: one(pokemon_species, {
		fields: [pokemon_species_names.pokemon_species_id],
		references: [pokemon_species.id]
	}),
}));

export const pokemon_dex_numbersRelations = relations(pokemon_dex_numbers, ({one}) => ({
	pokedex: one(pokedexes, {
		fields: [pokemon_dex_numbers.pokedex_id],
		references: [pokedexes.id]
	}),
	pokemon_specy: one(pokemon_species, {
		fields: [pokemon_dex_numbers.species_id],
		references: [pokemon_species.id]
	}),
}));

export const pokemon_egg_groupsRelations = relations(pokemon_egg_groups, ({one}) => ({
	egg_group: one(egg_groups, {
		fields: [pokemon_egg_groups.egg_group_id],
		references: [egg_groups.id]
	}),
	pokemon_specy: one(pokemon_species, {
		fields: [pokemon_egg_groups.species_id],
		references: [pokemon_species.id]
	}),
}));

export const conquest_pokemon_evolutionRelations = relations(conquest_pokemon_evolution, ({one}) => ({
	item: one(items, {
		fields: [conquest_pokemon_evolution.item_id],
		references: [items.id]
	}),
	gender: one(genders, {
		fields: [conquest_pokemon_evolution.warrior_gender_id],
		references: [genders.id]
	}),
	conquest_kingdom: one(conquest_kingdoms, {
		fields: [conquest_pokemon_evolution.kingdom_id],
		references: [conquest_kingdoms.id]
	}),
	conquest_stat: one(conquest_stats, {
		fields: [conquest_pokemon_evolution.required_stat_id],
		references: [conquest_stats.id]
	}),
	pokemon_specy: one(pokemon_species, {
		fields: [conquest_pokemon_evolution.evolved_species_id],
		references: [pokemon_species.id]
	}),
}));

export const pokemon_statsRelations = relations(pokemon_stats, ({one}) => ({
	stat: one(stats, {
		fields: [pokemon_stats.stat_id],
		references: [stats.id]
	}),
	pokemon: one(pokemon, {
		fields: [pokemon_stats.pokemon_id],
		references: [pokemon.id]
	}),
}));

export const pokemon_movesRelations = relations(pokemon_moves, ({one}) => ({
	pokemon_move_method: one(pokemon_move_methods, {
		fields: [pokemon_moves.pokemon_move_method_id],
		references: [pokemon_move_methods.id]
	}),
	move: one(moves, {
		fields: [pokemon_moves.move_id],
		references: [moves.id]
	}),
	version_group: one(version_groups, {
		fields: [pokemon_moves.version_group_id],
		references: [version_groups.id]
	}),
	pokemon: one(pokemon, {
		fields: [pokemon_moves.pokemon_id],
		references: [pokemon.id]
	}),
}));

export const pokemon_typesRelations = relations(pokemon_types, ({one}) => ({
	type: one(types, {
		fields: [pokemon_types.type_id],
		references: [types.id]
	}),
	pokemon: one(pokemon, {
		fields: [pokemon_types.pokemon_id],
		references: [pokemon.id]
	}),
}));

export const pokemon_itemsRelations = relations(pokemon_items, ({one}) => ({
	item: one(items, {
		fields: [pokemon_items.item_id],
		references: [items.id]
	}),
	version: one(versions, {
		fields: [pokemon_items.version_id],
		references: [versions.id]
	}),
	pokemon: one(pokemon, {
		fields: [pokemon_items.pokemon_id],
		references: [pokemon.id]
	}),
}));

export const pokemon_game_indicesRelations = relations(pokemon_game_indices, ({one}) => ({
	version: one(versions, {
		fields: [pokemon_game_indices.version_id],
		references: [versions.id]
	}),
	pokemon: one(pokemon, {
		fields: [pokemon_game_indices.pokemon_id],
		references: [pokemon.id]
	}),
}));

export const pokemon_abilitiesRelations = relations(pokemon_abilities, ({one}) => ({
	ability: one(abilities, {
		fields: [pokemon_abilities.ability_id],
		references: [abilities.id]
	}),
	pokemon: one(pokemon, {
		fields: [pokemon_abilities.pokemon_id],
		references: [pokemon.id]
	}),
}));

export const pokemon_formsRelations = relations(pokemon_forms, ({one, many}) => ({
	version_group: one(version_groups, {
		fields: [pokemon_forms.introduced_in_version_group_id],
		references: [version_groups.id]
	}),
	pokemon: one(pokemon, {
		fields: [pokemon_forms.pokemon_id],
		references: [pokemon.id]
	}),
	pokemon_form_generations: many(pokemon_form_generations),
	pokemon_form_names: many(pokemon_form_names),
	pokemon_form_pokeathlon_stats: many(pokemon_form_pokeathlon_stats),
}));

export const encountersRelations = relations(encounters, ({one, many}) => ({
	pokemon: one(pokemon, {
		fields: [encounters.pokemon_id],
		references: [pokemon.id]
	}),
	encounter_slot: one(encounter_slots, {
		fields: [encounters.encounter_slot_id],
		references: [encounter_slots.id]
	}),
	location_area: one(location_areas, {
		fields: [encounters.location_area_id],
		references: [location_areas.id]
	}),
	version: one(versions, {
		fields: [encounters.version_id],
		references: [versions.id]
	}),
	encounter_condition_value_maps: many(encounter_condition_value_map),
}));

export const encounter_condition_value_mapRelations = relations(encounter_condition_value_map, ({one}) => ({
	encounter_condition_value: one(encounter_condition_values, {
		fields: [encounter_condition_value_map.encounter_condition_value_id],
		references: [encounter_condition_values.id]
	}),
	encounter: one(encounters, {
		fields: [encounter_condition_value_map.encounter_id],
		references: [encounters.id]
	}),
}));

export const pokemon_form_generationsRelations = relations(pokemon_form_generations, ({one}) => ({
	generation: one(generations, {
		fields: [pokemon_form_generations.generation_id],
		references: [generations.id]
	}),
	pokemon_form: one(pokemon_forms, {
		fields: [pokemon_form_generations.pokemon_form_id],
		references: [pokemon_forms.id]
	}),
}));

export const pokemon_form_namesRelations = relations(pokemon_form_names, ({one}) => ({
	language: one(languages, {
		fields: [pokemon_form_names.local_language_id],
		references: [languages.id]
	}),
	pokemon_form: one(pokemon_forms, {
		fields: [pokemon_form_names.pokemon_form_id],
		references: [pokemon_forms.id]
	}),
}));

export const pokemon_form_pokeathlon_statsRelations = relations(pokemon_form_pokeathlon_stats, ({one}) => ({
	pokeathlon_stat: one(pokeathlon_stats, {
		fields: [pokemon_form_pokeathlon_stats.pokeathlon_stat_id],
		references: [pokeathlon_stats.id]
	}),
	pokemon_form: one(pokemon_forms, {
		fields: [pokemon_form_pokeathlon_stats.pokemon_form_id],
		references: [pokemon_forms.id]
	}),
}));