import { User } from "./user.model.ts";

export const seedUsers = async (): Promise<void> => {
	await User.deleteMany({});

	await User.insertMany([
		{
			name: "Alice",
			email: "alice@example.com",
			age: 30,
		},
		{
			name: "Bob",
			email: "bob@example.com",
			age: 28,
		},
		{
			name: "Charlie",
			email: "charlie@example.com",
			age: 35,
		},
	]);

    console.log("Users seeded successfully")
};
