module.exports = (sequelize, Sequelize) => {
    const Store = sequelize.define("store", {
      brand: {
        type: Sequelize.STRING
      },
      storeName: {
        type: Sequelize.STRING
      },
    });
    return Store;
  };