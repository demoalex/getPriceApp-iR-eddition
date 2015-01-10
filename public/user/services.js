angular.module('getPriceApp.services', [])
  .factory('pricelistService',
    function(Pricelist, AUTH_ENDPOINT, LOGOUT_ENDPOINT, $http, $cookieStore, $q) {

      var factory = {};
      // Real


      // Mock -- remove or comment after real service code is written
      factory.getPricelists = function(user) {
        return $q(function(resolve, reject) {
          setTimeout(function() {
            if (user.priceType === "Д+") resolve([{
              type: "Д+",
              token: "5f039b4ef0058a1d652f13d612375a5b",
              filename: "iR Д+ 29.12.xls"
            }, {
              type: "Аксы",
              token: "5efd57788cff4443240a955daec6d3e3",
              filename: "iR Аксы 29.12.xls"
            }]);
            else if (user.priceType === "VIP") resolve([{
              type: "VIP",
              token: "9bf23ef4357341df8c84bb00d62bd941",
              filename: "iR VIP 29.12.xls"
            }, {
              type: "Аксы",
              token: "5efd57788cff4443240a955daec6d3e3",
              filename: "iR Аксы 29.12.xls"
            }]);
            else resolve([{
              type: "Аксы",
              token: "5efd57788cff4443240a955daec6d3e3",
              filename: "iR Аксы 29.12.xls"
            }]);
          }, 200);
        });
      };

      factory.downloadPricelist = function(token) {
        window.location.href = '/';
      };
      
      return factory;
    }
  );

angular.module('getPriceApp.services').value('AUTH_ENDPOINT',
  'http://spblogger-sitepointdemos.rhcloud.com/login');
angular.module('getPriceApp.services').value('LOGOUT_ENDPOINT',
  'http://spblogger-sitepointdemos.rhcloud.com/logout');