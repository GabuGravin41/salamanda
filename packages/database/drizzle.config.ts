import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url:
      process.env.DATABASE_URL ||
      'postgresql://neondb_owner:npg_Ayodv9VR3UHe@ep-icy-rice-b8stac8d-pooler.c-14.us-east-1.aws.neon.tech/neondb?channel_binding=require&sslmode=require',
  },
});
