
const addEventVal = (req, res, next) => {
    try {
        const { Title, Description, Date, Location, Category } = req.body;
        if (!Title || !Description || !Date || !Location || !Category || Object.keys(req.body).length < 5) {
            return res.status(400).json({ message: "Error at Validating the Fields" });
        }

        next();
    }
    catch (e) {
        console.log(`Error at Validation`)
    }
}

module.exports={addEventVal}