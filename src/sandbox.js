/*
## sandbox
NodeJs sandbox class that is simualr to angularjs

//app/scripts/app.js

```
import router from './router';
export var app = angular.module('es6PredixApp', ['ngRoute']);
export function bootstrap(){
	router(app);
	angular.element(document).ready(function() {
		console.warn('Bootstrapping es6 app', app);
		angular.bootstrap(document, [app.name]);
	});
}
```


//app/scripts/router.js

import {HomeController} from 'controllers/home';
import {Page1Controller} from 'controllers/page1';
import {Page2Controller} from 'controllers/page2';
import {DataService} from 'services/dataservice';

export default function mount(module){
	console.warn('mounting routes on', module.name);
	module.controller('HomeController', HomeController);
	module.controller('Page1Controller', Page1Controller);
	module.controller('Page2Controller', Page2Controller);
	module.service('DataService', DataService);
	module.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				redirectTo: '/home'
			})
			.when('/home', {
				templateUrl: 'views/home.html',
				controller: 'HomeController'
			})
			.when('/page1', {
				templateUrl: 'views/page1.html',
				controller: 'Page1Controller'
			})
			.when('/page2', {
				templateUrl: 'views/page2.html',
				controller: 'Page2Controller'
			})
			.otherwise({
				redirectTo: '/home'
			});
	}]);
}


//app/scripts/controllers/home.js
export class HomeController {
	constructor($scope, DataService) {
		$scope.name = 'Home';
		$scope.feature = {
			title : 'ES6 AngularJS',
			body : 'Use this to quickly start a new AngularJS & ES6 project.'
		};

		$scope.features = [{
			title : 'ECMAScript 6',
			body : 'Using the latest version of ESnext prepare for the future!'
		}, {
			title : 'AngularJS',
			body : 'Using AngularJS as the foundation for single page apps.'
		}, {
			title : 'HTML5',
			body : 'Using HTML5 for a better user experience on all platforms.'

		}];

		console.log('HomeController constructor', this);

		DataService.fetch('https://passbook-manager.jsapps.io/api/v1/passes');
	}
	name() {
		return "World!!!";
	}
}


//app/scripts/controllers/page1.js
export class Page1Controller {
	constructor($scope) {
		$scope.name = 'Page 1';
		console.log('Page1Controller constructor', this);
	}
	get name() {
		return "Page 1";
	}
}

//app/scripts/controllers/page2.js
export class Page2Controller {
	constructor($scope) {
		$scope.name = 'Page 2';
		console.log('Page2Controller constructor', this);
	}
	get name() {
		return "Page 2";
	}
}


//app/scripts/services/dataservice.js
export class DataService {
	constructor($rootScope, $http, $q, $log) {
		$log.info('DataService constructor', this);
		this.$http = $http;
	}
	fetch(url){
		return this.$http.jsonp(url, {params: {callback: 'JSON_CALLBACK'}});
	}
}


const app = sandbox.module('learningYeomanCh3App', [
  'express',
  'models'
])
  .controller('PostsCtrl', ['$scope', 'posts', function($scope, $location, posts) {
      $scope.name = 'Posts';
      $scope.posts = posts;
      $scope.add = function() {
        return $location.path('/posts/new');
      };
      $scope.view = function(id) {
        return $location.path('/posts/view/' + id);
      };
      return $scope.edit = function(id) {
        return $location.path('/posts/edit/' + id);
      };
    }
  ])
;




*/
