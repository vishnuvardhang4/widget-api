'use strict'; 

const Helpers = require('../helpers');
const Joi = require('@hapi/joi');

module.exports = Helpers.withDefaults({
    method: 'get',
    path: '/chart-type',
    options: {
        auth: false,
        description: 'Get call status',
        tags: ['api', 'v1', 'salesforce', 'crm', 'get', 'call', 'status'],
        handler: async (request) => {
            const { charttypeService } = await request.services();
            return charttypeService.fetch();
        }
    }
});