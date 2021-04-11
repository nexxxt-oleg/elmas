if (document.getElementById('slider1')) {
    let paginateArr = [
        'Архитектура',
        'Строительство и эксплуатация',
        'Горно-добывающая промышленность',
        'Нефтегазовая промышленность',
        'Электросетевое хозяйство',
        'Дорожное и мостовое строительство',
        'ГО и ЧС',
        'Судостроение и авиастроение',
        'Археология'
    ];
    let swiperHome = new Swiper('#slider1', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + paginateArr[index] + '</span>';
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

if (document.getElementById('slider2')) {
    let swiperHome2 = new Swiper('#slider2', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}