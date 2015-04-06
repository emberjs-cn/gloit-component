/* globals module */

module.exports = {
  afterInstall: function () {
    return this.addBowerPackageToProject('semantic-ui').then(function() {
             return self.addBowerPackageToProject('fontawesome');
           });
  },

  normalizeEntityName: function () {}
};
