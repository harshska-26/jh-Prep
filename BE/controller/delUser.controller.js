const { WriteJSON } = require("../utils/utils");
const { Users } = require("../users");
const { usersFilePath } = require("../constants/usersFilePath");

const delUserCtrl = (req, res) => {
    try {
        const { id } = req.body;
        const filteredData = Users.users.filter((eachEvent) => eachEvent.id !== id);
        Users.users = filteredData;
        WriteJSON(usersFilePath, Users);
        return res.status(200).json({ message: "Event deleted successfully", data: filteredData });
    } catch (e) {
        console.log(`Error at Controller ${e}`);
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

module.exports = { delUserCtrl }
