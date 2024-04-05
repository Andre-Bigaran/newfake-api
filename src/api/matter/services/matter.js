'use strict';

/**
 * matter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::matter.matter');
