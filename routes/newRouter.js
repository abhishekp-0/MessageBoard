import {Router} from "express";

const newRouter = Router();

newRouter.get("/", (req, res) => {
    res.send("new");
});

export default newRouter;