// 社区隐藏导航列表
$(function () {

    $('.bbs>.container').css("min-height",$(window).height()-$('.bbs>.navbar').outerHeight(true)-$('.bbs>.footer').outerHeight(true) + "px");

    /*返回顶部*/
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 300) {
            $(".floatTop").show();
        } else {
            $(".floatTop").hide();
        }
    });
    $('.floatTop .icon-up-open').click(function () {
        $("html,body").animate({scrollTop: 0}, 500);
    });
    $('.floatTop .icon-down-open').click(function () {
        $("html,body").animate({scrollTop: $('body').height()}, 500);
    });

    /*自适应宽度*/
    $('.news .new-topic form>div>input').width($('.news .new-topic form>div').width()-$('.news .new-topic form>div span').width()-26);


    /* 自适应宽高 */
    function sorlWidth() {
        var box = $('.sort-list .box');
        var win_width = $(window).width();
        var width = box.width();

        $(".box-min").css("width", $(window).width() - 20 + "px");

        $('.sort-list').height($(window).height());

        if (box.height() + 50 > $('.R-layer').height()) {
            $('.R-layer').height(box.height() + 50);
        }
        if (win_width < 768) {
            box.css("top", 10 + "px");
            box.css("left", 10 + "px");
            box.css("margin-left", 0);
            box.addClass("box-min");

            $('.R-layer').height(box.height() + 20);
            if ($('.R-layer').height() < $(window).height()) {
                $('.R-layer').height($(window).height());
            }
        }

        if (win_width >= 768) {
            //居中
            box.removeClass("box-min");
            box.css("top", 25 + "px");
            box.css("left", 50 + "%");
            box.css("margin-left", -width / 2 + "px");
        }
        // 滚动条
        if (box.height() > $('.sort-list').height()) {
            $('.sort-list').css("overflow", "auto");
        }

    }
    $('#sort').click(function () {
        //显示
        $('.sort-list').show();
        sorlWidth();
        $("body").css("overflow", "hidden");
    });

    //窗口变化
    $(window).resize(function () {
        sorlWidth();
        var w = $('.review-list .active').width() - $('.active .user-img').width() - 1;
        $('.active .user-info').width(w);

        $('.bbs>.container').css("min-height",$(window).height()-$('.bbs>.navbar').outerHeight(true)-$('.bbs>.footer').outerHeight(true) + "px");

        $('.news .new-topic form>div>input').width($('.news .new-topic form>div').width() - $('.news .new-topic form>div span').width()-26);


    });

    $('.back').click(function () {
        $('.sort-list').hide();
        $("body").css("overflow", "auto");
    });
    $('.title i').click(function () {
        $('.sort-list').hide();
        $("body").css("overflow", "auto");
    });


    var w = $('.review-list .active').width() - $('.active .user-img').width() - 1;
    $('.active .user-info').width(w);
    $('.user .like').click(function () {
        $(this).toggleClass('red');
    });


    $('#myTab1 a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
    $('#myTab2 a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
    $('#myTab3 a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
    $('#myTab4 a').click(function () {
        var p = $(this).attr('href');
        $("#myTab1 a[href='#BasicSetup']").click();

        $("#myTab2 a[href="+p+"]").click();

        $("html,body").animate({scrollTop: 0}, 100);
    });
    $(".newsmes").click(function () {
        $("#myTab1 a[href='#MyMes']").click();
        $("html,body").animate({scrollTop: 0}, 100);
    });
    $(".collect-post").click(function () {

        $("#myTab1 a[href='#MyPost']").click();

        $("#myTab3 a[href='#CollectPost']").click();

        $("html,body").animate({scrollTop: 0}, 100);
    });
    $(".slcct-post").click(function () {

        $("#myTab1 a[href='#MyPost']").click();

        $("#myTab3 a[href='#SentPost']").click();

        $("html,body").animate({scrollTop: 0}, 100);
    });

    $("#myTab1 .user-index").click(function () {
        window.location.href = "user_index.html";
    });






    $('#Data form>div .sex .radio-femal').click(function () {
        $(this).addClass('icon-radio-in');
        $('#Data form>div .sex .radio-male').removeClass('icon-radio-in');
        $('#Data form>div .sex .female').attr('checked', 'checked');
        $('#Data form>div .sex .male').removeAttr('checked');
    });

    $('#Data form>div .sex .radio-male').click(function () {
        $(this).addClass('icon-radio-in');
        $('#Data form>div .sex .radio-femal').removeClass('icon-radio-in');
        $('#Data form>div .sex .male').attr('checked', 'checked');
        $('#Data form>div .sex .female').removeAttr('checked');
    });
});