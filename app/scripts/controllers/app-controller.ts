/// <reference path="../../../typings/angularjs/angular.d.ts" />

import HubotScriptService = require('../services/hubot-script-service');

class AppController {
  static $inject = [
    '$scope',
    'HubotScriptService'
  ];

  loaded: boolean;
  query: string;
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
    });
  }
}

export = AppController;
