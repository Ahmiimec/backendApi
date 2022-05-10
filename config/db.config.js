module.exports = {
    HOST: "ahmiiTest.mssql.somee.com",
    USER: "Manners_SQLLogin_1",
    PASSWORD: "b57ncqrgyc",
    DB: "ahmiiTest",
    dialect: "mssql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };