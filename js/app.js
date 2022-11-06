document.addEventListener('DOMContentLoaded', () => {
    function showBoxTitleByTime(selector, time) {
      setTimeout(() => {
        document.querySelector(selector).classList.add('show');
      }, time);
    }
    showBoxTitleByTime('.parallax__box', 1000);    

  $(window).scroll(function(event) {
    var s = $(this).scrollTop();   //px, по высоте, прокрученные в окне браузера
    console.log(`this ${s}`)
    var w = $(this).outerWidth();  // получить ширину окна браузера, чтобы на неё опираться
    console.log(w)
    var h = $('.content').outerHeight();   // получить высоту контентной части
    console.log(h);
    var h_b = $('.parallax').outerHeight();  // высота верхнего блока
    console.log(h_b);
    // ниже вычисление % процентов прокрутки всей контентной части
    var p =s / h * 100;
    console.log(p)
    // ниже вычисление % процентов прокрутки только верхней части части
    var p_b =s / h_b * 100;
    // ниже вычисляем будущую НЕпрозрачность
    var o = 1 - 1/100 * p_b;

    // if (s > 0) {
    //   document.querySelector('svg').classList.remove('show');
    // } else {
    //   document.querySelector('svg').classList.add('show');
    // }

    // теперь приступаем непосредственно к Parallax
    var z_1 = 1 + (w / 10000 * p_b);
    $('.parallax__fog').css('transform', 'scale('+z_1+')');
    $('.parallax__fog').css('opacity', o);

    //ниже движение гор
    var z_2 = 1 + (w / 500000 * p); /// 5миллионов - заранее просто подобранное число
    $('.parallax__mountain-1').css('transform', 'scale('+z_2+')'); // гора на фоне

    var hr = w / 2000 * p_b;
    var z_3 = 1 + (w * 0.000005 * p_b);
    $('.parallax__mountain-2').css('transform', 'translate3d('+hr+'px, 0, 0) scale('+z_3+')'); // гора справа

    var hr_2 = w / 1500 * p_b;
    var z_4 = 1 + (w * 0.00001 * p_b);
    $('.parallax__mountain-3').css('transform', 'translate3d('+hr_2+'px, 0, 0) scale('+z_4+')'); // гора слева

  });
});

