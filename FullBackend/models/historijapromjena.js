'use strict';
module.exports = (sequelize, DataTypes) => {
  const HistorijaPromjena = sequelize.define('HistorijaPromjena', {
    datumOd: DataTypes.DATE,
    datumDo: DataTypes.DATE
  }, {});
  HistorijaPromjena.associate = function(models) {
    // associations can be defined here
	HistorijaPromjena.hasOne(models.Promjena, {
      foreignKey: 'promjenaId',
      as: 'promjena',
    });
	 HistorijaPromjena.hasOne(models.StatusPromjene, {
      foreignKey: 'statusPromjeneId',
      as: 'statusPromjene',
    });
	 HistorijaPromjena.hasOne(models.Korisnik, {
      foreignKey: 'napravioIzmjenu',
      as: 'napravioIzmjenu',
    });
  };
  return HistorijaPromjena;
};