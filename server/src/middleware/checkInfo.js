const validateData = (req, res, next) => {
    console.log('Request Type:', req.method, req.query);
    next();
}

module.exports = validateData;