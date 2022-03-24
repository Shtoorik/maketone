const slider = tns({
  container: '.reviews__carousel',
  items: 1,
  slideBy: 'page',
  /* //autoplay: true
  controlsText: [
    '<img src="img/technical/left@2x.png" alt="" width="31" height="50" />',
    '<img src="img/technical/right@2x.png" alt="" width="30" height="50" />'
  ] */
  mode: "gallery",
  autoHeight: false,
  controls: false,
  nav: false
});
document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});
(function ($) {
  $(function () {
    function toggleSlide(item) {
      $(item).each(function (i) {
        $(this).on('click', function (e) {
          e.preventDefault();
          $('.pricing__item-content').eq(i).toggleClass('pricing__item-content_active');
          $('.pricing__item-list').eq(i).toggleClass('pricing__item-list_active');
        })
      });
    };

    toggleSlide('.btn_item');
    toggleSlide('.btn_item-back');
    // toggleSlide('.catalog-item__back');

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $(window).scroll(function () {
      if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });

    $("a[href=up]").click(function () {
      const _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
      return false;
    });
    new WOW().init();

    function valideForms(form) {
      $(form).validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          phone: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: {
            required: "Пожалуйста, введите свое имя",
            minlength: jQuery.validator.format("Введите не менее {0} символов")
          },
          phone: "Пожалуйста, введите свой номер телефона",
          email: {
            required: "Пожалуйста, введите свой почтовый адрес",
            email: "Неправильно введен адрес почты"
          }
        }
      });
    };
    valideForms('#pricing-form');
    valideForms('#questions-form');
  });
})(jQuery);