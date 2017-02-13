function getGroups(req, res, next) {
    console.log('getGroups');
    //TO DO: make request  with groupsService
    res.json([
        {
            id: 1
        }
    ]); 
}

var handler = {
    getGroups: getGroups
};

module.exports = handler;
