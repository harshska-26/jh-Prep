const { usersFilePath } = require("../constants/usersFilePath");
const { Users } = require("../users"); // Imports your memory-cached data wrapper
const { WriteJSON } = require("../utils/utils"); // Your existing file writer helper

const updateUserCtrl = (req, res) => {
    try {
        const { id } = req.body;
        const usersArr = Users.users; // Accesses the inner array: { "users": [...] }

        // Find the index of the specific user record via unique ID matching
        const userIndex = usersArr.findIndex((user) => user.id === id);

        // If the ID does not match any data record, reject with a 404 status
        if (userIndex === -1) {
            return res.status(404).json({ message: "User record not found." });
        }

        // Overwrite the existing user object data block at that position index
        usersArr[userIndex] = req.body;

        // Save the updated object structure safely back to users.json file
        WriteJSON(usersFilePath, Users);

        // Return status 200 with the fully refreshed data list for the UI state
        res.status(200).json(Users);
    } catch (e) {
        console.error("Error at Update User Controller:", e);
        res.status(500).json({ message: "Internal Server Error at Update Controller" });
    }
};

module.exports = { updateUserCtrl };
