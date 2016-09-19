'use strict';

module.exports = {
    templateUrl: 'views/topHtml/topHtml.html',
    controller: function() {
        var ctrl = this;

        ctrl.playVideo = function(info) {
            var video = info.element[0];
            video.play();
        }
    }
}
