'use strict';

const Joi = require('@hapi/joi');
const { Model } = require('./helpers');

module.exports = class Widgets extends Model {

    static get tableName() {

        return 'widget_data';
    }

    static get joiSchema() {

        return Joi.object({
            id: Joi.number().integer().greater(0),
            name: Joi.string(),
            strategy: Joi.string(),
            account_code: Joi.number(),
            wrapuptime: Joi.number(),
            timeout: Joi.number()
        });
    }

};