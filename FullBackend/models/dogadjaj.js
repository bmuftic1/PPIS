'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dogadjaj = sequelize.define('Dogadjaj', {
    dogadjaj: DataTypes.STRING
  }, {});
  Dogadjaj.associate = function(models) {
    // associations can be defined here
	Dogadjaj.hasOne(models.PrioritetDogadjaja, {
      foreignKey: 'prioritetId',
      as: 'prioritet',
    });
	 Dogadjaj.hasOne(models.TipDogadjaja, {
      foreignKey: 'tipId',
      as: 'tip',
    });
	 Dogadjaj.hasOne(models.Korisnik, {
      foreignKey: 'inicijator',
      as: 'inicijator',
    });
	 Dogadjaj.belongsTo(models.HistorijaDogadjaj, {
      foreignKey: 'dogadjajId',
      onDelete: 'CASCADE',
    });
  };
  return Dogadjaj;
};