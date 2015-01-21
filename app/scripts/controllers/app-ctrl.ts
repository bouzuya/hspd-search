/// <reference path="../../../typings/angularjs/angular.d.ts" />

import HubotScriptService = require('../services/hubot-script-service');

class AppCtrl {
  static $inject = [
    '$scope',
    'HubotScriptService'
  ];

  loaded: boolean;
  scripts: Array<{}>;

  constructor(
    $scope : ng.IScope,
    HubotScriptService : HubotScriptService
  ) {
    this.loaded = false;
    this.scripts = [];

    HubotScriptService.findAll().then((scripts) => {
      this.loaded = true;
      this.scripts = scripts;
      $scope.$apply();
    });
  }
}

export = AppCtrl;
