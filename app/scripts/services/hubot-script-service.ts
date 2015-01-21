/// <reference path="../../../typings/angularjs/angular.d.ts" />

class HubotScriptService {
  static $inject = [
    '$http',
    '$q'
  ];

  $http : ng.IHttpService;
  $q : ng.IQService;

  constructor(
    $http: ng.IHttpService,
    $q: ng.IQService
  ) {
    this.$http = $http;
    this.$q = $q;
  }

  findAll(): ng.IPromise<Array<{}>> {
    // NOTE: new ??? See angular.d.ts
    return new this.$q((resolve, reject) => {
      var url = 'https://hspd-api.herokuapp.com/hubot_scripts';
      this.$http.get<Array<{}>>(url).then((res) => {
        resolve(res.data);
      }, reject);
    });
  }
}

export = HubotScriptService;
