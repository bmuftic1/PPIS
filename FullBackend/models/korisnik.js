'use strict';
module.exports = (sequelize, DataTypes) => {
  const Korisnik = sequelize.define('Korisnik', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Korisnik.associate = function(models) {
    // associations can be defined here
	  Korisnik.belongsTo(models.Dogadjaj, {
      foreignKey: 'inicijator',
      onDelete: 'CASCADE',
    });
	Korisnik.belongsTo(models.Promjena, {
      foreignKey: 'prijavio',
      onDelete: 'CASCADE',
    });
	Korisnik.belongsTo(models.Promjena, {
      foreignKey: 'odobrio',
      onDelete: 'CASCADE',
    });
	Korisnik.belongsTo(models.Promjena, {
      foreignKey: 'izvrsio',
      onDelete: 'CASCADE',
    });
	Korisnik.belongsTo(models.HistorijaPromjena, {
      foreignKey: 'napravioIzmjenu',
      onDelete: 'CASCADE',
    });
	Korisnik.hasOne(models.Uloga, {
      foreignKey: 'ulogaId',
      as: 'uloga',
    });
  };
  return Korisnik;
};