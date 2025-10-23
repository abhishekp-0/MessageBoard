import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import indexRouter from "./routes/indexRouter.js";
import newRouter from "./routes/newRouter.js";
import { error } from "console";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: true}));

app.use("/", indexRouter);
app.use("/new", newRouter);

app.use((err,req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 404).send(err.message);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
    if(error){
        throw error; 
    }
    console.log("Server is running on port 3000");
});