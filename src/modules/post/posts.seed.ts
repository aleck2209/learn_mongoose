import { Post } from "./post.model.ts";

type UserId = {
	_id: unknown;
};

export const seedPosts = async (users: UserId[]): Promise<void> => {
	await Post.deleteMany({});

	await Post.insertMany([
		{
			title: "Mon premier article",
			content: "Je découvre MongoDB et Mongoose.",
			author: users[0]._id,
		},
		{
			title: "Comprendre les relations",
			content: "Je découvre les références avec Mongoose.",
			author: users[1]._id,
		},
		{
			title: "Mon deuxième article",
			content: "Je continue mon apprentissage.",
			author: users[0]._id,
		},
	]);

    console.log("Posts seeded successfully");
};
