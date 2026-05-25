const { defFilePath } = require("../constants/defFilePath");
const { events } = require("../events");
const { WriteJSON } = require("../utils/utils");

const addEventCtrl = (req, res) => {
    try{
        const payload = req.body;
        const eventsArr = events.events;
        eventsArr.push(payload);
        WriteJSON(defFilePath, events);
        res.status(200).json(events)
    }catch(e){
        console.log(e)
        res.status(500).json("error at Controller")
    }
}

module.exports={addEventCtrl}