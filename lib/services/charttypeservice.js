'use strict';

const Schmervice = require('schmervice');
const Boom = require('@hapi/boom');
const { val } = require('objection');

module.exports = class charttypeService extends Schmervice.Service {

    async fetch(query) {

        const { Widgetsdata } = this.server.models();
        try {
            const fetch = await Widgetsdata.query().select('chart_type');

            if (fetch.length > 0) {
                const output = {
                    'statusCode': 200,
                    'message': 'success',
                    'data': fetch
                };
                return output;
            } else {
                const output = {
                    'statusCode': 204,
                    'message': 'No content'
                };
                return output;
            }
        } catch (err) {
            console.log(err)
            if (err.username === 'badRequest') {
                const error = Boom.badRequest('failed');
                return error;
            } else {
                const error = Boom.badImplementation(err.message);
                return error;
            }
        }
    }

};
