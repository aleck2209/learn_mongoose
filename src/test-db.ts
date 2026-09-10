import mongoose from "mongoose";
import { connectDatabase } from "./config/database.ts";
import { User } from "./modules/user/user.model.ts";
import { Post } from "./modules/post/post.model.ts";
import { getUsers } from "./modules/user/user.service.ts";

await connectDatabase();

/*
UTILISATION DE .populate
const post = await Post.find().populate('author')
const post = await Post.find().populate('author', 'name email age')

const post = await Post.find().populate({
    path: "author",
    select: "name email"
})

const user = await User.findOne({
	email: "davidtimestamps@gmail.com",
}).populate("posts");
*/

const users = await getUsers(1, 2);
console.log(users);
await mongoose.disconnect();
