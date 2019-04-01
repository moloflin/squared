require('dotenv').config()

module.exports.MSSQLconnection = dbConfig = {
    server: process.env.GH_DB_HOST,
    database: process.env.GH_DB_DBNAM,
    user: process.env.GH_DB_USER,
    password: process.env.GH_DB_PASS,
    port: 1433
}   