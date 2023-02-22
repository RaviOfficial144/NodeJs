const pool = require('../../config/database');

module.exports = {

    create:(data, callback) => {
     
        pool.query(
            `insert into registration(name,password,email)
            values(?,?,?)`
        
            [
                data.name,
                data.password,
                data.email
            ],
            (error,results,fields) => {
                if(error){
                   return callback(error);
                }
                return callback(null, results)
            }

            );
        
    }

};