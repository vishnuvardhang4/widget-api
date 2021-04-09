'use strict';

const Schmervice = require('schmervice');
const Boom = require('@hapi/boom');
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "asterisk",
    database: "dashboard"
});


module.exports = class ColumnsService extends Schmervice.Service {

    fetch(query) {

        return new Promise((resolve, reject) => {
            // `${params.template_name}`
            con.connect((err) => {

                if (err) {
                    const error = Boom.badRequest('failed');
                    resolve({ error });
                }

                let sql = `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA='dashboard' AND TABLE_NAME='${query.table_name}'`;
                con.query(sql, (err, result) => {
                    for (let i = 0; i < result.length; i++) {

                        result[i] =
                        {
                            name: result[i].COLUMN_NAME.split('_').join(' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()),
                            value: result[i].COLUMN_NAME,
                        };
                    }
                    if (!err) {
                        if (result.length > 0) {
                            const output = {
                                'statusCode': 200,
                                'message': 'success',
                                'data': result
                            };
                            resolve({ output });
                        }
                        else {
                            const output = {
                                'statusCode': 204,
                                'message': 'No data'
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
