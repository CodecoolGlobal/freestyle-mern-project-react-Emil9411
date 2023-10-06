import mongoose from "mongoose";
import express from "express";
import cors from "cors"
import mealRouter from "./routes/meal.js"
import userRouter from "./routes/user.js"

const app = express()
const PORT = 4000
const MONGO_URL = "mongodb+srv://guest123:guest123@cluster0.ysu7enh.mongodb.net/test?retryWrites=true&w=majority"

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:3000'
}))

function logger (req,res, next) {
    const ts = new Date()
    console.log(`${ts} ${req.method}:${req.url}`)
    next()
}

app.use(logger)

app.use("/api/v1", mealRouter)
app.use("/user", userRouter)

async function main() {
    await mongoose.connect(MONGO_URL)
    app.listen(PORT, () => {
        console.log(`Server is running: http://localhost:${PORT}`)
    })
}

main ()

