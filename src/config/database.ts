import "dotenv/config";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
	throw new Error("MONGODB_URI is not defined");
}

export const connectDatabase = async (): Promise<void> => {
	try {
		await mongoose.connect(MONGODB_URI);
		console.log("MongoDB connected");
	} catch (err: unknown) {
		console.log(err);
	}
};
