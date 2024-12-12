$(document).ready(function () {
    let index = 0;

    const totalWorkItems = $('.work-item').length;

    $(window).on('load', function () {
        $('.preloader').addClass('.loaded')
    })

    $('.nav-toggle').click(function () {
        $('.header .nav').slideToggle()
    })
    $('.header .nav').click(function () {
        if ($(window).width() < 786) {
            $('.header .nav').slideToggle();
        }
    })

    $(window).scroll(function(){
        if($(this).scrollTop>100){
            $('.header').addClass('fixed');
        }else{
            $('.header').removeClass('fixed');
        }
    })

    $('a').on('click',function(){
        if(this.hash !== ''){
            event.preventDefault();
            var hash = this.hash;
            $('html,body').animate({
                scrollTol: $(hash).offset().top
            },800,function(){
                window.location.hash = hash;
            });
        }
    })
});