$(document).ready(function(){
        $.fn.fade_img = function (ops) {
            var $elem = this;
            var res = $.extend({ delay: 600, speed: 600 }, ops);
            for (var i=0, pause=0, l=$elem.length; i<l; i++, pause+=res.delay) {
                $elem.eq(i).delay(pause).fadeIn(res.speed);
            }
            return $elem;
        };
        $('.fade').fade_img();

        $("#button1").on("click", function() {
                slide_hide();
                $("#infobutton1").slideDown("slow");
            });

        $("#button2").on("click", function() {
                slide_hide();
                $("#infobutton2").slideDown("slow");
            });

        $("#button3").on("click", function() {
                slide_hide();
                $("#infobutton3").slideDown("slow");
            });

        $("#button4").on("click", function() {
                slide_hide();
                $("#infobutton4").slideDown("slow");

            });

        $("#button5").on("click", function() {
                slide_hide();
                $("#infobutton5").slideDown("slow");
            });

        function slide_hide() {
            $("#infobutton1").slideUp("slow");
            $("#infobutton2").slideUp("slow");
            $("#infobutton3").slideUp("slow");
            $("#infobutton4").slideUp("slow");
            $("#infobutton5").slideUp("slow");
        };


    });