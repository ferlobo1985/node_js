const config = {
    production:{
        SECRET: process.env.SECRET,
        DATABASE:process.env.MONGODB_URI,
        PORT: process.env.PORT
    },
    default:{
        SECRET: 'SLDKF0DF8AD8GSC343434',
        DATABASE:'mongodb://localhost:27017/tgd_app',
        PORT: 3000
    }
} 

exports.get = function get(env){
    return config[env] || config.default
}