angular.module('getPriceAppAdmin.controllers', [])
.controller('UserController', function($scope, User, PRICE_TYPE_CLASS){
  var userID = 100;
  
  $scope.lbType = PRICE_TYPE_CLASS;
  
  $scope.user = { priceType: "Д+" };
  
  $scope.users = User.getAll();
  
  $scope.addUser = function(user){
    user.id = userID++;
    $scope.users.push(user);
    $scope.user = {priceType: "Д+"};
  };
  
  $scope.editUser = function(id){
    for (var i in $scope.users) {
          if ($scope.users[i].id === id) {
            user = $scope.users[i];
          }
        }
    // TODO implement User edit logic
    // rewrite using http://angular-ui.github.io/bootstrap/
  };
  
  $scope.removeUser = function(id){
    for (var i in $scope.users) {
          if ($scope.users[i].id === id) {
            user = $scope.users[i];
          }
        }
    // TODO implement User delete logic
  };
})
.controller('PricelistController', function($scope, Pricelist, PRICE_TYPE_CLASS){
  $scope.lbType = PRICE_TYPE_CLASS;
  
  $scope.pricelists = Pricelist.getAll();
});