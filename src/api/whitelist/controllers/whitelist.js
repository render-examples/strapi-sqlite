'use strict';

/**
 *  whitelist controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::whitelist.whitelist');
