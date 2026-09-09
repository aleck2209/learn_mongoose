import { Schema, model } from "mongoose";

const postSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			minLength: 3,
			maxLength: 100,
		},

		content: {
			type: String,
			required: true,
		},

		author: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

export const Post = model("Post", postSchema);