'use strict';

const Helpers = require('../helpers');
const Joi=require('@hapi/joi');

module.exports = Helpers.withDefaults({
    method: 'post',
    path: '/widget',
    options: {
        validate: {
            payload: Joi.object({
                widget_id: Joi.number().integer().greater(0),
                chart_type: Joi.string(),
                no_of_fields: Joi.number().integer(),
                max_no_data_per_page: Joi.number().integer(),
                active: Joi.number().integer().min(0).max(1).required(),
                is_draggable: Joi.number().integer(),
                is_resizeable: Joi.number().integer(),
                width: Joi.number().integer().min(0),
                height: Joi.number().integer().min(0),
                min_width: Joi.number().integer().min(0),
                min_height: Joi.number().integer().min(0),
                position_top: Joi.number().integer().min(0),
                position_left: Joi.number().integer().min(0),
                zindex: Joi.number().integer(),
                axis: Joi.string(),
                parent_limit: Joi.number().integer().min(0).max(1),
                snap_to_grid: Joi.number().integer().min(0).max(1),
                aspect_ratio: Joi.number().integer().min(0).max(1),
                color: Joi.string(),
                component: Joi.string(),
                class: Joi.object(),
                refresh_rate: Joi.string(),
                backgroun_colors: Joi.object(),
                labels: Joi.object(),
            })
        },
        auth: false,
        description: 'post call status',
        tags: ['api', 'v1', 'salesforce', 'crm', 'get', 'call', 'status'],
        handler: async (request) => {
            const { widgetService } = await request.services();
            const output = widgetService.create(request.payload);
            return output;
        }
    }
});