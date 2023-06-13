const {DataTypes} = require ('sequelize')

module.exports= (sequelize) =>{
    sequelize.define('Game', {
        id:{
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
            type: DataTypes.INTEGER
        },
        gameMode:{
            type:DataTypes.ARRAY,
            allowNull:false
        },
        genres:{
            type:DataTypes.ARRAY,
            allowNull:false
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        
    })
}