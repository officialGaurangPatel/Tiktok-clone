import express from "express";
import mongoose from "mongoose";
import Videos from "./dbModel.js";
// app config
const app = express();
const port = 9000;

// DB config
const url =
  "mongodb+srv://admin:PJ2qSM1y3ZDkYmjB@cluster0.uixaf.mongodb.net/tiktok?retryWrites=true&w=majority";

mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
);

// middlwares
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});

// api endpoints
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/v1/posts", (req, res) => {
  try {
    const dbVideos = req.body;
    Videos.create(dbVideos, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/v1/posts", (req, res) => {
  Videos.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => console.log(`listning on localhost:${port}`));

// {
//     "url":"https://www.statuslagao.com/whatsapp/videos/mahakal/mahadev-status-video-237.mp4",
//     "channel":"GaurangPatel",
//     "song":"Bhola Hai Bhandari",
//     "likes":100,
//     "shares":18,
//     "message":218,
//     "description":"Har Har Mahadev"
// }
