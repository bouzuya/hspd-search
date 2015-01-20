/// <reference path="../../typings/angularjs/angular.d.ts" />

import controllers = require('./controllers/index');

angular
.module('app', [])
.controller('AppCtrl', controllers.AppCtrl);
