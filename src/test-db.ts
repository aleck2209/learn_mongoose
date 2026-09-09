import { connectDatabase } from "./config/database.ts";
import { User } from "./modules/user/user.model.ts";
import { Post } from "./modules/post/post.model.ts";

await connectDatabase();

// UTILISATION DE .populate
// const post = await Post.find().populate('author')
// const post = await Post.find().populate('author', 'name email age')
/*
const post = await Post.find().populate({
    path: "author",
    select: "name email"
})
*/

