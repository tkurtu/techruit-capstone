'use strict';
module.exports = (sequelize, DataTypes) => {
  const Freelancer = sequelize.define('Freelancer', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    occupation: DataTypes.STRING,
    skills: DataTypes.STRING
  }, {});
  Freelancer.associate = function(models) {
    // associations can be defined here
  };
  return Freelancer;
};