'use strict'; 

const Helpers = require('../helpers');

module.exports = Helpers.withDefaults({
    method: 'get',
    path: '/tabledata',
    options: {
        auth: false,
        description: 'Get call status',
        tags: ['api', 'v1', 'salesforce', 'crm', 'get', 'call', 'status'],
        handler: async (request,h) => {
            const { tableDataService } = await request.services();
            const output = tableDataService.fetch();
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