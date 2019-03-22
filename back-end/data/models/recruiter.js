'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recruiter = sequelize.define('Recruiter', {
    companyName: DataTypes.STRING,
    email: DataTypes.STRING,
    type: DataTypes.STRING,
    lookingFor: DataTypes.STRING,
    description: DataTypes.STRING,
    contact: DataTypes.NUMBER
  }, {});
  Recruiter.associate = function(models) {
    // associations can be defined here
  };
  return Recruiter;
};