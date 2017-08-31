(function(){
    var novoAppCantinas = angular.module('novoAppCantinas');

    novoAppCantinas.config(function($stateProvider){
        var c01 = {
            name: 'cantina01',
            url: '/cantina01',
            templateUrl: 'templates/cantina01.html',
            controller:'cantinaController as mv'
        };
        $stateProvider.state(c01);


    });
}());