const { usersFilePath } = require("../constants/usersFilePath");
const { Users } = require("../users");
const { WriteJSON } = require("../utils/utils");

const addUserCtrl = (req, res) => {
    try{
        const payload = req.body;
        const usersArr = Users.users;
        usersArr.push(payload);
        WriteJSON(usersFilePath, Users);
        res.status(200).json(Users)
    }catch(e){
        console.log(e)
        res.status(500).json("error at Controller")
    }
}

module.exports={addUserCtrl}