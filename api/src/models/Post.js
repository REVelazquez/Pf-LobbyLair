const {DataTypes} = require ('sequelize')

module.exports= (sequelize) =>{
    sequelize.define('Post', {
        id:{
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
            type: DataTypes.INTEGER
        },
        title:{
            type:DataTypes.STRING,
        },
        text:{
            type:DataTypes.STRING,
        }
    })
}