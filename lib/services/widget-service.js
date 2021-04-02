'use strict';

const Schmervice = require('schmervice');
const Boom = require('@hapi/boom');
const { val } = require('objection');

module.exports = class WidgetService extends Schmervice.Service {

    async fetch() { //get widget data of widget

        const { Widgets } = await this.server.models();

        try {
            const fetch = await Widgets.query().select('*').where({ id: 1 });
            for (const [key, value] of Object.entries(fetch[0])) {
                if (value === 0) {
                    fetch[0].key = true;
                }
            }
            const result = {
                statusCode: 200,
                message: "Success",
                data: fetch[0].class
            }
            return result;
        }
        catch (err) {
            console.log("Error -----xx---", err)
            const error = Boom.badImplementation('failed');
            return error;
        }
    }
};
