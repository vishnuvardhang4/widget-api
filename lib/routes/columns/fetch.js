'use strict'; 

const Helpers = require('../helpers');
const Joi=require('@hapi/joi');
 
module.exports = Helpers.withDefaults({
    method: 'get',
    path: '/columns',
    options: {
        validate: {
            query: Joi.object({
                table_name: Joi.string().required()
            })
        },
        auth: false,
        description: 'Get call status',
        tags: ['api', 'v1', 'salesforce', 'crm', 'get', 'call', 'status'],
        handler: async (request,h) => {
            const { columnsService } = await request.services();
            const output = columnsService.fetch(request.query);
            if (output.statusCode === 204) {
                const response = h.response();
                response.code(204);
                return response;
            } else {
                return output;
            }
        }
    }
});
