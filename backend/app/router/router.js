
module.exports = function (app) {
  const controller = require('../controller/controller.js');

  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    
    next();
  });


  app.post('/api/addEntry', controller.addEntry);
  app.post('/api/changeList', controller.changeList);
  app.get('/api/loadData', controller.loadData);
  


}
