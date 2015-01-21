/// <reference path="../../typings/angularjs/angular.d.ts" />

import AppCtrl = require('./controllers/app-ctrl');
import HubotScriptService = require('./services/hubot-script-service');

angular
.module('app', [])
.service('HubotScriptService', HubotScriptService)
.controller('AppCtrl', AppCtrl);
