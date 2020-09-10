module.exports = (sequelize, Sequelize) => {
    const List1 = sequelize.define('List1', {
      name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
    });
    return List1;
  }
  