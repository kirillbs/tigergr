$(document).ready(function(){
    $('.modal-faq-close').on('click', function () {
       $('.modal-faq').css('display', 'none');
    });
    $('.faq-sect a').on('click', function (e) {
        e.preventDefault();
        $('.modal-faq-content').html($(this).siblings('.faq-modal-link-content').eq(0).html());
        $('.modal-faq').css('display', 'block');
    });
    $('.collapse-menu').on('click', function () {
       $('.ref-menu').addClass('hidden');
        $(this).css('display', 'none');
        $('.uncollapse').css('display', 'block');
    });
    $('.uncollapse').on('click', function () {
        $('.ref-menu').removeClass('hidden');
        $(this).css('display', 'none');
        setTimeout(function () {
            $('.collapse-menu').css('display', 'block');
        }, 200)
    });
    $('.menu-mobile-buger').on('click', function () {
       $('.mobile-menu-container').toggleClass('opened'); 
    });
    $('.mobile-menuu li').on('click', function () {
        $('.mobile-menuu li').removeClass('active');
        $(this).addClass('active');
    });
});