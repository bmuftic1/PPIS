'use strict';
module.exports = (sequelize, DataTypes) => {
  const PrioritetPromjene = sequelize.define('PrioritetPromjene', {
    prioritetPromjene: DataTypes.STRING
  }, {});
  PrioritetPromjene.associate = function(models) {
    // associations can be defined here
	PrioritetPromjene.belongsTo(models.Promjena, {
      foreignKey: 'prioritetPromjeneId',
      onDelete: 'CASCADE',
    });
  };
  return PrioritetPromjene;
};