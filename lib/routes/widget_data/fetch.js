'use strict';

const Helpers = require('../helpers');

module.exports = Helpers.withDefaults({
    method: 'get',
    path: '/widget',
    options: {
        handler: async (request) => {

            const { widgetService } = await request.services();
            return widgetService.fetch();
        }
    }
});