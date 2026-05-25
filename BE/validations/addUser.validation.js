
const addUserVal = (req, res, next) => {
    try {
        const { id, Username, Email, Role, Status } = req.body;
        if (!id || !Username || !Email || !Role || !Status || Object.keys(req.body).length < 5) {
            return res.status(400).json({ message: "Error at Validating the Fields" });
        }
        next();
    }
    catch (e) {
        console.log(`Error at Validation`)
    }
}

module.exports={addUserVal}