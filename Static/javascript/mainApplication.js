var mainApplication = angular.module('mainApplication', ['ngRoute', 'ngAnimate']);
  
mainApplication.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
      $routeProvider.
        when('/', {
            templateUrl: '/Content/Home',
            controller: 'HomePageController'
        })
        .when('/Home', {
            templateUrl: '/Content/Home',
            controller: 'HomePageController'
        }).
        when('/HowThisWebSiteWorks', {
            templateUrl: 'templates/howthiswebsiteworks.html',
            controller: 'HowThisWebSiteWorksController'
        }).
        when('/Contacts', {
            templateUrl: '/Content/Contacts',
            controller: 'ContactsController'
        }).
        when('/Master', {
            templateUrl: '/Content/Master',
            controller: 'MasterController'
        }).
        when('/SystemIntegration', {
            templateUrl: '/Content/Integration',
            controller: 'SystemIntegrationController'
        }).
        when('/CCplusplus', {
            templateUrl: '/Content/CPlusPlus',
            controller: 'CCplusplusController'
        }).
        when('/Java', {
            templateUrl: '/Content/Java',
            controller: 'JavaController'
        }).
        when('/FrontEndDevelopment', {
            templateUrl: '/Content/FrontEnd',
            controller: 'FrontEndDevelopmentController'
        }).
        when('/DotNet', {
            templateUrl: '/Content/DotNet',
            controller: 'DotNetController'
        });

      $locationProvider.html5Mode(true);
  }]);
  
  
mainApplication.controller('HeaderController', function($scope, $location) {
	$scope.$on('changeClass', function(event, data) { 
		document.getElementsByTagName("header")[0].className = data;
	});
	
	var url = $location.url();
	switch(url){
		case "/Home": $scope.headerClass="home"; break;
		case "/HowThisWebSiteWorks": $scope.headerClass="howthiswebsiteworks"; break;
		case "/Contacts": $scope.headerClass="contacts"; break;
	}
});  
  
mainApplication.controller('HomePageController', function($scope, $rootScope) {
    $scope.pageClass = 'home';
	$rootScope.$broadcast('changeClass', 'home');
});
 

mainApplication.controller('HowThisWebSiteWorksController', function($scope, $rootScope) {
    $scope.pageClass = 'howthiswebsiteworks';
	$rootScope.$broadcast('changeClass', 'howthiswebsiteworks');
});

mainApplication.controller('ContactsController', function($scope, $rootScope) {
    $scope.pageClass = 'contacts';
	$rootScope.$broadcast('changeClass', 'contacts');
});






mainApplication.controller('CCplusplusController', function($scope, $rootScope) {
    $scope.pageClass = 'carrerstep cplusplus';
	$rootScope.$broadcast('changeClass', 'carrerstep cplusplus');
});

mainApplication.controller('JavaController', function($scope, $rootScope) {
    $scope.pageClass = 'carrerstep java';
	$rootScope.$broadcast('changeClass', 'carrerstep java');
});

mainApplication.controller('FrontEndDevelopmentController', function($scope, $rootScope) {
    $scope.pageClass = 'carrerstep frontend';
	$rootScope.$broadcast('changeClass', 'carrerstep frontend');
});

mainApplication.controller('DotNetController', function($scope, $rootScope) {
    $scope.pageClass = 'carrerstep dotnet';
	$rootScope.$broadcast('changeClass', 'carrerstep dotnet');
});

mainApplication.controller('MasterController', function($scope, $rootScope) {
    $scope.pageClass = 'carrerstep master';
	$rootScope.$broadcast('changeClass', 'carrerstep master');
});

mainApplication.controller('SystemIntegrationController', function($scope, $rootScope) {
    $scope.pageClass = 'carrerstep systemintegration';
	$rootScope.$broadcast('changeClass', 'carrerstep systemintegration');
});
