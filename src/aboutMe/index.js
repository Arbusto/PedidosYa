'use strict';

module.exports = {
    templateUrl: 'views/aboutMe/aboutMe.html',
    controller: function() {
        var ctrl = this;

        ctrl.inView = function(info) {
            if(info.inView){

            }
        };

        ctrl.mapStartingLocation = [-34.9011127, -56.16453139999999];
        ctrl.mapZoom = 12;
        ctrl.mapFavoritePlaces = [
            {
                position:[-34.89611797769711, -56.10210615218432],
                info: {content: "My House"}
            },
            {
                position:[-34.88443544427786, -56.15876810950931],
                info: {content: "El Gran Parque Central"}
            },
            {
                position:[-34.896366716441435, -56.07285837539371],
                info: {content: "Los Francesitos"}
            },
            {
                position:[-34.90212496382213, -56.13360478675537],
                info: {content: "El Fondito"}
            },
            {
                position:[-34.9040431337434, -56.20082094466858],
                info: {content: "Nobly Pos Mvd Office"}
            },
            {
                position:[-34.87368592053435, -56.02728470361399],
                info: {content: "My Aunt's house"}
            },
            {
                position:[-34.90299051684682, -56.136579365081786],
                info: {content: "Movie Mvd Shopping"}
            },
            {
                position:[-34.91837482905746, -56.15870564201964],
                info: {content: "Montevideo KnockOut"}
            },
            {
                position:[-34.91287192972269, -56.14796741822852],
                info: {content: "Best Friend's House"}
            },
            {
                position:[-34.89325027798547, -56.080170562063586],
                info: {content: "El Rey del Chivito"}
            }
        ];
    }
}
