(function(){

    var novoAppCantinas = angular.module('novoAppCantinas');

    var headerController = function($scope) {
        var mv = this;
        mv.logo = {
            img: 'logo.png'
        };

        mv.perfilCantina = function(nomeDaCantina,imagemPerfil) {

        }
    };

    headerController.$inject = ['$scope'];

    novoAppCantinas.controller('headerController',headerController);

}());
