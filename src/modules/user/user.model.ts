import { Schema, model } from "mongoose";

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	age: {
		type: Number,
		required: true,
	},
	hobbies: {
        type: [String],
        default: []
    },
});

export const User = model("User", userSchema);
