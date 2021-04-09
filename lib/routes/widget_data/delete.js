'use strict';

const Helpers = require('../helpers');
const Joi=require('@hapi/joi');

module.exports = Helpers.withDefaults({
    method: 'delete',
    path: '/widget/{id}',
    options: {
        validate: {
            params: Joi.object({
                id: Joi.number().required()
            })
        },
        auth: false,
        description: 'Get call status',
        tags: ['api', 'v1', 'salesforce', 'crm', 'get', 'call', 'status'],
        handler: async (request, h) => {
            const { widgetService } = await request.services();
            const output = await widgetService.delete(request.params);
            if (output.statusCode === 204) {
                const response = h.response();
                response.code(204);
                return response;
            }
            return output;
        }
    }
});