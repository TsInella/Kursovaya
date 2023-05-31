const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Users = sequelize.define('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

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

const FavouritesMovies = sequelize.define('favourites_movies', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
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

const MovieInfo = sequelize.define('info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false}
})
Users.hasOne(Favourites)
Favourites.belongsTo(Users)

Favourites.hasMany(FavouritesMovies)
FavouritesMovies.belongsTo(Favourites)

Users.hasOne(Recommendations)
Recommendations.belongsTo(Users)

Countries.hasMany(Movies)
Movies.belongsTo(Countries)

Periods.hasMany(Movies)
Movies.belongsTo(Periods)

Genres.hasMany(Movies)
Movies.belongsTo(Genres)

Directors.hasMany(Movies)
Movies.belongsTo(Directors)

Movies.hasMany(FavouritesMovies)
FavouritesMovies.belongsTo(Movies)


Movies.hasMany(MovieInfo, {as: 'info'});
MovieInfo.belongsTo(Movies)

module.exports = {
    Users, FavouritesMovies, Countries, Genres, Directors, Favourites, Periods, MovieInfo, Recommendations, Movies
}