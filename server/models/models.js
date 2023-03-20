const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING}
}
)

const Recommendations = sequelize.define('recommendations', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Movie = sequelize.define('movie', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
    image: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    link: {type: DataTypes.TEXT, allowNull: false},
    year: {type: DataTypes.INTEGER, allowNull: false}
})
const Favourite = sequelize.define('favourite', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Genre = sequelize.define('genre', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const Country = sequelize.define('country', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})
const Period = sequelize.define('period', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    dates: {type: DataTypes.STRING, allowNull: false}
})
const Director = sequelize.define('director', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const Info = sequelize.define('info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false}
})
User.hasOne(Favourite)
Favourite.belongsTo(User)

User.hasOne(Recommendations)
Recommendations.belongsTo(User)

Recommendations.hasMany(Movie)
Movie.belongsTo(Recommendations)

Favourite.hasMany(Movie)
Movie.belongsTo(Favourite)

Movie.hasMany(Info)
Info.belongsTo(Movie)

Movie.hasOne(Genre)
Genre.belongsTo(Movie)

Movie.hasOne(Country)
Country.belongsTo(Movie)

Movie.hasOne(Period)
Period.belongsTo(Movie)

Movie.hasOne(Director)
Director.belongsTo(Movie)

module.exports = {
    User, Country, Genre, Director, Favourite, Period, Info, Recommendations, Movie
}