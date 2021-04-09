'use strict';

const Joi = require('@hapi/joi');
const { Model } = require('./helpers');
 
module.exports = class Widgets extends Model {

    static get tableName() {

        return 'widgets';
    }

    static get joiSchema() {

        return Joi.object({
            id: Joi.number().integer().greater(0),
            name: Joi.string(),
            type: Joi.string(),
            xaxis_column: Joi.string(),
            yaxis_column: Joi.string(),
            tenant_code: Joi.string(),
            is_shown_on_dashboard: Joi.number().integer()
        });
    }

};