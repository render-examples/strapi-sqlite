'use strict';

/**
 * whitelist service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::whitelist.whitelist');
