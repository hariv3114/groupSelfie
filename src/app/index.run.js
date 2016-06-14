(function() {
  'use strict';

  angular
    .module('groupSelfie')
    .run(runBlock);

/** @ngInject */
  function runBlock(FormioAuth) {
    FormioAuth.init();
  }

})();
