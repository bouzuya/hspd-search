/// <reference path="../../../typings/angularjs/angular.d.ts" />

import services = require('../services/hubot-script-service');

export class AppCtrl {
  static $inject = [
    '$scope',
    'HubotScriptService'
  ];

  loaded: boolean;
  scripts: Array<{}>;

  constructor(
    $scope : ng.IScope,
    HubotScriptService : services.HubotScriptService
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
