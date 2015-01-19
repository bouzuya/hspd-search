/// <reference path="../../../typings/angularjs/angular.d.ts" />

export class AppCtrl {
  static $inject = [
    '$http'
  ];

  loaded: boolean;
  scripts: Array<{}>;

  constructor($http: ng.IHttpService) {
    this.loaded = false;
    this.scripts = [];

    var url = 'https://hspd-api.herokuapp.com/hubot_scripts';
    $http.get<Array<{}>>(url).then((res) => {
      this.loaded = true;
      this.scripts = res.data;
    });
  }
}
