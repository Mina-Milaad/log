import express from 'express'
import cors from 'cors'
import { dbConn } from './database/dbConnection.js';
import { AppError } from './src/utils/appError.js';
import { globalError } from './src/middleware/globalError.js';
import { bootstrap } from './src/modules/bootstrap.js'



const app = express();
const port = 5000;
app.use(cors({
  origin:  '*' ,
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true,
}))
app.use(express.json())


bootstrap(app)
app.use('*', (req, res, next) => {
    next(new AppError(`route not found ${req.originalUrl}`, 404))
})

app.use(globalError)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))