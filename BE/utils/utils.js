const fs = require("fs")
const readJSON = (path) => {
    try {
        const data = fs.readFileSync(path)
        const ParseData = JSON.parse(data)
        return ParseData
    } catch (e) {
        console.log(e)
    }
}

const WriteJSON = (path, data) => {
    try {
        const newData = fs.writeFileSync(path, JSON.stringify(data));
        return true;
    } catch (e) {
        console.log(e)
    }
}

module.exports={readJSON, WriteJSON}