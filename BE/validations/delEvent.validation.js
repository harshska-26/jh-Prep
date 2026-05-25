
const delEventVal = (req, res, next) => {
    try {
        const { Title } = req.body;
        if (!Title || Object.keys(req.body) > 1) {
            return res.status(401).json({ message: "Error at validating the fields" })
        }
        next();
    } catch (e) {
        console.log(`Error at Validation ${e}`);
        return res.status(401).json({ message: "Error at Validation" })
    }
}

module.exports={delEventVal}