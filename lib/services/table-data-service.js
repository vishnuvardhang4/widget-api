'use strict';

const Schmervice = require('schmervice');
const Boom = require('@hapi/boom');
// const { val } = require('objection');
// const Knex = require('knex');
// const { QueryBuilder } = require('objection');

var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "asterisk",
    database: "dashboard"
});


module.exports = class TableDataService extends Schmervice.Service {

    fetch() {

        return new Promise((resolve, reject) => {

            con.connect((err) => {
 
                if (err) {
                    const error = Boom.badRequest('failed');
                    resolve({ error });
                }
                let sql = "SELECT table_name FROM information_schema.tables WHERE table_schema = 'dashboard' AND TABLE_NAME NOT LIKE 'knex%'";

                console.log(sql);
                con.query(sql, (err, result) => {

                    console.log(err);
                    if (!err) {
                        if (result.length > 0) {
                            const output = {
                                'statusCode': 200,
                                'message': 'success',
                                'data': result
                            };
                            resolve({ output });
                            console.log(result);
                        }
                        else {
                            const output = {
                                'statusCode': 204,
                                'message': 'No Content'
                            };
                            resolve({ output });
                        }
                    }
                    else {
                        const output = {
                            'statusCode': 204,
                            'message': 'No Content'
                        };
                        resolve({ output });
                    }
                });
            });
        });
    }

};


