'use strict';
module.exports = (sequelize, DataTypes) => {
  const HistorijaDogadjaj = sequelize.define('HistorijaDogadjaj', {
    datumOd: DataTypes.DATE,
    datumDo: DataTypes.DATE
  }, {});
  HistorijaDogadjaj.associate = function(models) {
    // associations can be defined here
	HistorijaDogadjaj.hasOne(models.Dogadjaj, {
      foreignKey: 'dogadjajId',
      as: 'dogadjaj',
    });
	 HistorijaDogadjaj.hasOne(models.StatusDogadjaja, {
      foreignKey: 'statusDogadjajId',
      as: 'statusDogadjaj',
    });
  };
  return HistorijaDogadjaj;
};