'use strict';

/**
 * workspace controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::workspace.workspace');
