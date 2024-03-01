var pizzasTabClickHandler = function() {
    var images = document.getElementsByClassName('product-image1');
    images[0].src = 'img/Store-pizza-menu.png';
    images[1].src = 'img/Store-pizza-peperoni.png';
    images[2].src = 'img/Store-pizza-cham.png';
};

document.getElementById('pizzas-tab').addEventListener('click', pizzasTabClickHandler);

// Llama a la función para cargar las imágenes de las pizzas cuando se carga la página
pizzasTabClickHandler();

document.getElementById('bebidas-tab').addEventListener('click', function() {
    var pizzaImages = document.getElementsByClassName('product-image1');
    for (var i = 0; i < pizzaImages.length; i++) {
        pizzaImages[i].src = '';
    }

    var images = document.getElementsByClassName('product-image2');
    images[0].src = 'img/Store-bebida-cocktail.png';
    images[1].src = 'img/Store-bebida-Margarita.png';
    images[2].src = 'img/Store-bebida-horchata.png';
});

document.getElementById('tacos-tab').addEventListener('click', function() {
    var pizzaImages = document.getElementsByClassName('product-image1');
    for (var i = 0; i < pizzaImages.length; i++) {
        pizzaImages[i].src = '';
    }

    var drinkImages = document.getElementsByClassName('product-image2');
    for (var i = 0; i < drinkImages.length; i++) {
        drinkImages[i].src = '';
    }

    var images = document.getElementsByClassName('product-image3');
    images[0].src = 'img/Store-taco-pastor.png';
    images[1].src = 'img/Store-taco-cho.png';
    images[2].src = 'img/Store-taco-guacamole.png';
});


$(document).ready(function() {
    $('#carouselExampleIndicators').on('slid.bs.carousel', function() {
        var currentIndex = $('div.active').index();
        switch (currentIndex) {
            case 0:
                $('.header, .footer').css('background-color', '#FFDE59');
                break;
            case 1:
                $('.header, .footer').css('background-color', '#301613');
                break;
            case 2:
                $('.header, .footer').css('background-color', '#9DC135');
                break;
        }
    });
});