const express = require("express");
const { template } = require("handlebars");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000;

// public static path
const staticPath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partial");

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partial_path)

app.use(express.static(staticPath));


// routing
app.get("", (req, res) =>{
    res.render("index");
});

app.get("/about", (req, res) =>{
    res.render("about");
});

app.get("/weather", (req, res) =>{
    res.render("weather");
});

app.get("*", (req, res) =>{
    res.render("404error", {
        errormsg : "OOPS page not found"
    });
});

app.listen(port, () => {
    console.log(`listening to the port ${port}`);
})