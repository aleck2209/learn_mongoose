import { connectDatabase } from "./config/database.ts";
import { User } from "./modules/user/user.model.ts";

await connectDatabase();

console.log(User.modelName);