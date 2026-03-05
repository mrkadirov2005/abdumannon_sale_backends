import { connectDB } from "./config/dbcon.js";
import { app } from "./app.js";

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
      console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
    });
  } catch (err) {
    console.error("Failed to connect to DB", err);
  }
};

startServer();
