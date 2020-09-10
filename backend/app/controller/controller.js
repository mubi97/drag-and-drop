const db = require('../config/db.config.js');

const List1 = db.list1;
const List2 = db.list2;


exports.addEntry = (req, res) => {
  if (req.body.change == 1) {
    List1.create({
      name: req.body.name,
    }).then(() => {
      res.send({
        message: 'Entry Added Successfully!'
      });
    }).catch(err => {
      res.status(500).send({
        reason: err.message
      });
    })
  } else {
    List2.create({
      name: req.body.name,
    }).then(() => {
      res.send({
        message: 'Entry Added Successfully!'
      });
    }).catch(err => {
      res.status(500).send({
        reason: err.message
      });
    })
  }
  
}

exports.changeList = (req, res) => {
  if (req.body.change == 1) {
    List2.destroy({
      where: {
        id: req.body.id
      }
    }).then(() => {
      List1.create({
        name: req.body.name,
      }).then(() => {
        res.send({
          message: 'Entry Added Successfully!'
        });
      }).catch(err => {
        res.status(500).send({
          reason: err.message
        });
      })
    }).catch(err => {
      res.status(500).send({
        reason: err.message
      });
    })
    
  } else {
    List1.destroy({
      where: {
        id: req.body.id
      }
    }).then(() => {
      List2.create({
        name: req.body.name,
      }).then(() => {
        res.send({
          message: 'Entry Added Successfully!'
        });
      }).catch(err => {
        res.status(500).send({
          reason: err.message
        });
      })
    }).catch(err => {
      res.status(500).send({
        reason: err.message
      });
    })
  }
  
}

exports.loadData = (_req, res) => {
  List1.findAll({
    attributes: ['id', 'name']
  }).then(list1 => {
    List2.findAll({
      attributes: ['id', 'name']
    }).then(list2 => {
      res.status(200).send({
        'description': 'Lists Data',
        'list1': list1,
        'list2': list2
      });
    }).catch(err => {
      res.status(500).send({
        'description': 'Cannot Access List 2 Page',
        'error': err
      });
    })
  }).catch(err => {
    res.status(500).send({
      'description': 'Cannot Access List 1 Page',
      'error': err
    });
  })
}