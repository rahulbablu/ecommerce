'use strict';

/**
 * userinfo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::userinfo.userinfo');
