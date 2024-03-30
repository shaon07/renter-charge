import express from "express";
import chargeRouter from "./routes/charge.route.js";

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/api/v1/charge", chargeRouter);


export default app;