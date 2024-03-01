var pizzasTabClickHandler = function() {
    var images = document.getElementsByClassName('product-image1');
    images[0].src = 'img/Store-pizza-menu.svg';
    images[1].src = 'img/Store-pizza-peperoni.svg';
    images[2].src = 'img/Store-pizza-pastor.svg';
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
    images[0].src = 'img/Store-bebida-jamaica.svg';
    images[1].src = 'img/Store-bebida-Margarita.svg';
    images[2].src = 'img/Store-bebida-horchata.svg';
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
    images[0].src = 'img/Store-taco-pastor.svg';
    images[1].src = 'img/Store-taco-asada.svg';
    images[2].src = 'img/Store-taco-guacamole.svg';
});


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