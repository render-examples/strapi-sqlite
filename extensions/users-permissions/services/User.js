'use strict';

module.exports = {
   /**
   * Promise to fetch authenticated user.
   * @return {Promise}
   */
   fetchAuthenticatedUser(id) {
    return strapi.query('user', 'users-permissions').findOne({ id }, ['role', 'stores', 'stores.files']);
   },
}
