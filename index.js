import express from "express";
import mongoose from "mongoose";
import { orders } from "./routes/orders.js";
import { MONGO_URI } from "./config/keys.js";

// initialize app variable and store return value of express invoked
const app = express();

// connect app to database
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected!"))
    .catch((err) => console.log(err));

// this ensures our requests will automatically be read in json
app.use(express.json());

// initial testing of application
app.get("/test", (req, res) => res.send("Hello World"));

// make api routes available to app
app.use("/api/orders", orders);

// open a port to connect
const port = process.env.PORT || 5001;
const callback = () => console.log(`Server is running on port ${port}.`);

// listening for 
app.listen(port, callback);
