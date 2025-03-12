import express, { Request, Response } from "express";
import "dotenv/config";
import transactionsRoutes from "./routes/transactionsRoutes";

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.use("/api", transactionsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
