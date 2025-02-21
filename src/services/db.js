import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.DATABASE_URL;

(async () => {
  try {
    console.log("Testando conexão com o banco...");

    const sql = postgres(connectionString, {
      host: "db.ruhvvekthwemutwvxhgs.supabase.co",
      port: 5432,
      ssl: "require",
      family: 4, // Força IPv4
    });

    const result = await sql`SELECT NOW();`;
    console.log("Conexão bem-sucedida:", result);
  } catch (error) {
    console.error("Erro ao conectar ao banco:", error);
  }
})();
