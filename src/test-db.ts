import { connectDatabase } from "./config/database.ts";
import { User } from "./modules/user/user.model.ts";

await connectDatabase();

const user = await User.findOne({
    email: 'aleckyann@09gmail.com'
});

console.log(user);