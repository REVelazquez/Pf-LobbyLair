const {DataTypes}=require ('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('User', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        email: {
          type: DataTypes.STRING,
          allowNull:false
        },
        isAdmin: {
          type: DataTypes.BOOLEAN,
          allowNull:false
        },
        password: {
          type: DataTypes.STRING,
          allowNull:false
        },
        isPremium: {
          type: DataTypes.BOOLEAN
        },
        name: {
          type: DataTypes.STRING,
          allowNull:false
        },
        perfilUrl: {
          type: DataTypes.STRING,
          allowNull: false
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE
        }
      });
    }