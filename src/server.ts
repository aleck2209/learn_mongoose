import express, {type Express, type Request, type Response} from 'express'
import userRoutes from './modules/user/user.route.ts'
import { connectDatabase } from './config/database.ts';

const app: Express = express();
const PORT: number = 3000;

app.use(express.json());
app.use('/users', userRoutes)

await connectDatabase();

app.listen(PORT, () => {
    console.log(`listening on port ${3000}`)
})