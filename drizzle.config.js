/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:xq9ahtB2ILKj@ep-flat-wind-a54abqnx.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };