'use strict';
module.exports = (sequelize, DataTypes) => {
  const TipDogadjaja = sequelize.define('TipDogadjaja', {
    tipDogadjaja: DataTypes.STRING
  }, {});
  TipDogadjaja.associate = function(models) {
    // associations can be defined here
	TipDogadjaja.belongsTo(models.Dogadjaj, {
      foreignKey: 'tipId',
      onDelete: 'CASCADE',
    });
  };
  return TipDogadjaja;
};