/// <reference path="../../typings/angularjs/angular.d.ts" />

import AppController = require('./controllers/app-controller');
import HubotScriptService = require('./services/hubot-script-service');

angular
.module('app', [])
.service('HubotScriptService', HubotScriptService)
.controller('AppController', AppController);
