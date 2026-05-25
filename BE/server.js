const express = require("express");
const cors = require("cors")
const { events } = require("./events");
const { addEventVal } = require("./validations/addEvent.validation");
const { addEventCtrl } = require("./controller/addEvent.controller");
const { delEventCtrl } = require("./controller/delEvent.controller");
const { delEventVal } = require("./validations/delEvent.validation");
const { Users } = require("./users");
const { addUserCtrl } = require("./controller/addUser.controller");
const { addUserVal } = require("./validations/addUser.validation");
const { delUserVal } = require("./validations/delUser.validation");
const { delUserCtrl } = require("./controller/delUser.controller");
const { updateUserVal } = require("./validations/updateUser.validation");
const { updateUserCtrl } = require("./controller/updateUser.controller");
const app = express();
app.use(express.json());
app.use(cors({origin:"http://localhost:5173"}))

const PORT = 2000;

//Events
app.get("/getEvents", (req, res) => {
    return res.status(201).json(events)
})
app.post("/addEvent", addEventVal, addEventCtrl)
app.delete("/delEvent", delEventVal, delEventCtrl)


//Users
app.get("/getUsers", (req, res) => {
    return res.status(201).json(Users)
})
app.post("/addUser", addUserVal, addUserCtrl)
app.delete("/delUser", delUserVal, delUserCtrl)
app.put("/updateUser", updateUserVal, updateUserCtrl);


//Server
app.listen(PORT, () => console.log(`Server is running on ${PORT}`))