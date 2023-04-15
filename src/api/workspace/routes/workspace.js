'use strict';

/**
 * workspace router
 */

const { factories } = require('@strapi/strapi');

const sameUserGroupPolicyConfig = {
  name: 'plugin::multi-tenant.is-same-user-group',
  config: {
    contentType: 'api::workspace.workspace',
  },
}

module.exports =  factories.createCoreRouter('api::workspace.workspace', {
  config: {
    create: {
      middlewares: [{
        name: "plugin::multi-tenant.add-same-user-group",
        config: {}
      }],
    },
    find: {
      middlewares: [{
        name: "plugin::multi-tenant.find-same-user-group",
        config: {}
      }],
    },
    update: {
      policies: [sameUserGroupPolicyConfig],
    },
    delete: {
      policies: [sameUserGroupPolicyConfig],
    },
    findOne: {
      policies: [sameUserGroupPolicyConfig],
    },
  },
})