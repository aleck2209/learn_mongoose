import mongoose from "mongoose";
import { User } from "./modules/user/user.model.ts";
import { connectDatabase } from "./config/database.ts";

const limit = 2;
const page = 2;

const skip = (page - 1) * limit;

connectDatabase();

const [user, total] = await Promise.all([
	User.find()
		.select("name email age role")
		.sort({ createdAt: -1 })
		.skip(skip)
		.limit(limit)
		.lean(),

	User.countDocuments(),
]);

const totalPage = Math.ceil(total / limit);

console.log({
	data: user,
	total,
});

mongoose.disconnect();
