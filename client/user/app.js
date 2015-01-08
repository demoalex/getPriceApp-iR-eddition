// Code goes here

angular.module('getPriceApp', [
    //'getPrice.routes',
    'ngRoute',
    'ngCookies',
    'getPriceApp.services',
    'getPriceApp.common.services',
    'getPriceApp.common.models'
  ]).config(function($routeProvider, $locationProvider) {

    /* Routes
     *******************************/

    $routeProvider.when('/login', {
      controller: 'LoginController',
      templateUrl: 'user/login.html',
      resolve: {
        user: ['authService', '$q', function(authService, $q) {
          if (authService.user) {
            return $q.reject({
              authorized: true
            });
          }
        }]
      }
    }).when('/download-price', {
      controller: 'DownloadController',
      templateUrl: 'user/dlprice.html',
      resolve: {
        user: ['authService', '$q', function(authService, $q) {
          return authService.user || $q.reject({
            unAuthorized: true
          });
        }]
      }
    }).otherwise({
      redirectTo: '/login'
    });

  })
  .run(function($rootScope, $location, $cookieStore, authService) {

    $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
      if (rejection.unAuthorized) {
        $location.path("/");
      }
      else if (rejection.authorized) {
        $location.path('/download-price');
      }
    });

    authService.user = $cookieStore.get('user');

  })
  .controller('LoginController', function($scope, authService, $location) {

    $scope.buttonText = "Войти";

    $scope.login = function() {

      $scope.buttonText = "Подключаемся . . .";

      authService.login($scope.credentials.email, $scope.credentials.password).then(function(data) {
        $location.path("/download-price");
      }, function(err) {
        $scope.invalidLogin = true;
      }).
      finally(function() {
        $scope.buttonText = "Войти";
      });
    };

  })
  .controller('DownloadController', function(PRICE_TYPE_CLASS, $scope, $location, authService, pricelistService) {

    $scope.pricelists = [];
    $scope.btnType = PRICE_TYPE_CLASS;
    
    pricelistService.getPricelists(authService.user).then(function(data) {
      $scope.pricelists = data;
    }, function(err) {
      console.err(err);
    });

    $scope.downloadPricelist = pricelistService.downloadPricelist;

    $scope.logout = function() {
      authService.logout().then(function() {
        $location.path("/");
      });
    };

  });