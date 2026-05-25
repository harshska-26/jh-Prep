const { usersFilePath } = require("./constants/usersFilePath");
const { readJSON } = require("./utils/utils");

const Users = readJSON(usersFilePath)

module.exports = { Users }