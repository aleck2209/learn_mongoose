import { connectDatabase } from "./config/database.ts";
import { User } from "./modules/user/user.model.ts";

await connectDatabase();

const user = await User.findOneAndDelete(
    {email: 'aleckyann@09gmail.com'}
);

console.log(user);