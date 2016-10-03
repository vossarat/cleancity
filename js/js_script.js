$(document).ready(function(){
        /*        $.fn.fade_img = function (ops) {
        var $elem = this;
        var res = $.extend({ delay: 600, speed: 600 }, ops);
        for (var i=0, pause=0, l=$elem.length; i<l; i++, pause+=res.delay) {
        $elem.eq(i).delay(pause).fadeIn(res.speed);
        }
        return $elem;
        };
        $('.fade').fade_img();*/

        $("#button1").on("click", function() {
                $("#infobutton1").slideToggle();
            });

    });