'use strict';

const Schmervice = require('schmervice');
const Boom = require('@hapi/boom');
const { val } = require('objection');

module.exports = class WidgetService extends Schmervice.Service {

    async fetch() { //get widget data of widget

        const { Widgetsdata } = await this.server.models();

        try {
            const fetch = await Widgetsdata.query().select();

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

    async create(insertData) {

        const { Widgetsdata } = await this.server.models();

        try {
            const create = await Widgetsdata.query().insert(insertData);

            if (create.length > 0) {
                const output = {
                    'statusCode': 200,
                    'message': 'success',
                    'data': create
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
            if (err.username === 'badRequest') {
                const error = Boom.badRequest('failed');
                return error;
            } else {
                const error = Boom.badImplementation(err.message);
                return error;
            }
        }
    }
    async delete(query) {

        const { Widgetsdata } = await this.server.models();

        try {
            const del = await Widgetsdata.query().delete().where(query);

            if (del.length > 0) {
                const output = {
                    'statusCode': 200,
                    'message': 'success',
                    'data': del
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
            if (err.username === 'badRequest') {
                const error = Boom.badRequest('failed');
                return error;
            } else {
                const error = Boom.badImplementation(err.message);
                return error;
            }
        }
    }

    async update(data, query) {

        const { Widgetsdata } = this.server.models();

        try {
            const update = await Widgetsdata.query().update(data).where(query);

            if (update.length > 0) {
                const output = {
                    'statusCode': 200,
                    'message': 'success',
                    'data': update
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
