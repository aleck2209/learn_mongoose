import mongoose from "mongoose";
import { connectDatabase } from "./config/database.ts";
import { seedUsers } from "./modules/user/user.seed.ts";
import { seedPosts } from "./modules/post/posts.seed.ts";

try {
    await connectDatabase()
    const users = await seedUsers()
    await seedPosts(users)
    await mongoose.disconnect()
    console.log("Seed completed");
} catch(err: unknown) {
    console.log("Seed failed: ", err);
    await mongoose.disconnect();
    process.exit(1)
}