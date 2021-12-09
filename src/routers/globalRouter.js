import express from "express";
import { join,login } from "../controllers/userController";
import { trendVideo,search } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trendVideo);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;

