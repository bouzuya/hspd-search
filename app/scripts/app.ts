/// <reference path="../../typings/angularjs/angular.d.ts" />

import controllers = require('./controllers/index');
import services = require('./services/index');

angular
.module('app', [])
.service('HubotScriptService', services.HubotScriptService)
.controller('AppCtrl', controllers.AppCtrl);
