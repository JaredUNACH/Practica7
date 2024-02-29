$(document).ready(function() {
    $('#carouselExampleIndicators').on('slid.bs.carousel', function() {
        var currentIndex = $('div.active').index();
        switch (currentIndex) {
            case 0:
                $('.header').css('background-color', '#FFDE59');
                break;
            case 1:
                $('.header').css('background-color', '#301613');
                break;
            case 2:
                $('.header').css('background-color', '#9DC135');
                break;
        }
    });
});