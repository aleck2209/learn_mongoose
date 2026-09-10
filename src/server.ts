import express, { type Express } from "express";
import "dotenv"
import userRoutes from "./modules/user/user.route.ts";
import { connectDatabase } from "./config/database.ts";

const app: Express = express();
const PORT: number = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use("/users", userRoutes);

await connectDatabase();

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
