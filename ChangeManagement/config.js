module.exports = {

    port: process.env.PORT || 3000,

    env: process.env.ENVIRONMENT || 'development',

    mongo: 'mongodb://localhost:27017/ChangeManagement'

}