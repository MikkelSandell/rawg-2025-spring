import express from "express";
import genreRouter from "../routes/genreRouter"

const setupRouters = (app: express.Application) => {
    app.use("/genre" , genreRouter);
}

export default setupRouters;