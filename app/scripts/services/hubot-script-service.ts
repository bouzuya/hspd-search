/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/es6-promise/es6-promise.d.ts" />

export class HubotScriptService {
  static $inject = [
    '$http'
  ];

  $http : ng.IHttpService;

  constructor($http: ng.IHttpService) {
    this.$http = $http;
  }

  findAll(): Promise<Array<{}>> {
    return new Promise((resolve, reject) => {
      var url = 'https://hspd-api.herokuapp.com/hubot_scripts';
      this.$http.get<Array<{}>>(url).then((res) => {
        resolve(res.data);
      }, reject);
    });
  }
}
