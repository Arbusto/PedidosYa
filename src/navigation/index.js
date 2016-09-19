'use strict';

module.exports = {
    templateUrl: 'views/navigation/nav.html',
    controller: function($anchorScroll, ngDialog) {
        var ctrl = this;

        ctrl.goTo = function(url) {
            $anchorScroll(url);
        }

        ctrl.login = function() {
            ngDialog.open({
                template: '<login close="close"></login>',
                plain: true,
                className: 'ngdialog-theme-default',
                controller: function($scope){
                    $scope.close = $scope.closeThisDialog;
                }
            });
        }
    }
}
