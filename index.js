const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// require(dotenv).config();
const app = express();
app.use(express.json());
app.use(cors());

const userRoute = require("./routes/user.route");

const connection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://rohit715131:LgpKYZWHHcQlXjJi@cluster0.whormsg.mongodb.net/test`
    );
    console.log("mongo atlas connect");
  } catch (error) {
    console.log(error);
  }
};

app.use("/users", userRoute);
app.listen(4500, () => {
  connection();
  console.log("connected");
});
