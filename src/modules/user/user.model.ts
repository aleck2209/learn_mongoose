import { Schema, model } from "mongoose";

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			minLength: 3,
			maxLength: 50,
			validate: {
				validator: (value: string) => /^[A-Za-zÀ-ÿ\s]+$/.test(value),
				message: "The name must contain only letters and spaces",
			},
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
		},
		age: {
			type: Number,
			required: true,
			min: 18,
			max: 120,
		},
		role: {
			type: String,
			required: true,
			enum: ["user", "admin"],
			default: "user",
		},
		hobbies: {
			type: [String],
			default: [],
		},
        isActive: {
            type: Boolean,
            default: true,
        }
	},
	{
		timestamps: true,
	},
);

export const User = model("User", userSchema);
