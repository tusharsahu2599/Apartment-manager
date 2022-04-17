const express = require("express");
const cors = require("cors");
const connect =  require("./configs/db");
const managerController = require("./controllers/manager.controller");
const residentController = require("./controllers/resident.controller");
const flatController = require("./controllers/flat.controller");
require("dotenv").config();

const PORT =  process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/manager", managerController);
app.use("/resident", residentController);
app.use("/flat", flatController);

app.listen(PORT, async() => {
    try {
        await connect();
    } catch (e) {
        console.log(e.message);
    }
  console.log(`Server is running on port ${PORT}`);
});

