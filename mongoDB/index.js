const express = require("express"); 
const mongoose = require("mongoose");
// const User = require("./models/user");
const app = express(); 
const userRoutes = require("./routes/routes")

mongoose.connect("mongodb://localhost:27017/signup",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json())
app.use("/users",userRoutes)



const port = process.env.PORT || 5000; 
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

// app.get("/", async (req, res) => {
//     await user.save();
//     res.send("Hello world!");
// });

// const user = new User({
//     name: "Lance",
//     email: "lbookatz@hotmail.com",
//     password: "password"
// });
