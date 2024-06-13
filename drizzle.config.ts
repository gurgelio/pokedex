import type { Config } from "drizzle-kit";

export default {
	schema: "./db/schema.ts",
	dialect: "sqlite",
	dbCredentials: {
		url: "file:./db/db.sqlite",
	},
} satisfies Config;
