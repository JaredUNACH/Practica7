$(document).ready(function() {
    $('input[name="pack-size"]').change(function() {
        if ($(this).val() === 'large') {
            $(this).closest('.product-container').find('.product-image').addClass('large');
        } else {
            $(this).closest('.product-container').find('.product-image').removeClass('large');
        }
    });

    $('input[name="pack-size2"]').change(function() {
        if ($(this).val() === 'large') {
            $(this).closest('.product-container').find('.product-image').addClass('large');
        } else {
            $(this).closest('.product-container').find('.product-image').removeClass('large');
        }
    });

    $('input[name="pack-size3"]').change(function() {
        if ($(this).val() === 'large') {
            $(this).closest('.product-container').find('.product-image').addClass('large');
        } else {
            $(this).closest('.product-container').find('.product-image').removeClass('large');
        }
    });
});
//Ajustamos el titulo del producto para que la imagen no lo tape
$(document).ready(function() {
    $('input[name="pack-size"], input[name="pack-size2"], input[name="pack-size3"]').change(function() {
        var productContainer = $(this).closest('.product');
        if ($(this).val() === 'large') {
            productContainer.find('.product-image').addClass('large');
            productContainer.find('.product-title').addClass('moved-down');
        } else {
            productContainer.find('.product-image').removeClass('large');
            productContainer.find('.product-title').removeClass('moved-down');
        }
    });
}); 