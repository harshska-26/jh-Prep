const { WriteJSON } = require("../utils/utils");
const { defFilePath } = require("../constants/defFilePath");
const { events } = require("../events");

const delEventCtrl = (req, res) => {
    try {
        const { Title } = req.body;
        const filteredData = events.events.filter((eachEvent) => eachEvent.Title !== Title);
        events.events = filteredData; 
        WriteJSON(defFilePath, events);
        
        return res.status(200).json({ message: "Event deleted successfully", data: filteredData });
    } catch (e) {
        console.log(`Error at Controller ${e}`);
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

module.exports = { delEventCtrl }
