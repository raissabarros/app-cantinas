(function(){

    var novoAppCantinas = angular.module('novoAppCantinas');

    var cardControllerMenu = function($scope){
        $scope.imagePath = 'agua.png';
    }

    novoAppCantinas.$inject = ['$scope'];

    novoAppCantinas.controller('cardControllerMenu',cardControllerMenu);
}());