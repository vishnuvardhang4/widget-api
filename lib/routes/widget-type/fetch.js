'use strict'; 
 
const Helpers = require('../helpers');
const Joi = require('@hapi/joi');

module.exports = Helpers.withDefaults({
    method: 'get',
    path: '/widget-type',
    options: {
        auth: false,
        description: 'Get call status',
        tags: ['api', 'v1', 'salesforce', 'crm', 'get', 'call', 'status'],
        handler: async (request) => {
            const { widgettypeService } = await request.services();
            return widgettypeService.fetch();
        }
    }
});