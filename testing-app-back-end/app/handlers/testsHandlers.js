function getTests(req, res, next) {
    console.log('getTests');
    //TO DO: make request  with testsService
    res.json([
        {
            id: 1
        }
    ]); 
}


var handler = {
    getTests: getTests
};

module.exports = handler;
