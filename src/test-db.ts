import { connectDatabase } from "./config/database.ts";
import { User } from "./modules/user/user.model.ts";

await connectDatabase();

const result = await User.findOneAndUpdate(
    {email: 'davidtimestamps@gmail.com'},
    {$set : {
        role: 'admin'
    }},
    {
        returnDocument: 'after',
        runValidators: true
    }
)

console.log(result)