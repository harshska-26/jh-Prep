
const delUserVal = (req, res, next) => {
    try {
        const { id } = req.body;
        if (!id || Object.keys(req.body) > 1) {
            return res.status(401).json({ message: "Error at validating the fields" })
        }
        next();
    } catch (e) {
        console.log(`Error at Validation ${e}`);
        return res.status(401).json({ message: "Error at Validation" })
    }
}

module.exports={delUserVal}