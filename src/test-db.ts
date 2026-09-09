import { connectDatabase } from "./config/database.ts";
import { User } from "./modules/user/user.model.ts";

await connectDatabase();

const user = new User({
    name: "Virgile",
    email: "aleckyann@09gmail.com",
    age: 25
});

await user.save();

console.log(user);