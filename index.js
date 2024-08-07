import express from "express";

const app = express();

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();
    

    // console.log(day);

    if (day === 0 || day === 6) {
        res.render("index.ejs", {
            dayType: "the weekend",
            advice: "it is time to have some fun",
        });
    } else {
        res.render("index.ejs", {
            dayType: "a weekday",
            advice: "it is time to work hard",
        });
    }    
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})