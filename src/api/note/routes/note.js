'use strict';

/**
 * note router
 */

const { factories } = require('@strapi/strapi');

const sameUserGroupPolicyConfig = {
  name: 'plugin::multi-tenant.is-same-user-group',
  config: {
    contentType: 'api::note.note',
    attribute: 'workspace',
  },
}

module.exports = factories.createCoreRouter('api::note.note', {
  config: {
    create: {
      middlewares: [{
        name: "plugin::multi-tenant.add-same-user-group",
        config: {
          attribute: 'workspace' // find UserGroup on Workspace
        }
      }],
    },
    find: {
      middlewares: [{
        name: "plugin::multi-tenant.find-same-user-group",
        config: {
          attribute: 'workspace' // find UserGroup on Workspace
        }
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
