import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
const app = express();

import sweetiesRoutes from "./routes/sweeties.js"
import userRouter from "./routes/user.js"
import recipesRoutes from "./routes/recipes.js"

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/sweeties", sweetiesRoutes);
app.use("/user", userRouter);
app.use("/recipes", recipesRoutes);

mongoose.set("strictQuery", true);
const port = 8080;

mongoose
  .connect(
    "mongodb+srv://lanakhidirova:lana@cluster0.rwyv5wv.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(port, () => {
      console.log("connected");
      console.log(`url: http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
