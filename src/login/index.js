'use strict';

module.exports = {
    templateUrl: 'views/login/login.html',
    bindings: {
        close: '<'
    },
    controller: function($cookies){
        var ctrl = this;
        
        ctrl.username = $cookies.get('username');

        ctrl.login = function(username) {
            if(username){
                $cookies.put('username', username);
                ctrl.close();
            }
        }

        ctrl.logout = function() {
            $cookies.remove('username');
            ctrl.close();
        }
    }
}
