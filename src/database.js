const mysql = require("mysql");
const {promisify} =require('util');

const {database} = require('./keys');
const { connect } = require("./routes");

const pool = mysql.createPool(database);

pool.getConnection((err,connection) =>{
    if(err){
        if(err.code==='PROTOCOL_CONNECTION_LOST'){
            console.error('Database connection closed');
        }
        if(err.code==='ER_CON_COUNT_ERROR'){
            console.error('Database has too many connections');
        }
        if(err.code==='ECONNREFUSED'){
            console.error('Database connection was refused');
        }
    }
    if(connection) connection.release();
    console.log('DB is Connected');
});

//promisify pool queries
pool.query=promisify(pool.query);
module.exports = pool;