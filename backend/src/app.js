import express from 'express';
import cors from 'cors';


const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

import tasksRoute from './routes/tasks.route.js';

app.use('/api', tasksRoute);


app.listen(4000, () => {
    console.log("app is running on 4000");
})