(function(){

    var novoAppCantinas = angular.module('novoAppCantinas');

    var cantinaController = function($state) {
        var mv = this;

        mv.isShowCantina = false;

        mv.cantinas = [{
            name: 'Cantina Gourmet',
            smallImg: 'balcao01.jpg',
            logo: 'logocantina01.jpg',
            menu: [{
                item: 'Coxinha',
                price: 'R$ 2,00',
                image: 'coxinha.png'
            },{
                item: 'Refri',
                price: 'R$ 2,00',
                image: 'cocalata.png'
            },{
                item: 'Água',
                price: 'R$ 1,00',
                image: 'agua.png'
            },{
                item: 'Enroladinho de salsicha',
                price: 'R$ 2,00',
                image: 'enroladosalsicha.png'
            },{
                item: 'Suco',
                price: 'R$ 1,00',
                image: 'suco01.png'
            },{
                item: 'Café',
                price: 'R$ 0,50',
                image: 'cafe.png'
            }, {
                item: 'Tapioca',
                price: 'R$ 1,50',
                image: 'tapioca01.png'
            },{
                item: 'Bolo',
                price: 'R$ 2,00',
                image: 'bolo01.png'
            }]

        },{
            name: 'Saberes & Sabores',
            smallImg: 'balcao02.jpg',
            logo: 'logocantina02.jpg',
            menu: [{
                item: 'Café',
                price: 'R$ 0,50',
                image: 'cafe.png'
            },{
                item: 'Tapioca',
                price: 'R$ 1,50',
                image: 'tapioca01.png'
            }]
        },{
            name: 'Cantina Casa Verde',
            smallImg: 'balcao03.jpg',
            logo: 'logocantina03.png',
            menu: [{
                item: 'Água',
                price: 'R$ 1,00',
                image: 'agua.png'
            },{
                item: 'Bolo',
                price: 'R$ 2,00',
                image: 'bolo01.png'
            }]
        }];

        mv.carregarCantina = function(cantina){
            mv.cantinaClicada = cantina;
            mv.isShowCantina = true;
        };


    };


    cantinaController.$inject = ['$state'];

    novoAppCantinas.controller('cantinaController',cantinaController);

}());




