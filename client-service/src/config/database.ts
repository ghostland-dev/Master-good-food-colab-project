import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Customer } from "../entities/Customer";
import { CustomerAddress } from "../entities/CustomerAddress";
import { Role } from "../entities/Role";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: [Customer, CustomerAddress, Role],
  migrations: [],
  subscribers: []
});

export const initializeDatabase = async () => {
  if (!AppDataSource.isInitialized) {
    try {
      console.log("🔄 Tentative de connexion à la base de données...");
      await AppDataSource.initialize();
      console.log("📦 Base de données connectée !");
    } catch (error) {
      console.error("❌ Erreur lors de l'initialisation de la base de données :", error);
      process.exit(1); // Arrête le serveur en cas d'erreur critique
    }
  } else {
    console.log("📦 Base de données déjà connectée !");
  }
};