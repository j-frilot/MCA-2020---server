const express = require("express");
const app = express();
const router = require("./router");
const helmet = require("helmet");
const cors = require("cors");

app.use(helmet());
app.use(cors());
app.use(express.json());

// original
app.use("/api", router);

app.use(express.static("public"));
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
