function setHeader(req, res, next) {
    console.log('setHeader');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    next();     
}

module.exports = {
    setHeader : setHeader
};
