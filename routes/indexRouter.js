import { Router } from "express";
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.send("index");
});

export default indexRouter;