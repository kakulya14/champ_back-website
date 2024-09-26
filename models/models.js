const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.INTEGER, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Schedule = sequelize.define('schedule', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    datetime: {type: DataTypes.STRING}
})

const Shop = sequelize.define('shop', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING}
})

Shop.sync()
    .then(() => {
        console.log('Модель синхронизирована с базой данных');
    })
    .catch((error) => {
        console.error('Ошибка синхронизации модели: ', error);
    });

const Vacancies = sequelize.define('vacancies', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.INTEGER},
    description: {type: DataTypes.STRING},
    // image: {type: DataTypes.BLOB}
})

const Blog = sequelize.define('blog', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING}
})

const UserSchedule = sequelize.define('user_schedule', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.belongsToMany(Schedule, {through: UserSchedule})
Schedule.belongsToMany(User, {through: UserSchedule})

module.exports = {
    User,
    Schedule,
    Shop,
    Vacancies,
    UserSchedule,
    Blog
}