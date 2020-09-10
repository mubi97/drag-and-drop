module.exports = (sequelize, Sequelize) => {
    const List2 = sequelize.define('List2', {
      name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
    });
    return List2;
  }
  