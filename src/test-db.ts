import { connectDatabase } from "./config/database.ts";
import { User } from "./modules/user/user.model.ts";

await connectDatabase();

const user = await User.findOneAndUpdate(
    {email: "alice@example.com"},
    {$addToSet : {hobbies: "music"}},
    {returnDocument: "after"}
)

console.log(user)