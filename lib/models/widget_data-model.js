'use strict';

const Joi = require('@hapi/joi');
const { Model } = require('./helpers');

module.exports = class Widgetsdata extends Model {

    static get tableName() {

        return 'widget_data';
    }

    static get joiSchema() {

        return Joi.object({
            id: Joi.number().integer().greater(0),
            widget_id: Joi.number().integer().greater(0),
            chart_type: Joi.string(),
            no_of_fields: Joi.number().integer(),
            max_no_data_per_page: Joi.number().integer(),
            active: Joi.number().integer().min(0).max(1).required(),
            is_draggable: Joi.number().integer().min(0).max(1),
            is_resizeable: Joi.number().integer().min(0).max(1),
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
        });
    }

};