$(function () {
    // popup
    $('.popup button').on('click', function () {
        console.log($(this).parent());
        $(this).parent().hide();
    });


    // right_banner
    $('.right_banner button').on('click', function () {
        $('.right_banner').toggleClass('on')
    })


    // main_Art
    var bgColor = ['#207844', '#41437b', '#9b3440', '#844141', '#7f7f7f']
    $('.main_Art .inner').css({ background: bgColor[0] });
    $('.right_slide').on('init afterChange', function (e, s, c) {
        console.log(c);
        // left_tab
        $('.main_Art .left_tab .itm').eq(c).addClass('on').siblings().removeClass('on');


        $('.main_Art .inner').css({ background: bgColor[c] });
        $('.num').text((c ? c + 1 : 1) + ' / ' + bgColor.length)
    });
    // right_slide
    $('.right_slide').slick({
        slidesToShow: 2,
        arrows: false,
        autoplay: true,
    });
    // arrows
    $('.arrows i:nth-child(1)').on('click', function () {
        $('.right_slide').slick('slickPrev')
    });
    $('.arrows i:nth-child(2)').on('click', function () {
        $('.right_slide').slick('slickNext')
    });


    // toTop
    $(window).on('scroll', function () {
        var scr = $(window).scrollTop();
        if (scr > 300) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }


    });
    $('#toTop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 2000)
    });



})