import express from "express";
import "dotenv/config";
import session from "express-session";

import { getInputs } from "./middlewares/index.js";

const app = express();

const PORT = process.env.LOCAL_PORT;

export const alias = process.env.ALIAS;
export const password = process.env.PASSWORD;

app.set("view engine","ejs");
app.set("views","./views");

app.use(session({
    secret : {id : alias, pw : password},
    resave : false,
    saveUninitialized : false   

}));

app.use((req,res,next) => {
    if(!req.session.isLogged) req.session.isLogged = false ;
    next();
});

app.get("/", (req,res) => {
    res.status(200).render("layout",{template: "home"});
});


app.get("/signin", (req,res)=> {
    res.status(200).render("layout", {template : "session"});
});

app.use(getInputs);

app.listen(PORT, (req,res)=>{
    console.log(`Listening at http://localhost:${PORT}`);
})