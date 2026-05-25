const { defFilePath } = require("./constants/defFilePath");
const { readJSON } = require("./utils/utils");

const events = readJSON(defFilePath)

module.exports = {events}