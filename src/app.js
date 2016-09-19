'use strict';
require('angular');

var app = angular.module('PedidosYa', /*@ngInject*/[
    require('angular-google-maps-native-npm'),
    require('ng-dialog'),
    require('angular-cookies'),
    require('angular-inview').name // npm-module exports the module object, so requiring the module's name property is needed to make it work with browserify
]);

app.config( /*@ngInjects*/ function($locationProvider, gmLibraryProvider) {
	$locationProvider
	.html5Mode({
		enabled: true,
		requireBase: false
	});

    gmLibraryProvider.configure({
        key: 'AIzaSyC5qOcssNjYFfzsYRPMWGuVRKyznM4ilb0'
    });
});

app.run(function($rootScope) {
    $rootScope.inView = function (info, url) {
        if(info.inView){
            $rootScope.$broadcast('inView', url);
        }
    }
});

app.component('navigation', require('./navigation'));
app.component('home', require('./home'));
app.component('aboutMe', require('./aboutMe'));
app.component('googleMap', require('./map'));
app.component('topHtml', require('./topHtml'));
app.component('topCss', require('./topCss'));
app.component('topOptim', require('./topOptim'));
app.component('login', require('./login'));

app.directive('setNavActive', require('./directives').setNavActive);
