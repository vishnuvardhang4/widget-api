'use strict'; 
 
const Helpers = require('../helpers');

module.exports = Helpers.withDefaults({
    method: 'get',
    path: '/widget',
    options: {
        auth: false,
        description: 'Get call status',
        tags: ['api', 'v1', 'salesforce', 'crm', 'get', 'call', 'status'],
        handler: async (request) => {
            const { widgetService } = await request.services();
            return widgetService.fetch();
        }
    }
});