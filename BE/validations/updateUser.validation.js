const updateUserVal = (req, res, next) => {
    try {
        const { id, Username, Email, Role, Status } = req.body;

        // Validates that the unique client-side generated ID and fields exist
        if (!id || !Username || !Email || !Role || !Status) {
            return res.status(400).json({ message: "Error: Missing required fields for updating user." });
        }

        next();
    } catch (e) {
        console.error(`Error at User Update Validation: ${e}`);
        next(e);
    }
};

module.exports = { updateUserVal };
