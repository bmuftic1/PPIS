'use strict';
module.exports = (sequelize, DataTypes) => {
  const Promjena = sequelize.define('Promjena', {
    opis: DataTypes.STRING,
    prihvacena: DataTypes.BOOLEAN
  }, {});
  Promjena.associate = function(models) {
    // associations can be defined here
	Promjena.hasOne(models.PrioritetPromjene, {
      foreignKey: 'prioritetPromjeneId',
      as: 'prioritetPromjene',
    });
	 Promjena.hasOne(models.KategorijaPromjene, {
      foreignKey: 'kategorijaPromjeneId',
      as: 'kategorijaPromjene',
    });
	 Promjena.hasOne(models.Korisnik, {
      foreignKey: 'prijavio',
      as: 'prijavio',
    });
	Promjena.hasOne(models.Korisnik, {
      foreignKey: 'izvrsitelj',
      as: 'izvrsitelj',
    });
	Promjena.hasOne(models.Korisnik, {
      foreignKey: 'odobrio',
      as: 'odobrio',
    });
	 Promjena.belongsTo(models.HistorijaPromjena, {
      foreignKey: 'promjenaId',
      onDelete: 'CASCADE',
    });

  };
  return Promjena;
};