import app from "./express";
import config from "./../config/config";
import mongoose from "mongoose";

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info(`Server started on port ${config.port}`);
});

mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."));

mongoose.connection.on("error", () => {
  throw new Error(`Unable to connect to database: ${config.mongoUri}`);
});
