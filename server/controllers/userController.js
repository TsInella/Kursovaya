const ApiError = require ('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const {Users, Recommendations, Favourites} = require('../models/models')

const generateJwt = (id, email, role)=>{
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}
class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if(!email || !password){
            return next(ApiError.badRequest(('нЕкорректнЫЙ email или паролЬ')))
        }
        const candidate = await Users.findOne({where: {email}})
        if (candidate){
            return next(ApiError.badRequest(('Пользователь с таким email уже существует!')))
        }
        const hashPassword = await bcrypt.hash(password,5)
        const users = await Users.create({email, role, password: hashPassword})
        const recommendations = await Recommendations.create({usersId: users.id})
        const favourites = await Favourites.create({usersId: users.id})
        const token = generateJwt(users.id,users.email, users.role)
        return res.json({token})
    }
    async login(req, res, next) {
        const {email, password} = req.body
        const users = await Users.findOne({where: {email}})
        if(!users){
            return next(ApiError.internal('ПОЛЬЗОВАТЕЛЬ НЕ НАЙДЕН!'))
        }
        let comparePassword = bcrypt.compareSync(password, users.password)
        if(!comparePassword){
            return next(ApiError.internal('Указан неверный пароль!'))
        }
        const token = generateJwt(users.id, users.email, users.role)
        return res.json({token})
    }
      async check(req, res, next) {
        const token = generateJwt(req.users.id, req.users.email, req.users.role)
        return res.json({token})
      }
}
module.exports = new UserController()