import { connectDatabase } from "./config/database.ts";
import { User } from "./modules/user/user.model.ts";

await connectDatabase();

const user = await User.findOne({
	email: "alice@example.com",
});

if (!user) {
	throw new Error("User not found");
}

const result = await User.findByIdAndUpdate(
	user._id,
	{ $set: { age: 24 } },
	{ returnDocument: 'after' },
);

console.log(result)