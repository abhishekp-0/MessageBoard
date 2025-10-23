import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import indexRouter from "./routes/indexRouter.js";
import newRouter from "./routes/newRouter.js";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.use("/", indexRouter);
app.use("/new", newRouter);



const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
    if(error){
        throw error; 
    }
    console.log("Server is running on port 3000");
});