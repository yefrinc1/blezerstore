$(document).ready(function(){
    /**
    * Glight Slider
    */
    $('#slider1').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
            $('#slider1').removeClass('cS-hidden');
        }
    });

    $('#slider2').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
            $('#slider1').removeClass('cS-hidden');
        }
    });
});