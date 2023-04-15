'use strict';

/**
 * workspace service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::workspace.workspace');
