angular.module('getPriceApp.common.services', [])
  .factory('authService',
    function(AUTH_ENDPOINT, LOGOUT_ENDPOINT, $http, $cookieStore, $q) {

      var auth = {};

      // Real
      auth.login = function(email, password) {
        return $http.post(AUTH_ENDPOINT, {
          email: email,
          password: password
        }).then(function(response, status) {
          auth.user = response.data;
          $cookieStore.put('user', auth.user);
          return auth.user;
        });
      };

      auth.logout = function() {
        return $http.post(LOGOUT_ENDPOINT).then(function(response) {
          auth.user = undefined;
          $cookieStore.remove('user');
        });
      };

      // Mock -- remove or comment after real service code is written
      auth.login = function(email, password) {
        return $q(function(resolve, reject) {
          setTimeout(function() {
            if (email === "a@a.a" && password === "admin") {
              auth.user = {
                email: "a@a.a",
                name: "Vasya",
                priceType: "VIP"
              };
              $cookieStore.put('user', auth.user);
              resolve(auth.user);
            } else 
              reject("Wrong email and/or password");
          }, 100);
        });
      };

      auth.logout = function() {
        auth.user = undefined;
        $cookieStore.remove('user');
        return $q(function(resolve, reject){
          auth.user = undefined;
          $cookieStore.remove('user');
          
          resolve('OK');
        });
      };
      

      return auth;
    }
);

angular.module('getPriceApp.common.services').value('AUTH_ENDPOINT',
  'http://spblogger-sitepointdemos.rhcloud.com/login');
angular.module('getPriceApp.common.services').value('LOGOUT_ENDPOINT',
  'http://spblogger-sitepointdemos.rhcloud.com/logout');
  
angular.module('getPriceApp.common.services').value('PRICE_TYPE_CLASS',
  {
    "Д+": "primary",
    "VIP": "success",
    "Аксы": "warning"
  });