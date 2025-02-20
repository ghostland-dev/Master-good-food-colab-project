import "reflect-metadata";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { initializeDatabase } from "./config/database";
import customerRoutes from "./routes/customerRoutes";
import customerAddressRoutes from "./routes/customerAddressRoutes";
import roleRoutes from "./routes/roleRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/customers", customerRoutes);
app.use("/addresses", customerAddressRoutes);
app.use("/roles", roleRoutes);

// Connexion à la base de données et lancement du serveur
initializeDatabase().then(() => {
  app.listen(PORT, () => 
    console.log(`🚀 Serveur démarré sur le port: ${PORT}`)
  );
});
