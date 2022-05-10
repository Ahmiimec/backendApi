module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    employeeCode: {
      type: Sequelize.STRING
    },
    prefix: {
      type: Sequelize.STRING
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    employeeName: {
      type: Sequelize.STRING
    },
    englishName: {
      type: Sequelize.STRING
    },
    birthDate: {
      type: Sequelize.DATE
    },
    startDate: {
      type: Sequelize.DATE
    },
    resignDate: {
      type: Sequelize.DATE
    },
    designation: {
      type: Sequelize.STRING
    },
    department: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    uploadedDate: {
      type: Sequelize.DATE
    },
  });
  return User;
};