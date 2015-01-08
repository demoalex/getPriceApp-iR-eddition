// Code goes here

angular.module('getPriceAppAdmin', [
  'ui.router',
  'ngCookies',
  'getPriceApp.common.services',
  'getPriceApp.common.models',
  'getPriceAppAdmin.controllers'
]).config(function($stateProvider, $urlRouterProvider) {

  /* Routes
   *******************************/
  
  $stateProvider
  .state('admin', {
    //abstract: true,
    url: '/admin',
    template: "<div class='container-fluid' ui-view></div><!-- /.container-fluid -->",
    //templateUrl: 'index.html',
    resolve: {
      user: ['authService','$q',function(authService, $q) {
        return authService.user || $q.reject({
          unAuthorized: true
        });
      }]
    }
  })
  .state('admin.pricelists', {
    url: '/pricelists',
    templateUrl: 'admprice.html',
    controller: 'PricelistController'
  })
  .state('admin.users', {
    url: '/users',
    templateUrl: 'admuser.html',
    controller: 'UserController'
  });

  $urlRouterProvider.otherwise('/admin/pricelists');
  //$locationProvider.html5Mode(true);
})
.run(function($rootScope, $location, $cookieStore, $state, authService) {

  $rootScope.$state = $state;
  
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    if (error.unAuthorized) {
      console.log('Unauthorized');
      window.location.href = "/";
    } else if (error.authorized) {
      console.log('Authorized');
      $state.go('admin.pricelists');
    }
  });

  authService.user = $cookieStore.get('user');

});

angular.module('getPriceAppAdmin').filter('percentage', ['$filter', function ($filter) {
  return function (input, decimals) {
    return $filter('number')(input * 100, decimals) + '%';
  };
}]);