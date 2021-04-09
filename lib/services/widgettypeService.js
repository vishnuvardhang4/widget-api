'use strict';

const Schmervice = require('schmervice');
const Boom = require('@hapi/boom');
const { val } = require('objection');

module.exports = class widgettypeService extends Schmervice.Service {

    async fetch() {

        const { Widgets } = this.server.models();
        try {
            const fetch = await Widgets.query().select('name');

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
