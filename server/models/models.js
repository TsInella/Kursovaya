const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Users = sequelize.define('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING}
}
)

const Recommendations = sequelize.define('recommendations', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Movies = sequelize.define('movies', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    somelink: {type: DataTypes.STRING, allowNull: false},
    year: {type: DataTypes.INTEGER, allowNull: false}
})
const Favourites = sequelize.define('favourites', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Genres = sequelize.define('genres', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const Countries = sequelize.define('countries', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})
const Periods = sequelize.define('periods', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    dates: {type: DataTypes.STRING, allowNull: false}
})
const Directors = sequelize.define('directors', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const Info = sequelize.define('info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false}
})
Users.hasOne(Favourites)
Favourites.belongsTo(Users)

Users.hasOne(Recommendations)
Recommendations.belongsTo(Users)

Recommendations.hasMany(Movies)
Movies.belongsTo(Recommendations)

Favourites.hasMany(Movies)
Movies.belongsTo(Favourites)

Movies.hasMany(Info)
Info.belongsTo(Movies)

Movies.hasOne(Genres)
Genres.belongsTo(Movies)

Movies.hasOne(Countries)
Countries.belongsTo(Movies)

Movies.hasOne(Periods)
Periods.belongsTo(Movies)

Movies.hasOne(Directors)
Directors.belongsTo(Movies)

module.exports = {
    Users, Countries, Genres, Directors, Favourites, Periods, Info, Recommendations, Movies
}