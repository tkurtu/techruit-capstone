'use strict';
module.exports = (sequelize, DataTypes) => {
  const NewUser = sequelize.define('NewUser', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    company: DataTypes.STRING,
    occupation: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  NewUser.associate = function(models) {
    // associations can be defined here
  };
  return NewUser;
};