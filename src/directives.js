var setNavActive = function($location){
	return {
		restrict: 'A',
		link: function(scope, iElem, iAttr, $rootScope) {
            scope.$root.$on('inView', function(event, url){
                $location.path('/'+ url);
                $location.state(url);

                var navItems = document.querySelectorAll('.navigation li a');
                angular.element(navItems).removeClass('active');

                var activeNavItem = document.querySelectorAll("[data-location='"+url+"']");
                angular.element(activeNavItem[0]).addClass('active');
            })
        }
	}
};

module.exports = {
    setNavActive: setNavActive
}
