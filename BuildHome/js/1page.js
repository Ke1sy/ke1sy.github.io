$(document).ready(function () {
    //home slider
    $('.slick-slider').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });



//карусель для блока "бренды"
    var width = 199; // ширина изображения
    var count = 6; // количество изображений
    var carousel = document.getElementById('carousel');
    var list = carousel.querySelector('ul');
    var listElems = carousel.querySelectorAll('li');
    var position = 0; // текущий сдвиг влево

    document.getElementById('brand-prev').onclick = function() {
        var bodyW = getComputedStyle(document.body);
        if((parseInt(bodyW.width))<1200){
            count=5;
        }
        if((parseInt(bodyW.width))<1000){
            count=4;
        }
        if((parseInt(bodyW.width))<800){
            count=3;
        }
        if((parseInt(bodyW.width))<600){
            count=2;
        }
        if((parseInt(bodyW.width))<400){
            count=1;
        }

        // сдвиг влево
        // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
        position = Math.min(position + width * count, 0);
        list.style.marginLeft = position + 'px';
    };

    document.getElementById('brand-next').onclick = function() {
        var bodyW = getComputedStyle(document.body);
        if((parseInt(bodyW.width))<1200){
            count=5;
        }
        if((parseInt(bodyW.width))<1000){
            count=4;
        }
        if((parseInt(bodyW.width))<800){
            count=3;
        }
        if((parseInt(bodyW.width))<600){
            count=2;
        }
        if((parseInt(bodyW.width))<400){
            count=1;
        }
        // сдвиг вправо
        // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
        position = Math.max(position - width * count, -width * (listElems.length - count));
        list.style.marginLeft = position + 'px';
    };
});

