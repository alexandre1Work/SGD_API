import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.DATABASE_URL;

export const sql = postgres(connectionString, {
  host: "db.ruhvvekthwemutwvxhgs.supabase.co",
  port: 5432,
  ssl: "require",
  family: 4, // Força IPv4
});

// Teste de conexão para log
sql`SELECT NOW()`
  .then((res) => console.log("Conexão bem-sucedida:", res))
  .catch((err) => console.error("Erro na conexão:", err));
