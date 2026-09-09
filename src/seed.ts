import mongoose from "mongoose";
import { connectDatabase } from "./config/database.ts";
import { seedUsers } from "./modules/user/user.seed.ts";

try {
    await connectDatabase()
    await seedUsers()
    await mongoose.disconnect()
    console.log("Seed completed");
} catch(err: unknown) {
    console.log("Seed failed: ", err);
    await mongoose.disconnect();
    process.exit(1)
}