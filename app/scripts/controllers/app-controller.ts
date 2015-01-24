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
  limit: number;

  constructor(
    $scope : ng.IScope,
    HubotScriptService : HubotScriptService
  ) {
    this.loaded = false;
    this.scripts = [];
    this.limit = 4;

    HubotScriptService.findAll().then((scripts) => {
      this.loaded = true;
      this.scripts = scripts;
    });
  }

  more(): void {
    var count = Math.min(this.limit + 10, this.scripts.length);
    this.limit = count;
  }
}

export = AppController;
