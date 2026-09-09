import { connectDatabase } from "./config/database.ts";
import { User } from "./modules/user/user.model.ts";

await connectDatabase();

const user = await User.findOneAndUpdate(
    {email: 'aleckyann@09gmail.com'},
    {age: 26},
    {new: true}
);

console.log(user);