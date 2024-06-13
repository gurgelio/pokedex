import { sqliteTable, AnySQLiteColumn, integer, numeric, uniqueIndex, text, index, foreignKey, primaryKey } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const item_pockets = sqliteTable("item_pockets", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
});

export const pokeathlon_stats = sqliteTable("pokeathlon_stats", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
});

export const conquest_move_displacements = sqliteTable("conquest_move_displacements", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
	affects_target: numeric("affects_target").notNull(),
});

export const pokemon_habitats = sqliteTable("pokemon_habitats", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
});

export const pokemon_move_methods = sqliteTable("pokemon_move_methods", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
});

export const move_meta_ailments = sqliteTable("move_meta_ailments", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_move_meta_ailments_identifier: uniqueIndex("ix_move_meta_ailments_identifier").on(table.identifier),
	}
});

export const berry_firmness = sqliteTable("berry_firmness", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
});

export const item_fling_effects = sqliteTable("item_fling_effects", {
	id: integer("id").primaryKey().notNull(),
});

export const conquest_move_effects = sqliteTable("conquest_move_effects", {
	id: integer("id").primaryKey().notNull(),
});

export const contest_types = sqliteTable("contest_types", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
});

export const genders = sqliteTable("genders", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
});

export const growth_rates = sqliteTable("growth_rates", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
	formula: text("formula").notNull(),
});

export const evolution_triggers = sqliteTable("evolution_triggers", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
});

export const move_flags = sqliteTable("move_flags", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
});

export const egg_groups = sqliteTable("egg_groups", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
});

export const conquest_episodes = sqliteTable("conquest_episodes", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
});

export const move_targets = sqliteTable("move_targets", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
});

export const conquest_warrior_archetypes = sqliteTable("conquest_warrior_archetypes", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
});

export const pal_park_areas = sqliteTable("pal_park_areas", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
});

export const languages = sqliteTable("languages", {
	id: integer("id").primaryKey().notNull(),
	iso639: text("iso639", { length: 79 }).notNull(),
	iso3166: text("iso3166", { length: 79 }).notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
	official: numeric("official").notNull(),
	order: integer("order"),
},
(table) => {
	return {
		ix_languages_official: index("ix_languages_official").on(table.official),
	}
});

export const move_damage_classes = sqliteTable("move_damage_classes", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
});

export const conquest_warrior_skills = sqliteTable("conquest_warrior_skills", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
});

export const contest_effects = sqliteTable("contest_effects", {
	id: integer("id").primaryKey().notNull(),
	appeal: integer("appeal").notNull(),
	jam: integer("jam").notNull(),
});

export const encounter_methods = sqliteTable("encounter_methods", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
	order: integer("order").notNull(),
});

export const conquest_warrior_stats = sqliteTable("conquest_warrior_stats", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
});

export const move_effects = sqliteTable("move_effects", {
	id: integer("id").primaryKey().notNull(),
});

export const conquest_stats = sqliteTable("conquest_stats", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
	is_base: numeric("is_base").notNull(),
});

export const move_battle_styles = sqliteTable("move_battle_styles", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
});

export const pokemon_colors = sqliteTable("pokemon_colors", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
});

export const regions = sqliteTable("regions", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
});

export const conquest_move_ranges = sqliteTable("conquest_move_ranges", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
	targets: integer("targets").notNull(),
});

export const encounter_conditions = sqliteTable("encounter_conditions", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
});

export const item_flags = sqliteTable("item_flags", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
});

export const move_meta_categories = sqliteTable("move_meta_categories", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_move_meta_categories_identifier: uniqueIndex("ix_move_meta_categories_identifier").on(table.identifier),
	}
});

export const super_contest_effects = sqliteTable("super_contest_effects", {
	id: integer("id").primaryKey().notNull(),
	appeal: integer("appeal").notNull(),
});

export const pokemon_shapes = sqliteTable("pokemon_shapes", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
});

export const move_damage_class_prose = sqliteTable("move_damage_class_prose", {
	move_damage_class_id: integer("move_damage_class_id").notNull().references(() => move_damage_classes.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }),
	description: text("description"),
},
(table) => {
	return {
		ix_move_damage_class_prose_name: index("ix_move_damage_class_prose_name").on(table.name),
		pk0: primaryKey({ columns: [table.local_language_id, table.move_damage_class_id], name: "move_damage_class_prose_local_language_id_move_damage_class_id_pk"})
	}
});

export const pokemon_color_names = sqliteTable("pokemon_color_names", {
	pokemon_color_id: integer("pokemon_color_id").notNull().references(() => pokemon_colors.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_pokemon_color_names_name: index("ix_pokemon_color_names_name").on(table.name),
		pk0: primaryKey({ columns: [table.local_language_id, table.pokemon_color_id], name: "pokemon_color_names_local_language_id_pokemon_color_id_pk"})
	}
});

export const experience = sqliteTable("experience", {
	growth_rate_id: integer("growth_rate_id").notNull().references(() => growth_rates.id),
	level: integer("level").notNull(),
	experience: integer("experience").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.growth_rate_id, table.level], name: "experience_growth_rate_id_level_pk"})
	}
});

export const berry_firmness_names = sqliteTable("berry_firmness_names", {
	berry_firmness_id: integer("berry_firmness_id").notNull().references(() => berry_firmness.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_berry_firmness_names_name: index("ix_berry_firmness_names_name").on(table.name),
		pk0: primaryKey({ columns: [table.berry_firmness_id, table.local_language_id], name: "berry_firmness_names_berry_firmness_id_local_language_id_pk"})
	}
});

export const conquest_move_range_prose = sqliteTable("conquest_move_range_prose", {
	conquest_move_range_id: integer("conquest_move_range_id").notNull().references(() => conquest_move_ranges.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }),
	description: text("description"),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.conquest_move_range_id, table.local_language_id], name: "conquest_move_range_prose_conquest_move_range_id_local_language_id_pk"})
	}
});

export const move_meta_category_prose = sqliteTable("move_meta_category_prose", {
	move_meta_category_id: integer("move_meta_category_id").notNull().references(() => move_meta_categories.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	description: text("description").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.local_language_id, table.move_meta_category_id], name: "move_meta_category_prose_local_language_id_move_meta_category_id_pk"})
	}
});

export const conquest_stat_names = sqliteTable("conquest_stat_names", {
	conquest_stat_id: integer("conquest_stat_id").notNull().references(() => conquest_stats.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_conquest_stat_names_name: index("ix_conquest_stat_names_name").on(table.name),
		pk0: primaryKey({ columns: [table.conquest_stat_id, table.local_language_id], name: "conquest_stat_names_conquest_stat_id_local_language_id_pk"})
	}
});

export const pokeathlon_stat_names = sqliteTable("pokeathlon_stat_names", {
	pokeathlon_stat_id: integer("pokeathlon_stat_id").notNull().references(() => pokeathlon_stats.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_pokeathlon_stat_names_name: index("ix_pokeathlon_stat_names_name").on(table.name),
		pk0: primaryKey({ columns: [table.local_language_id, table.pokeathlon_stat_id], name: "pokeathlon_stat_names_local_language_id_pokeathlon_stat_id_pk"})
	}
});

export const move_target_prose = sqliteTable("move_target_prose", {
	move_target_id: integer("move_target_id").notNull().references(() => move_targets.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }),
	description: text("description"),
},
(table) => {
	return {
		ix_move_target_prose_name: index("ix_move_target_prose_name").on(table.name),
		pk0: primaryKey({ columns: [table.local_language_id, table.move_target_id], name: "move_target_prose_local_language_id_move_target_id_pk"})
	}
});

export const conquest_warrior_stat_names = sqliteTable("conquest_warrior_stat_names", {
	warrior_stat_id: integer("warrior_stat_id").notNull().references(() => conquest_warrior_stats.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_conquest_warrior_stat_names_name: index("ix_conquest_warrior_stat_names_name").on(table.name),
		pk0: primaryKey({ columns: [table.local_language_id, table.warrior_stat_id], name: "conquest_warrior_stat_names_local_language_id_warrior_stat_id_pk"})
	}
});

export const item_fling_effect_prose = sqliteTable("item_fling_effect_prose", {
	item_fling_effect_id: integer("item_fling_effect_id").notNull().references(() => item_fling_effects.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	effect: text("effect").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.item_fling_effect_id, table.local_language_id], name: "item_fling_effect_prose_item_fling_effect_id_local_language_id_pk"})
	}
});

export const pokemon_habitat_names = sqliteTable("pokemon_habitat_names", {
	pokemon_habitat_id: integer("pokemon_habitat_id").notNull().references(() => pokemon_habitats.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_pokemon_habitat_names_name: index("ix_pokemon_habitat_names_name").on(table.name),
		pk0: primaryKey({ columns: [table.local_language_id, table.pokemon_habitat_id], name: "pokemon_habitat_names_local_language_id_pokemon_habitat_id_pk"})
	}
});

export const item_categories = sqliteTable("item_categories", {
	id: integer("id").primaryKey().notNull(),
	pocket_id: integer("pocket_id").notNull().references(() => item_pockets.id),
	identifier: text("identifier", { length: 79 }).notNull(),
});

export const pokemon_move_method_prose = sqliteTable("pokemon_move_method_prose", {
	pokemon_move_method_id: integer("pokemon_move_method_id").notNull().references(() => pokemon_move_methods.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }),
	description: text("description"),
},
(table) => {
	return {
		ix_pokemon_move_method_prose_name: index("ix_pokemon_move_method_prose_name").on(table.name),
		pk0: primaryKey({ columns: [table.local_language_id, table.pokemon_move_method_id], name: "pokemon_move_method_prose_local_language_id_pokemon_move_method_id_pk"})
	}
});

export const language_names = sqliteTable("language_names", {
	language_id: integer("language_id").notNull().references(() => languages.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_language_names_name: index("ix_language_names_name").on(table.name),
		pk0: primaryKey({ columns: [table.language_id, table.local_language_id], name: "language_names_language_id_local_language_id_pk"})
	}
});

export const item_pocket_names = sqliteTable("item_pocket_names", {
	item_pocket_id: integer("item_pocket_id").notNull().references(() => item_pockets.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_item_pocket_names_name: index("ix_item_pocket_names_name").on(table.name),
		pk0: primaryKey({ columns: [table.item_pocket_id, table.local_language_id], name: "item_pocket_names_item_pocket_id_local_language_id_pk"})
	}
});

export const move_meta_ailment_names = sqliteTable("move_meta_ailment_names", {
	move_meta_ailment_id: integer("move_meta_ailment_id").notNull().references(() => move_meta_ailments.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_move_meta_ailment_names_name: index("ix_move_meta_ailment_names_name").on(table.name),
		pk0: primaryKey({ columns: [table.local_language_id, table.move_meta_ailment_id], name: "move_meta_ailment_names_local_language_id_move_meta_ailment_id_pk"})
	}
});

export const encounter_condition_prose = sqliteTable("encounter_condition_prose", {
	encounter_condition_id: integer("encounter_condition_id").notNull().references(() => encounter_conditions.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_encounter_condition_prose_name: index("ix_encounter_condition_prose_name").on(table.name),
		pk0: primaryKey({ columns: [table.encounter_condition_id, table.local_language_id], name: "encounter_condition_prose_encounter_condition_id_local_language_id_pk"})
	}
});

export const egg_group_prose = sqliteTable("egg_group_prose", {
	egg_group_id: integer("egg_group_id").notNull().references(() => egg_groups.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_egg_group_prose_name: index("ix_egg_group_prose_name").on(table.name),
		pk0: primaryKey({ columns: [table.egg_group_id, table.local_language_id], name: "egg_group_prose_egg_group_id_local_language_id_pk"})
	}
});

export const growth_rate_prose = sqliteTable("growth_rate_prose", {
	growth_rate_id: integer("growth_rate_id").notNull().references(() => growth_rates.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_growth_rate_prose_name: index("ix_growth_rate_prose_name").on(table.name),
		pk0: primaryKey({ columns: [table.growth_rate_id, table.local_language_id], name: "growth_rate_prose_growth_rate_id_local_language_id_pk"})
	}
});

export const super_contest_effect_prose = sqliteTable("super_contest_effect_prose", {
	super_contest_effect_id: integer("super_contest_effect_id").notNull().references(() => super_contest_effects.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	flavor_text: text("flavor_text").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.local_language_id, table.super_contest_effect_id], name: "super_contest_effect_prose_local_language_id_super_contest_effect_id_pk"})
	}
});

export const stats = sqliteTable("stats", {
	id: integer("id").primaryKey().notNull(),
	damage_class_id: integer("damage_class_id").references(() => move_damage_classes.id),
	identifier: text("identifier", { length: 79 }).notNull(),
	is_battle_only: numeric("is_battle_only").notNull(),
	game_index: integer("game_index"),
});

export const conquest_warriors = sqliteTable("conquest_warriors", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
	gender_id: integer("gender_id").notNull().references(() => genders.id),
	archetype_id: integer("archetype_id").references(() => conquest_warrior_archetypes.id),
});

export const contest_type_names = sqliteTable("contest_type_names", {
	contest_type_id: integer("contest_type_id").notNull().references(() => contest_types.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }),
	flavor: text("flavor"),
	color: text("color"),
},
(table) => {
	return {
		ix_contest_type_names_name: index("ix_contest_type_names_name").on(table.name),
		pk0: primaryKey({ columns: [table.contest_type_id, table.local_language_id], name: "contest_type_names_contest_type_id_local_language_id_pk"})
	}
});

export const pal_park_area_names = sqliteTable("pal_park_area_names", {
	pal_park_area_id: integer("pal_park_area_id").notNull().references(() => pal_park_areas.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_pal_park_area_names_name: index("ix_pal_park_area_names_name").on(table.name),
		pk0: primaryKey({ columns: [table.local_language_id, table.pal_park_area_id], name: "pal_park_area_names_local_language_id_pal_park_area_id_pk"})
	}
});

export const item_flag_prose = sqliteTable("item_flag_prose", {
	item_flag_id: integer("item_flag_id").notNull().references(() => item_flags.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }),
	description: text("description"),
},
(table) => {
	return {
		ix_item_flag_prose_name: index("ix_item_flag_prose_name").on(table.name),
		pk0: primaryKey({ columns: [table.item_flag_id, table.local_language_id], name: "item_flag_prose_item_flag_id_local_language_id_pk"})
	}
});

export const conquest_move_displacement_prose = sqliteTable("conquest_move_displacement_prose", {
	move_displacement_id: integer("move_displacement_id").notNull().references(() => conquest_move_displacements.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }),
	short_effect: text("short_effect"),
	effect: text("effect"),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.local_language_id, table.move_displacement_id], name: "conquest_move_displacement_prose_local_language_id_move_displacement_id_pk"})
	}
});

export const move_battle_style_prose = sqliteTable("move_battle_style_prose", {
	move_battle_style_id: integer("move_battle_style_id").notNull().references(() => move_battle_styles.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_move_battle_style_prose_name: index("ix_move_battle_style_prose_name").on(table.name),
		pk0: primaryKey({ columns: [table.local_language_id, table.move_battle_style_id], name: "move_battle_style_prose_local_language_id_move_battle_style_id_pk"})
	}
});

export const move_flag_prose = sqliteTable("move_flag_prose", {
	move_flag_id: integer("move_flag_id").notNull().references(() => move_flags.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }),
	description: text("description"),
},
(table) => {
	return {
		ix_move_flag_prose_name: index("ix_move_flag_prose_name").on(table.name),
		pk0: primaryKey({ columns: [table.local_language_id, table.move_flag_id], name: "move_flag_prose_local_language_id_move_flag_id_pk"})
	}
});

export const conquest_warrior_skill_names = sqliteTable("conquest_warrior_skill_names", {
	skill_id: integer("skill_id").notNull().references(() => conquest_warrior_skills.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_conquest_warrior_skill_names_name: index("ix_conquest_warrior_skill_names_name").on(table.name),
		pk0: primaryKey({ columns: [table.local_language_id, table.skill_id], name: "conquest_warrior_skill_names_local_language_id_skill_id_pk"})
	}
});

export const conquest_move_effect_prose = sqliteTable("conquest_move_effect_prose", {
	conquest_move_effect_id: integer("conquest_move_effect_id").notNull().references(() => conquest_move_effects.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	short_effect: text("short_effect"),
	effect: text("effect"),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.conquest_move_effect_id, table.local_language_id], name: "conquest_move_effect_prose_conquest_move_effect_id_local_language_id_pk"})
	}
});

export const move_effect_prose = sqliteTable("move_effect_prose", {
	move_effect_id: integer("move_effect_id").notNull().references(() => move_effects.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	short_effect: text("short_effect"),
	effect: text("effect"),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.local_language_id, table.move_effect_id], name: "move_effect_prose_local_language_id_move_effect_id_pk"})
	}
});

export const region_names = sqliteTable("region_names", {
	region_id: integer("region_id").notNull().references(() => regions.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_region_names_name: index("ix_region_names_name").on(table.name),
		pk0: primaryKey({ columns: [table.local_language_id, table.region_id], name: "region_names_local_language_id_region_id_pk"})
	}
});

export const conquest_episode_names = sqliteTable("conquest_episode_names", {
	episode_id: integer("episode_id").notNull().references(() => conquest_episodes.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_conquest_episode_names_name: index("ix_conquest_episode_names_name").on(table.name),
		pk0: primaryKey({ columns: [table.episode_id, table.local_language_id], name: "conquest_episode_names_episode_id_local_language_id_pk"})
	}
});

export const locations = sqliteTable("locations", {
	id: integer("id").primaryKey().notNull(),
	region_id: integer("region_id").references(() => regions.id),
	identifier: text("identifier", { length: 79 }).notNull(),
});

export const generations = sqliteTable("generations", {
	id: integer("id").primaryKey().notNull(),
	main_region_id: integer("main_region_id").notNull().references(() => regions.id),
	identifier: text("identifier", { length: 79 }).notNull(),
});

export const evolution_trigger_prose = sqliteTable("evolution_trigger_prose", {
	evolution_trigger_id: integer("evolution_trigger_id").notNull().references(() => evolution_triggers.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_evolution_trigger_prose_name: index("ix_evolution_trigger_prose_name").on(table.name),
		pk0: primaryKey({ columns: [table.evolution_trigger_id, table.local_language_id], name: "evolution_trigger_prose_evolution_trigger_id_local_language_id_pk"})
	}
});

export const contest_effect_prose = sqliteTable("contest_effect_prose", {
	contest_effect_id: integer("contest_effect_id").notNull().references(() => contest_effects.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	flavor_text: text("flavor_text"),
	effect: text("effect"),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.contest_effect_id, table.local_language_id], name: "contest_effect_prose_contest_effect_id_local_language_id_pk"})
	}
});

export const pokedexes = sqliteTable("pokedexes", {
	id: integer("id").primaryKey().notNull(),
	region_id: integer("region_id").references(() => regions.id),
	identifier: text("identifier", { length: 79 }).notNull(),
	is_main_series: numeric("is_main_series").notNull(),
});

export const encounter_condition_values = sqliteTable("encounter_condition_values", {
	id: integer("id").primaryKey().notNull(),
	encounter_condition_id: integer("encounter_condition_id").notNull().references(() => encounter_conditions.id),
	identifier: text("identifier", { length: 79 }).notNull(),
	is_default: numeric("is_default").notNull(),
});

export const pokemon_shape_prose = sqliteTable("pokemon_shape_prose", {
	pokemon_shape_id: integer("pokemon_shape_id").notNull().references(() => pokemon_shapes.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }),
	awesome_name: text("awesome_name", { length: 79 }),
	description: text("description"),
},
(table) => {
	return {
		ix_pokemon_shape_prose_name: index("ix_pokemon_shape_prose_name").on(table.name),
		pk0: primaryKey({ columns: [table.local_language_id, table.pokemon_shape_id], name: "pokemon_shape_prose_local_language_id_pokemon_shape_id_pk"})
	}
});

export const encounter_method_prose = sqliteTable("encounter_method_prose", {
	encounter_method_id: integer("encounter_method_id").notNull().references(() => encounter_methods.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_encounter_method_prose_name: index("ix_encounter_method_prose_name").on(table.name),
		pk0: primaryKey({ columns: [table.encounter_method_id, table.local_language_id], name: "encounter_method_prose_encounter_method_id_local_language_id_pk"})
	}
});

export const generation_names = sqliteTable("generation_names", {
	generation_id: integer("generation_id").notNull().references(() => generations.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_generation_names_name: index("ix_generation_names_name").on(table.name),
		pk0: primaryKey({ columns: [table.generation_id, table.local_language_id], name: "generation_names_generation_id_local_language_id_pk"})
	}
});

export const conquest_episode_warriors = sqliteTable("conquest_episode_warriors", {
	episode_id: integer("episode_id").notNull().references(() => conquest_episodes.id),
	warrior_id: integer("warrior_id").notNull().references(() => conquest_warriors.id),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.episode_id, table.warrior_id], name: "conquest_episode_warriors_episode_id_warrior_id_pk"})
	}
});

export const abilities = sqliteTable("abilities", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
	generation_id: integer("generation_id").notNull().references(() => generations.id),
	is_main_series: numeric("is_main_series").notNull(),
},
(table) => {
	return {
		ix_abilities_is_main_series: index("ix_abilities_is_main_series").on(table.is_main_series),
	}
});

export const location_areas = sqliteTable("location_areas", {
	id: integer("id").primaryKey().notNull(),
	location_id: integer("location_id").notNull().references(() => locations.id),
	game_index: integer("game_index").notNull(),
	identifier: text("identifier", { length: 79 }),
});

export const stat_names = sqliteTable("stat_names", {
	stat_id: integer("stat_id").notNull().references(() => stats.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_stat_names_name: index("ix_stat_names_name").on(table.name),
		pk0: primaryKey({ columns: [table.local_language_id, table.stat_id], name: "stat_names_local_language_id_stat_id_pk"})
	}
});

export const items = sqliteTable("items", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
	category_id: integer("category_id").notNull().references(() => item_categories.id),
	cost: integer("cost").notNull(),
	fling_power: integer("fling_power"),
	fling_effect_id: integer("fling_effect_id").references(() => item_fling_effects.id),
});

export const item_category_prose = sqliteTable("item_category_prose", {
	item_category_id: integer("item_category_id").notNull().references(() => item_categories.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_item_category_prose_name: index("ix_item_category_prose_name").on(table.name),
		pk0: primaryKey({ columns: [table.item_category_id, table.local_language_id], name: "item_category_prose_item_category_id_local_language_id_pk"})
	}
});

export const version_groups = sqliteTable("version_groups", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
	generation_id: integer("generation_id").notNull().references(() => generations.id),
	order: integer("order"),
});

export const conquest_warrior_names = sqliteTable("conquest_warrior_names", {
	warrior_id: integer("warrior_id").notNull().references(() => conquest_warriors.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_conquest_warrior_names_name: index("ix_conquest_warrior_names_name").on(table.name),
		pk0: primaryKey({ columns: [table.local_language_id, table.warrior_id], name: "conquest_warrior_names_local_language_id_warrior_id_pk"})
	}
});

export const natures = sqliteTable("natures", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
	decreased_stat_id: integer("decreased_stat_id").notNull().references(() => stats.id),
	increased_stat_id: integer("increased_stat_id").notNull().references(() => stats.id),
	hates_flavor_id: integer("hates_flavor_id").notNull().references(() => contest_types.id),
	likes_flavor_id: integer("likes_flavor_id").notNull().references(() => contest_types.id),
	game_index: integer("game_index").notNull(),
});

export const pokedex_prose = sqliteTable("pokedex_prose", {
	pokedex_id: integer("pokedex_id").notNull().references(() => pokedexes.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }),
	description: text("description"),
},
(table) => {
	return {
		ix_pokedex_prose_name: index("ix_pokedex_prose_name").on(table.name),
		pk0: primaryKey({ columns: [table.local_language_id, table.pokedex_id], name: "pokedex_prose_local_language_id_pokedex_id_pk"})
	}
});

export const characteristics = sqliteTable("characteristics", {
	id: integer("id").primaryKey().notNull(),
	stat_id: integer("stat_id").notNull().references(() => stats.id),
	gene_mod_5: integer("gene_mod_5").notNull(),
},
(table) => {
	return {
		ix_characteristics_gene_mod_5: index("ix_characteristics_gene_mod_5").on(table.gene_mod_5),
	}
});

export const location_game_indices = sqliteTable("location_game_indices", {
	location_id: integer("location_id").notNull().references(() => locations.id),
	generation_id: integer("generation_id").notNull().references(() => generations.id),
	game_index: integer("game_index").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.game_index, table.generation_id, table.location_id], name: "location_game_indices_game_index_generation_id_location_id_pk"})
	}
});

export const conquest_warrior_ranks = sqliteTable("conquest_warrior_ranks", {
	id: integer("id").primaryKey().notNull(),
	warrior_id: integer("warrior_id").notNull().references(() => conquest_warriors.id),
	rank: integer("rank").notNull(),
	skill_id: integer("skill_id").notNull().references(() => conquest_warrior_skills.id),
});

export const encounter_condition_value_prose = sqliteTable("encounter_condition_value_prose", {
	encounter_condition_value_id: integer("encounter_condition_value_id").notNull().references(() => encounter_condition_values.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_encounter_condition_value_prose_name: index("ix_encounter_condition_value_prose_name").on(table.name),
		pk0: primaryKey({ columns: [table.encounter_condition_value_id, table.local_language_id], name: "encounter_condition_value_prose_encounter_condition_value_id_local_language_id_pk"})
	}
});

export const types = sqliteTable("types", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
	generation_id: integer("generation_id").notNull().references(() => generations.id),
	damage_class_id: integer("damage_class_id").references(() => move_damage_classes.id),
});

export const location_names = sqliteTable("location_names", {
	location_id: integer("location_id").notNull().references(() => locations.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_location_names_name: index("ix_location_names_name").on(table.name),
		pk0: primaryKey({ columns: [table.local_language_id, table.location_id], name: "location_names_local_language_id_location_id_pk"})
	}
});

export const conquest_warrior_transformation = sqliteTable("conquest_warrior_transformation", {
	transformed_warrior_rank_id: integer("transformed_warrior_rank_id").primaryKey().notNull().references(() => conquest_warrior_ranks.id),
	is_automatic: numeric("is_automatic").notNull(),
	required_link: integer("required_link"),
	completed_episode_id: integer("completed_episode_id").references(() => conquest_episodes.id),
	current_episode_id: integer("current_episode_id").references(() => conquest_episodes.id),
	distant_warrior_id: integer("distant_warrior_id").references(() => conquest_warriors.id),
	female_warlord_count: integer("female_warlord_count"),
	pokemon_count: integer("pokemon_count"),
	collection_type_id: integer("collection_type_id").references(() => types.id),
	warrior_count: integer("warrior_count"),
});

export const nature_battle_style_preferences = sqliteTable("nature_battle_style_preferences", {
	nature_id: integer("nature_id").notNull().references(() => natures.id),
	move_battle_style_id: integer("move_battle_style_id").notNull().references(() => move_battle_styles.id),
	low_hp_preference: integer("low_hp_preference").notNull(),
	high_hp_preference: integer("high_hp_preference").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.move_battle_style_id, table.nature_id], name: "nature_battle_style_preferences_move_battle_style_id_nature_id_pk"})
	}
});

export const ability_changelog = sqliteTable("ability_changelog", {
	id: integer("id").primaryKey().notNull(),
	ability_id: integer("ability_id").notNull().references(() => abilities.id),
	changed_in_version_group_id: integer("changed_in_version_group_id").notNull().references(() => version_groups.id),
});

export const location_area_prose = sqliteTable("location_area_prose", {
	location_area_id: integer("location_area_id").notNull().references(() => location_areas.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }),
},
(table) => {
	return {
		ix_location_area_prose_name: index("ix_location_area_prose_name").on(table.name),
		pk0: primaryKey({ columns: [table.local_language_id, table.location_area_id], name: "location_area_prose_local_language_id_location_area_id_pk"})
	}
});

export const version_group_pokemon_move_methods = sqliteTable("version_group_pokemon_move_methods", {
	version_group_id: integer("version_group_id").notNull().references(() => version_groups.id),
	pokemon_move_method_id: integer("pokemon_move_method_id").notNull().references(() => pokemon_move_methods.id),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.pokemon_move_method_id, table.version_group_id], name: "version_group_pokemon_move_methods_pokemon_move_method_id_version_group_id_pk"})
	}
});

export const ability_flavor_text = sqliteTable("ability_flavor_text", {
	ability_id: integer("ability_id").notNull().references(() => abilities.id),
	version_group_id: integer("version_group_id").notNull().references(() => version_groups.id),
	language_id: integer("language_id").notNull().references(() => languages.id),
	flavor_text: text("flavor_text").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.ability_id, table.language_id, table.version_group_id], name: "ability_flavor_text_ability_id_language_id_version_group_id_pk"})
	}
});

export const item_flavor_summaries = sqliteTable("item_flavor_summaries", {
	item_id: integer("item_id").notNull().references(() => items.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	flavor_summary: text("flavor_summary"),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.item_id, table.local_language_id], name: "item_flavor_summaries_item_id_local_language_id_pk"})
	}
});

export const evolution_chains = sqliteTable("evolution_chains", {
	id: integer("id").primaryKey().notNull(),
	baby_trigger_item_id: integer("baby_trigger_item_id").references(() => items.id),
});

export const ability_prose = sqliteTable("ability_prose", {
	ability_id: integer("ability_id").notNull().references(() => abilities.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	short_effect: text("short_effect"),
	effect: text("effect"),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.ability_id, table.local_language_id], name: "ability_prose_ability_id_local_language_id_pk"})
	}
});

export const type_game_indices = sqliteTable("type_game_indices", {
	type_id: integer("type_id").notNull().references(() => types.id),
	generation_id: integer("generation_id").notNull().references(() => generations.id),
	game_index: integer("game_index").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.generation_id, table.type_id], name: "type_game_indices_generation_id_type_id_pk"})
	}
});

export const move_effect_changelog = sqliteTable("move_effect_changelog", {
	id: integer("id").primaryKey().notNull(),
	effect_id: integer("effect_id").notNull().references(() => move_effects.id),
	changed_in_version_group_id: integer("changed_in_version_group_id").notNull().references(() => version_groups.id),
});

export const nature_names = sqliteTable("nature_names", {
	nature_id: integer("nature_id").notNull().references(() => natures.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_nature_names_name: index("ix_nature_names_name").on(table.name),
		pk0: primaryKey({ columns: [table.local_language_id, table.nature_id], name: "nature_names_local_language_id_nature_id_pk"})
	}
});

export const conquest_warrior_rank_stat_map = sqliteTable("conquest_warrior_rank_stat_map", {
	warrior_rank_id: integer("warrior_rank_id").notNull().references(() => conquest_warrior_ranks.id),
	warrior_stat_id: integer("warrior_stat_id").notNull().references(() => conquest_warrior_stats.id),
	base_stat: integer("base_stat").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.warrior_rank_id, table.warrior_stat_id], name: "conquest_warrior_rank_stat_map_warrior_rank_id_warrior_stat_id_pk"})
	}
});

export const conquest_kingdoms = sqliteTable("conquest_kingdoms", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
	type_id: integer("type_id").notNull().references(() => types.id),
});

export const version_group_regions = sqliteTable("version_group_regions", {
	version_group_id: integer("version_group_id").notNull().references(() => version_groups.id),
	region_id: integer("region_id").notNull().references(() => regions.id),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.region_id, table.version_group_id], name: "version_group_regions_region_id_version_group_id_pk"})
	}
});

export const conquest_warrior_specialties = sqliteTable("conquest_warrior_specialties", {
	warrior_id: integer("warrior_id").notNull().references(() => conquest_warriors.id),
	type_id: integer("type_id").notNull().references(() => types.id),
	slot: integer("slot").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.slot, table.type_id, table.warrior_id], name: "conquest_warrior_specialties_slot_type_id_warrior_id_pk"})
	}
});

export const item_flag_map = sqliteTable("item_flag_map", {
	item_id: integer("item_id").notNull().references(() => items.id),
	item_flag_id: integer("item_flag_id").notNull().references(() => item_flags.id),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.item_flag_id, table.item_id], name: "item_flag_map_item_flag_id_item_id_pk"})
	}
});

export const item_prose = sqliteTable("item_prose", {
	item_id: integer("item_id").notNull().references(() => items.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	short_effect: text("short_effect"),
	effect: text("effect"),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.item_id, table.local_language_id], name: "item_prose_item_id_local_language_id_pk"})
	}
});

export const nature_pokeathlon_stats = sqliteTable("nature_pokeathlon_stats", {
	nature_id: integer("nature_id").notNull().references(() => natures.id),
	pokeathlon_stat_id: integer("pokeathlon_stat_id").notNull().references(() => pokeathlon_stats.id),
	max_change: integer("max_change").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.nature_id, table.pokeathlon_stat_id], name: "nature_pokeathlon_stats_nature_id_pokeathlon_stat_id_pk"})
	}
});

export const versions = sqliteTable("versions", {
	id: integer("id").primaryKey().notNull(),
	version_group_id: integer("version_group_id").notNull().references(() => version_groups.id),
	identifier: text("identifier", { length: 79 }).notNull(),
});

export const berries = sqliteTable("berries", {
	id: integer("id").primaryKey().notNull(),
	item_id: integer("item_id").notNull().references(() => items.id),
	firmness_id: integer("firmness_id").notNull().references(() => berry_firmness.id),
	natural_gift_power: integer("natural_gift_power"),
	natural_gift_type_id: integer("natural_gift_type_id").references(() => types.id),
	size: integer("size").notNull(),
	max_harvest: integer("max_harvest").notNull(),
	growth_time: integer("growth_time").notNull(),
	soil_dryness: integer("soil_dryness").notNull(),
	smoothness: integer("smoothness").notNull(),
});

export const moves = sqliteTable("moves", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
	generation_id: integer("generation_id").notNull().references(() => generations.id),
	type_id: integer("type_id").notNull().references(() => types.id),
	power: integer("power"),
	pp: integer("pp"),
	accuracy: integer("accuracy"),
	priority: integer("priority").notNull(),
	target_id: integer("target_id").notNull().references(() => move_targets.id),
	damage_class_id: integer("damage_class_id").notNull().references(() => move_damage_classes.id),
	effect_id: integer("effect_id").notNull().references(() => move_effects.id),
	effect_chance: integer("effect_chance"),
	contest_type_id: integer("contest_type_id").references(() => contest_types.id),
	contest_effect_id: integer("contest_effect_id").references(() => contest_effects.id),
	super_contest_effect_id: integer("super_contest_effect_id").references(() => super_contest_effects.id),
});

export const ability_names = sqliteTable("ability_names", {
	ability_id: integer("ability_id").notNull().references(() => abilities.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_ability_names_name: index("ix_ability_names_name").on(table.name),
		pk0: primaryKey({ columns: [table.ability_id, table.local_language_id], name: "ability_names_ability_id_local_language_id_pk"})
	}
});

export const encounter_slots = sqliteTable("encounter_slots", {
	id: integer("id").primaryKey().notNull(),
	version_group_id: integer("version_group_id").notNull().references(() => version_groups.id),
	encounter_method_id: integer("encounter_method_id").notNull().references(() => encounter_methods.id),
	slot: integer("slot"),
	rarity: integer("rarity"),
});

export const item_game_indices = sqliteTable("item_game_indices", {
	item_id: integer("item_id").notNull().references(() => items.id),
	generation_id: integer("generation_id").notNull().references(() => generations.id),
	game_index: integer("game_index").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.generation_id, table.item_id], name: "item_game_indices_generation_id_item_id_pk"})
	}
});

export const type_names = sqliteTable("type_names", {
	type_id: integer("type_id").notNull().references(() => types.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_type_names_name: index("ix_type_names_name").on(table.name),
		pk0: primaryKey({ columns: [table.local_language_id, table.type_id], name: "type_names_local_language_id_type_id_pk"})
	}
});

export const type_efficacy = sqliteTable("type_efficacy", {
	damage_type_id: integer("damage_type_id").notNull().references(() => types.id),
	target_type_id: integer("target_type_id").notNull().references(() => types.id),
	damage_factor: integer("damage_factor").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.damage_type_id, table.target_type_id], name: "type_efficacy_damage_type_id_target_type_id_pk"})
	}
});

export const pokedex_version_groups = sqliteTable("pokedex_version_groups", {
	pokedex_id: integer("pokedex_id").notNull().references(() => pokedexes.id),
	version_group_id: integer("version_group_id").notNull().references(() => version_groups.id),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.pokedex_id, table.version_group_id], name: "pokedex_version_groups_pokedex_id_version_group_id_pk"})
	}
});

export const item_flavor_text = sqliteTable("item_flavor_text", {
	item_id: integer("item_id").notNull().references(() => items.id),
	version_group_id: integer("version_group_id").notNull().references(() => version_groups.id),
	language_id: integer("language_id").notNull().references(() => languages.id),
	flavor_text: text("flavor_text").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.item_id, table.language_id, table.version_group_id], name: "item_flavor_text_item_id_language_id_version_group_id_pk"})
	}
});

export const item_names = sqliteTable("item_names", {
	item_id: integer("item_id").notNull().references(() => items.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_item_names_name: index("ix_item_names_name").on(table.name),
		pk0: primaryKey({ columns: [table.item_id, table.local_language_id], name: "item_names_item_id_local_language_id_pk"})
	}
});

export const characteristic_text = sqliteTable("characteristic_text", {
	characteristic_id: integer("characteristic_id").notNull().references(() => characteristics.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	message: text("message", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_characteristic_text_message: index("ix_characteristic_text_message").on(table.message),
		pk0: primaryKey({ columns: [table.characteristic_id, table.local_language_id], name: "characteristic_text_characteristic_id_local_language_id_pk"})
	}
});

export const machines = sqliteTable("machines", {
	machine_number: integer("machine_number").notNull(),
	version_group_id: integer("version_group_id").notNull().references(() => version_groups.id),
	item_id: integer("item_id").notNull().references(() => items.id),
	move_id: integer("move_id").notNull().references(() => moves.id),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.machine_number, table.version_group_id], name: "machines_machine_number_version_group_id_pk"})
	}
});

export const location_area_encounter_rates = sqliteTable("location_area_encounter_rates", {
	location_area_id: integer("location_area_id").notNull().references(() => location_areas.id),
	encounter_method_id: integer("encounter_method_id").notNull().references(() => encounter_methods.id),
	version_id: integer("version_id").notNull().references(() => versions.id),
	rate: integer("rate"),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.encounter_method_id, table.location_area_id, table.version_id], name: "location_area_encounter_rates_encounter_method_id_location_area_id_version_id_pk"})
	}
});

export const pokemon_species = sqliteTable("pokemon_species", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
	generation_id: integer("generation_id").references(() => generations.id),
	evolves_from_species_id: integer("evolves_from_species_id"),
	evolution_chain_id: integer("evolution_chain_id").references(() => evolution_chains.id),
	color_id: integer("color_id").notNull().references(() => pokemon_colors.id),
	shape_id: integer("shape_id").notNull().references(() => pokemon_shapes.id),
	habitat_id: integer("habitat_id").references(() => pokemon_habitats.id),
	gender_rate: integer("gender_rate").notNull(),
	capture_rate: integer("capture_rate").notNull(),
	base_happiness: integer("base_happiness").notNull(),
	is_baby: numeric("is_baby").notNull(),
	hatch_counter: integer("hatch_counter").notNull(),
	has_gender_differences: numeric("has_gender_differences").notNull(),
	growth_rate_id: integer("growth_rate_id").notNull().references(() => growth_rates.id),
	forms_switchable: numeric("forms_switchable").notNull(),
	order: integer("order").notNull(),
	conquest_order: integer("conquest_order"),
},
(table) => {
	return {
		ix_pokemon_species_conquest_order: index("ix_pokemon_species_conquest_order").on(table.conquest_order),
		ix_pokemon_species_order: index("ix_pokemon_species_order").on(table.order),
		pokemon_species_evolves_from_species_id_pokemon_species_id_fk: foreignKey(() => ({
			columns: [table.evolves_from_species_id],
			foreignColumns: [table.id],
			name: "pokemon_species_evolves_from_species_id_pokemon_species_id_fk"
		})),
	}
});

export const berry_flavors = sqliteTable("berry_flavors", {
	berry_id: integer("berry_id").notNull().references(() => berries.id),
	contest_type_id: integer("contest_type_id").notNull().references(() => contest_types.id),
	flavor: integer("flavor").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.berry_id, table.contest_type_id], name: "berry_flavors_berry_id_contest_type_id_pk"})
	}
});

export const conquest_move_data = sqliteTable("conquest_move_data", {
	move_id: integer("move_id").primaryKey().notNull().references(() => moves.id),
	power: integer("power"),
	accuracy: integer("accuracy"),
	effect_chance: integer("effect_chance"),
	effect_id: integer("effect_id").notNull().references(() => conquest_move_effects.id),
	range_id: integer("range_id").notNull().references(() => conquest_move_ranges.id),
	displacement_id: integer("displacement_id").references(() => conquest_move_displacements.id),
});

export const conquest_transformation_warriors = sqliteTable("conquest_transformation_warriors", {
	transformation_id: integer("transformation_id").notNull().references(() => conquest_warrior_transformation.transformed_warrior_rank_id),
	present_warrior_id: integer("present_warrior_id").notNull().references(() => conquest_warriors.id),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.present_warrior_id, table.transformation_id], name: "conquest_transformation_warriors_present_warrior_id_transformation_id_pk"})
	}
});

export const move_flavor_summaries = sqliteTable("move_flavor_summaries", {
	move_id: integer("move_id").notNull().references(() => moves.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	flavor_summary: text("flavor_summary"),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.local_language_id, table.move_id], name: "move_flavor_summaries_local_language_id_move_id_pk"})
	}
});

export const move_meta = sqliteTable("move_meta", {
	move_id: integer("move_id").primaryKey().notNull().references(() => moves.id),
	meta_category_id: integer("meta_category_id").notNull().references(() => move_meta_categories.id),
	meta_ailment_id: integer("meta_ailment_id").notNull().references(() => move_meta_ailments.id),
	min_hits: integer("min_hits"),
	max_hits: integer("max_hits"),
	min_turns: integer("min_turns"),
	max_turns: integer("max_turns"),
	drain: integer("drain").notNull(),
	healing: integer("healing").notNull(),
	crit_rate: integer("crit_rate").notNull(),
	ailment_chance: integer("ailment_chance").notNull(),
	flinch_chance: integer("flinch_chance").notNull(),
	stat_chance: integer("stat_chance").notNull(),
},
(table) => {
	return {
		ix_move_meta_stat_chance: index("ix_move_meta_stat_chance").on(table.stat_chance),
		ix_move_meta_crit_rate: index("ix_move_meta_crit_rate").on(table.crit_rate),
		ix_move_meta_min_hits: index("ix_move_meta_min_hits").on(table.min_hits),
		ix_move_meta_max_turns: index("ix_move_meta_max_turns").on(table.max_turns),
		ix_move_meta_ailment_chance: index("ix_move_meta_ailment_chance").on(table.ailment_chance),
		ix_move_meta_drain: index("ix_move_meta_drain").on(table.drain),
		ix_move_meta_max_hits: index("ix_move_meta_max_hits").on(table.max_hits),
		ix_move_meta_flinch_chance: index("ix_move_meta_flinch_chance").on(table.flinch_chance),
		ix_move_meta_healing: index("ix_move_meta_healing").on(table.healing),
		ix_move_meta_min_turns: index("ix_move_meta_min_turns").on(table.min_turns),
	}
});

export const version_names = sqliteTable("version_names", {
	version_id: integer("version_id").notNull().references(() => versions.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_version_names_name: index("ix_version_names_name").on(table.name),
		pk0: primaryKey({ columns: [table.local_language_id, table.version_id], name: "version_names_local_language_id_version_id_pk"})
	}
});

export const move_meta_stat_changes = sqliteTable("move_meta_stat_changes", {
	move_id: integer("move_id").notNull().references(() => moves.id),
	stat_id: integer("stat_id").notNull().references(() => stats.id),
	change: integer("change").notNull(),
},
(table) => {
	return {
		ix_move_meta_stat_changes_change: index("ix_move_meta_stat_changes_change").on(table.change),
		pk0: primaryKey({ columns: [table.move_id, table.stat_id], name: "move_meta_stat_changes_move_id_stat_id_pk"})
	}
});

export const move_changelog = sqliteTable("move_changelog", {
	move_id: integer("move_id").notNull().references(() => moves.id),
	changed_in_version_group_id: integer("changed_in_version_group_id").notNull().references(() => version_groups.id),
	type_id: integer("type_id").references(() => types.id),
	power: integer("power"),
	pp: integer("pp"),
	accuracy: integer("accuracy"),
	priority: integer("priority"),
	target_id: integer("target_id").references(() => move_targets.id),
	effect_id: integer("effect_id").references(() => move_effects.id),
	effect_chance: integer("effect_chance"),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.changed_in_version_group_id, table.move_id], name: "move_changelog_changed_in_version_group_id_move_id_pk"})
	}
});

export const move_names = sqliteTable("move_names", {
	move_id: integer("move_id").notNull().references(() => moves.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_move_names_name: index("ix_move_names_name").on(table.name),
		pk0: primaryKey({ columns: [table.local_language_id, table.move_id], name: "move_names_local_language_id_move_id_pk"})
	}
});

export const move_flag_map = sqliteTable("move_flag_map", {
	move_id: integer("move_id").notNull().references(() => moves.id),
	move_flag_id: integer("move_flag_id").notNull().references(() => move_flags.id),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.move_flag_id, table.move_id], name: "move_flag_map_move_flag_id_move_id_pk"})
	}
});

export const move_flavor_text = sqliteTable("move_flavor_text", {
	move_id: integer("move_id").notNull().references(() => moves.id),
	version_group_id: integer("version_group_id").notNull().references(() => version_groups.id),
	language_id: integer("language_id").notNull().references(() => languages.id),
	flavor_text: text("flavor_text").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.language_id, table.move_id, table.version_group_id], name: "move_flavor_text_language_id_move_id_version_group_id_pk"})
	}
});

export const contest_combos = sqliteTable("contest_combos", {
	first_move_id: integer("first_move_id").notNull().references(() => moves.id),
	second_move_id: integer("second_move_id").notNull().references(() => moves.id),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.first_move_id, table.second_move_id], name: "contest_combos_first_move_id_second_move_id_pk"})
	}
});

export const super_contest_combos = sqliteTable("super_contest_combos", {
	first_move_id: integer("first_move_id").notNull().references(() => moves.id),
	second_move_id: integer("second_move_id").notNull().references(() => moves.id),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.first_move_id, table.second_move_id], name: "super_contest_combos_first_move_id_second_move_id_pk"})
	}
});

export const ability_changelog_prose = sqliteTable("ability_changelog_prose", {
	ability_changelog_id: integer("ability_changelog_id").notNull().references(() => ability_changelog.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	effect: text("effect").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.ability_changelog_id, table.local_language_id], name: "ability_changelog_prose_ability_changelog_id_local_language_id_pk"})
	}
});

export const conquest_kingdom_names = sqliteTable("conquest_kingdom_names", {
	kingdom_id: integer("kingdom_id").notNull().references(() => conquest_kingdoms.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }).notNull(),
},
(table) => {
	return {
		ix_conquest_kingdom_names_name: index("ix_conquest_kingdom_names_name").on(table.name),
		pk0: primaryKey({ columns: [table.kingdom_id, table.local_language_id], name: "conquest_kingdom_names_kingdom_id_local_language_id_pk"})
	}
});

export const move_effect_changelog_prose = sqliteTable("move_effect_changelog_prose", {
	move_effect_changelog_id: integer("move_effect_changelog_id").notNull().references(() => move_effect_changelog.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	effect: text("effect").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.local_language_id, table.move_effect_changelog_id], name: "move_effect_changelog_prose_local_language_id_move_effect_changelog_id_pk"})
	}
});

export const pokemon_species_flavor_summaries = sqliteTable("pokemon_species_flavor_summaries", {
	pokemon_species_id: integer("pokemon_species_id").notNull().references(() => pokemon_species.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	flavor_summary: text("flavor_summary"),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.local_language_id, table.pokemon_species_id], name: "pokemon_species_flavor_summaries_local_language_id_pokemon_species_id_pk"})
	}
});

export const conquest_max_links = sqliteTable("conquest_max_links", {
	warrior_rank_id: integer("warrior_rank_id").notNull().references(() => conquest_warrior_ranks.id),
	pokemon_species_id: integer("pokemon_species_id").notNull().references(() => pokemon_species.id),
	max_link: integer("max_link").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.pokemon_species_id, table.warrior_rank_id], name: "conquest_max_links_pokemon_species_id_warrior_rank_id_pk"})
	}
});

export const conquest_transformation_pokemon = sqliteTable("conquest_transformation_pokemon", {
	transformation_id: integer("transformation_id").notNull().references(() => conquest_warrior_transformation.transformed_warrior_rank_id),
	pokemon_species_id: integer("pokemon_species_id").notNull().references(() => pokemon_species.id),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.pokemon_species_id, table.transformation_id], name: "conquest_transformation_pokemon_pokemon_species_id_transformation_id_pk"})
	}
});

export const conquest_pokemon_moves = sqliteTable("conquest_pokemon_moves", {
	pokemon_species_id: integer("pokemon_species_id").primaryKey().notNull().references(() => pokemon_species.id),
	move_id: integer("move_id").notNull().references(() => moves.id),
});

export const conquest_pokemon_abilities = sqliteTable("conquest_pokemon_abilities", {
	pokemon_species_id: integer("pokemon_species_id").notNull().references(() => pokemon_species.id),
	slot: integer("slot").notNull(),
	ability_id: integer("ability_id").notNull().references(() => abilities.id),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.pokemon_species_id, table.slot], name: "conquest_pokemon_abilities_pokemon_species_id_slot_pk"})
	}
});

export const pokemon = sqliteTable("pokemon", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
	species_id: integer("species_id").references(() => pokemon_species.id),
	height: integer("height").notNull(),
	weight: integer("weight").notNull(),
	base_experience: integer("base_experience").notNull(),
	order: integer("order").notNull(),
	is_default: numeric("is_default").notNull(),
},
(table) => {
	return {
		ix_pokemon_is_default: index("ix_pokemon_is_default").on(table.is_default),
		ix_pokemon_order: index("ix_pokemon_order").on(table.order),
	}
});

export const pal_park = sqliteTable("pal_park", {
	species_id: integer("species_id").primaryKey().notNull().references(() => pokemon_species.id),
	area_id: integer("area_id").notNull().references(() => pal_park_areas.id),
	base_score: integer("base_score").notNull(),
	rate: integer("rate").notNull(),
});

export const pokemon_species_prose = sqliteTable("pokemon_species_prose", {
	pokemon_species_id: integer("pokemon_species_id").notNull().references(() => pokemon_species.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	form_description: text("form_description"),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.local_language_id, table.pokemon_species_id], name: "pokemon_species_prose_local_language_id_pokemon_species_id_pk"})
	}
});

export const conquest_pokemon_stats = sqliteTable("conquest_pokemon_stats", {
	pokemon_species_id: integer("pokemon_species_id").notNull().references(() => pokemon_species.id),
	conquest_stat_id: integer("conquest_stat_id").notNull().references(() => conquest_stats.id),
	base_stat: integer("base_stat").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.conquest_stat_id, table.pokemon_species_id], name: "conquest_pokemon_stats_conquest_stat_id_pokemon_species_id_pk"})
	}
});

export const pokemon_species_flavor_text = sqliteTable("pokemon_species_flavor_text", {
	species_id: integer("species_id").notNull().references(() => pokemon_species.id),
	version_id: integer("version_id").notNull().references(() => versions.id),
	language_id: integer("language_id").notNull().references(() => languages.id),
	flavor_text: text("flavor_text").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.language_id, table.species_id, table.version_id], name: "pokemon_species_flavor_text_language_id_species_id_version_id_pk"})
	}
});

export const pokemon_evolution = sqliteTable("pokemon_evolution", {
	id: integer("id").primaryKey().notNull(),
	evolved_species_id: integer("evolved_species_id").notNull().references(() => pokemon_species.id),
	evolution_trigger_id: integer("evolution_trigger_id").notNull().references(() => evolution_triggers.id),
	trigger_item_id: integer("trigger_item_id").references(() => items.id),
	minimum_level: integer("minimum_level"),
	gender_id: integer("gender_id").references(() => genders.id),
	location_id: integer("location_id").references(() => locations.id),
	held_item_id: integer("held_item_id").references(() => items.id),
	time_of_day: text("time_of_day", { length: 5 }),
	known_move_id: integer("known_move_id").references(() => moves.id),
	known_move_type_id: integer("known_move_type_id").references(() => types.id),
	minimum_happiness: integer("minimum_happiness"),
	minimum_beauty: integer("minimum_beauty"),
	minimum_affection: integer("minimum_affection"),
	relative_physical_stats: integer("relative_physical_stats"),
	party_species_id: integer("party_species_id").references(() => pokemon_species.id),
	party_type_id: integer("party_type_id").references(() => types.id),
	trade_species_id: integer("trade_species_id").references(() => pokemon_species.id),
	needs_overworld_rain: numeric("needs_overworld_rain").notNull(),
	turn_upside_down: numeric("turn_upside_down").notNull(),
});

export const pokemon_species_names = sqliteTable("pokemon_species_names", {
	pokemon_species_id: integer("pokemon_species_id").notNull().references(() => pokemon_species.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	name: text("name", { length: 79 }),
	genus: text("genus"),
},
(table) => {
	return {
		ix_pokemon_species_names_name: index("ix_pokemon_species_names_name").on(table.name),
		pk0: primaryKey({ columns: [table.local_language_id, table.pokemon_species_id], name: "pokemon_species_names_local_language_id_pokemon_species_id_pk"})
	}
});

export const pokemon_dex_numbers = sqliteTable("pokemon_dex_numbers", {
	species_id: integer("species_id").notNull().references(() => pokemon_species.id),
	pokedex_id: integer("pokedex_id").notNull().references(() => pokedexes.id),
	pokedex_number: integer("pokedex_number").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.pokedex_id, table.species_id], name: "pokemon_dex_numbers_pokedex_id_species_id_pk"})
	}
});

export const pokemon_egg_groups = sqliteTable("pokemon_egg_groups", {
	species_id: integer("species_id").notNull().references(() => pokemon_species.id),
	egg_group_id: integer("egg_group_id").notNull().references(() => egg_groups.id),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.egg_group_id, table.species_id], name: "pokemon_egg_groups_egg_group_id_species_id_pk"})
	}
});

export const conquest_pokemon_evolution = sqliteTable("conquest_pokemon_evolution", {
	evolved_species_id: integer("evolved_species_id").primaryKey().notNull().references(() => pokemon_species.id),
	required_stat_id: integer("required_stat_id").references(() => conquest_stats.id),
	minimum_stat: integer("minimum_stat"),
	minimum_link: integer("minimum_link"),
	kingdom_id: integer("kingdom_id").references(() => conquest_kingdoms.id),
	warrior_gender_id: integer("warrior_gender_id").references(() => genders.id),
	item_id: integer("item_id").references(() => items.id),
	recruiting_ko_required: numeric("recruiting_ko_required").notNull(),
});

export const pokemon_stats = sqliteTable("pokemon_stats", {
	pokemon_id: integer("pokemon_id").notNull().references(() => pokemon.id),
	stat_id: integer("stat_id").notNull().references(() => stats.id),
	base_stat: integer("base_stat").notNull(),
	effort: integer("effort").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.pokemon_id, table.stat_id], name: "pokemon_stats_pokemon_id_stat_id_pk"})
	}
});

export const pokemon_moves = sqliteTable("pokemon_moves", {
	pokemon_id: integer("pokemon_id").notNull().references(() => pokemon.id),
	version_group_id: integer("version_group_id").notNull().references(() => version_groups.id),
	move_id: integer("move_id").notNull().references(() => moves.id),
	pokemon_move_method_id: integer("pokemon_move_method_id").notNull().references(() => pokemon_move_methods.id),
	level: integer("level").notNull(),
	order: integer("order"),
},
(table) => {
	return {
		ix_pokemon_moves_level: index("ix_pokemon_moves_level").on(table.level),
		ix_pokemon_moves_move_id: index("ix_pokemon_moves_move_id").on(table.move_id),
		ix_pokemon_moves_pokemon_id: index("ix_pokemon_moves_pokemon_id").on(table.pokemon_id),
		ix_pokemon_moves_pokemon_move_method_id: index("ix_pokemon_moves_pokemon_move_method_id").on(table.pokemon_move_method_id),
		ix_pokemon_moves_version_group_id: index("ix_pokemon_moves_version_group_id").on(table.version_group_id),
		pk0: primaryKey({ columns: [table.level, table.move_id, table.pokemon_id, table.pokemon_move_method_id, table.version_group_id], name: "pokemon_moves_level_move_id_pokemon_id_pokemon_move_method_id_version_group_id_pk"})
	}
});

export const pokemon_types = sqliteTable("pokemon_types", {
	pokemon_id: integer("pokemon_id").notNull().references(() => pokemon.id),
	type_id: integer("type_id").notNull().references(() => types.id),
	slot: integer("slot").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.pokemon_id, table.slot], name: "pokemon_types_pokemon_id_slot_pk"})
	}
});

export const pokemon_items = sqliteTable("pokemon_items", {
	pokemon_id: integer("pokemon_id").notNull().references(() => pokemon.id),
	version_id: integer("version_id").notNull().references(() => versions.id),
	item_id: integer("item_id").notNull().references(() => items.id),
	rarity: integer("rarity").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.item_id, table.pokemon_id, table.version_id], name: "pokemon_items_item_id_pokemon_id_version_id_pk"})
	}
});

export const pokemon_game_indices = sqliteTable("pokemon_game_indices", {
	pokemon_id: integer("pokemon_id").notNull().references(() => pokemon.id),
	version_id: integer("version_id").notNull().references(() => versions.id),
	game_index: integer("game_index").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.pokemon_id, table.version_id], name: "pokemon_game_indices_pokemon_id_version_id_pk"})
	}
});

export const pokemon_abilities = sqliteTable("pokemon_abilities", {
	pokemon_id: integer("pokemon_id").notNull().references(() => pokemon.id),
	ability_id: integer("ability_id").notNull().references(() => abilities.id),
	is_hidden: numeric("is_hidden").notNull(),
	slot: integer("slot").notNull(),
},
(table) => {
	return {
		ix_pokemon_abilities_is_hidden: index("ix_pokemon_abilities_is_hidden").on(table.is_hidden),
		pk0: primaryKey({ columns: [table.pokemon_id, table.slot], name: "pokemon_abilities_pokemon_id_slot_pk"})
	}
});

export const pokemon_forms = sqliteTable("pokemon_forms", {
	id: integer("id").primaryKey().notNull(),
	identifier: text("identifier", { length: 79 }).notNull(),
	form_identifier: text("form_identifier", { length: 79 }),
	pokemon_id: integer("pokemon_id").notNull().references(() => pokemon.id),
	introduced_in_version_group_id: integer("introduced_in_version_group_id").references(() => version_groups.id),
	is_default: numeric("is_default").notNull(),
	is_battle_only: numeric("is_battle_only").notNull(),
	is_mega: numeric("is_mega").notNull(),
	form_order: integer("form_order").notNull(),
	order: integer("order").notNull(),
});

export const encounters = sqliteTable("encounters", {
	id: integer("id").primaryKey().notNull(),
	version_id: integer("version_id").notNull().references(() => versions.id),
	location_area_id: integer("location_area_id").notNull().references(() => location_areas.id),
	encounter_slot_id: integer("encounter_slot_id").notNull().references(() => encounter_slots.id),
	pokemon_id: integer("pokemon_id").notNull().references(() => pokemon.id),
	min_level: integer("min_level").notNull(),
	max_level: integer("max_level").notNull(),
});

export const encounter_condition_value_map = sqliteTable("encounter_condition_value_map", {
	encounter_id: integer("encounter_id").notNull().references(() => encounters.id),
	encounter_condition_value_id: integer("encounter_condition_value_id").notNull().references(() => encounter_condition_values.id),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.encounter_condition_value_id, table.encounter_id], name: "encounter_condition_value_map_encounter_condition_value_id_encounter_id_pk"})
	}
});

export const pokemon_form_generations = sqliteTable("pokemon_form_generations", {
	pokemon_form_id: integer("pokemon_form_id").notNull().references(() => pokemon_forms.id),
	generation_id: integer("generation_id").notNull().references(() => generations.id),
	game_index: integer("game_index").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.generation_id, table.pokemon_form_id], name: "pokemon_form_generations_generation_id_pokemon_form_id_pk"})
	}
});

export const pokemon_form_names = sqliteTable("pokemon_form_names", {
	pokemon_form_id: integer("pokemon_form_id").notNull().references(() => pokemon_forms.id),
	local_language_id: integer("local_language_id").notNull().references(() => languages.id),
	form_name: text("form_name", { length: 79 }),
	pokemon_name: text("pokemon_name", { length: 79 }),
},
(table) => {
	return {
		ix_pokemon_form_names_form_name: index("ix_pokemon_form_names_form_name").on(table.form_name),
		ix_pokemon_form_names_pokemon_name: index("ix_pokemon_form_names_pokemon_name").on(table.pokemon_name),
		pk0: primaryKey({ columns: [table.local_language_id, table.pokemon_form_id], name: "pokemon_form_names_local_language_id_pokemon_form_id_pk"})
	}
});

export const pokemon_form_pokeathlon_stats = sqliteTable("pokemon_form_pokeathlon_stats", {
	pokemon_form_id: integer("pokemon_form_id").notNull().references(() => pokemon_forms.id),
	pokeathlon_stat_id: integer("pokeathlon_stat_id").notNull().references(() => pokeathlon_stats.id),
	minimum_stat: integer("minimum_stat").notNull(),
	base_stat: integer("base_stat").notNull(),
	maximum_stat: integer("maximum_stat").notNull(),
},
(table) => {
	return {
		pk0: primaryKey({ columns: [table.pokeathlon_stat_id, table.pokemon_form_id], name: "pokemon_form_pokeathlon_stats_pokeathlon_stat_id_pokemon_form_id_pk"})
	}
});