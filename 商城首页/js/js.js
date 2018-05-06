$(window).scroll(function () {
   if($(window).scrollTop()>=106){
        $(".nav").addClass("nav_top");
   }else {
       $(".nav").removeClass("nav_top");
   }
});

$(function () {

    $(".search_key").focus(function () {
        if(!$(".search_key").val()==""){
            $("#search-empty").css("opacity","1");
        }
        $('.search_key').bind('input porpertychange',function(){
            if($(".search_key").val()==""){
                $("#search-empty").css("opacity","0");
            }else{
                $("#search-empty").css("opacity","1");
            }
        });
    });
    $(".search_key").blur(function (){
        $("#search-empty").css("opacity","0");
    });

    $("#search-empty").click(function () {
        $(".search_key").val("");
    })
});

$(function () {
    $(".nav>.center>ul>li:not(:first-child)").hover(function () {
        $(this).addClass("arrow_top");
        $(this).removeClass("arrow_bom");
        $(this).css("background","#4C4C4C");
        $(this).find(".drop_nav").show();
    },function () {
        $(this).addClass("arrow_bom");
        $(this).removeClass("arrow_top");
        $(this).css("background","");
        $(this).find(".drop_nav").hide();
    });

});



// 首页轮播图
$(function () {

    // 复制第一张图片到列表最后
    $(".slide_show img:first").clone(true).appendTo(".slide_show");
    // 复制最后一张图片到列表第一位
    $(".slide_show img:eq(0)").before($(".slide_show a:last").clone(true));
    // 实现无缝连接

    // 图片容器，左右偏移盒子
    var list = $(".slide_show");
    // 获取图片数量
    var img_len = $(".slide_show>a>img").length;
    // 设置图片容器总宽度
    list.width(680*(img_len+2));


    //下一张初始化
    var img_width = $(".slide_show img").width();
    var next0 = $(".slide_img .slide_show").width()-img_width;

    // 亮起小圆点
    var index = 0;
    var min_btn = $(".slide_track span");
    function showBtn() {
        min_btn.eq(index).addClass("white").siblings(min_btn).removeClass("white");
    }
    // 点击小圆点
    min_btn.click(function () {
        var i = $(this).index();
        index = i;
        list.animate({left:-(i+1)*680+"px"},300);
        $(this).addClass("white").siblings(min_btn).removeClass("white");
    });

    // 上一张 | 下一张 | 自动播放 按钮点击事件
    function animate($offset) {
        list.animate({left:parseInt(list.css('left'))+$offset+"px"},300,function () {
            if (parseInt(list.css('left')) >= 0){
                list.css("left",-(next0-img_width)+"px");
            }
            if(parseInt(list.css('left')) <= -next0){
                list.css("left",-img_width+"px");
            }
        });

    };

    // 上一张按钮
    $(".slide_btn .prev").click(function () {
        if(!list.is(":animated")){
            index -= 1;
            if (index < 0) {
                index = img_len - 1;
            }
            showBtn();
            animate(680);
        }
    });
    // 下一张按钮
    $(".slide_btn .next").click(function () {
        if(!list.is(":animated")){
            index += 1;
            if (index>=img_len){
                index=0;
            }
            showBtn();
            animate(-680);
        }
    });

    // 自动执行函数
    function play() {
        timer = setInterval(function () {
            $(".slide_btn .next").click();
        },3000);
    }
    play();
    // 关闭自动执行
    function stop() {
        clearInterval(timer);
    }
    //鼠标停放
    $(".slide").mouseover(function () {
        stop();
        $(".slide_btn").show();
    });
    // 鼠标移出
    $(".slide").mouseout(function () {
        play();
        $(".slide_btn").hide();
    });

});

// 值得 | 关注
$(function () {
    $(".nominate_list .merit").click(function () {
        $(this).addClass("press");
        $(".merit_box").show();
        $(".nominate_list .focus").removeClass("press");
        $(".focus_box").hide();
    });
    $(".nominate_list .focus").click(function () {
        $(this).addClass("press");
        $(".nominate_list .merit").removeClass("press");
        $(".merit_box").hide();
        $(".focus_box").show();
    });
});


$(function () {
   $(".rank_nav>span").click(function () {
       $(this).addClass("red").siblings(".rank_nav>span").removeClass("red");
       var i = $(this).index();
       // alert(i);
       $(".rank_con>div").eq(i-1).addClass("show_rank_list").siblings(".rank_con>div").removeClass("show_rank_list");
   })
});

$(function () {
   $(".slide_text_con").width($(".slide_text_con .dots li").length * 13);
});
$(document).ready(function (e) {
    var unslider02 = $('#b02').unslider({
            speed: 750,
            delay: 3500,
        }),
        data02 = unslider02.data('unslider');
    $('.unslider-arrow02').click(function () {
        var fn = this.className.split(' ')[1];
        data02[fn]();
    });
});

$(document).ready(function (e) {
    var unslider03 = $('#b03').unslider({

        }),
        data03 = unslider03.data('unslider');
    $('.unslider-arrow03').click(function () {
        var fn = this.className.split(' ')[1];
        data03[fn]();
    });
});

$(document).ready(function (e) {
    var unslider04 = $('#b04').unslider({

        }),
        data04 = unslider04.data('unslider');
    $('.unslider-arrow04').click(function () {
        var fn = this.className.split(' ')[1];
        data04[fn]();
    });
});

$(document).ready(function (e) {
    var unslider05 = $('#b05').unslider({

        }),
        data05 = unslider05.data('unslider');
    $('.unslider-arrow05').click(function () {
        var fn = this.className.split(' ')[1];
        data05[fn]();
    });
});

// 显示字数
$(function () {
   $(".merit_row .con .text").each(function () {
       var maxwidth=120;//设置最多显示的字数
       var text=$(this).text();
       if($(this).text().length>maxwidth){
           $(this).text($(this).text().substring(0,maxwidth));
           $(this).html($(this).html()+"..."+"<a href='#' style='color: #0D62B3;'> 阅读全文</a>");//如果字数超过最大字数，超出部分用...代替，并且在后面加上点击展开的链接；

       };
   })
});


// 赞踩 收藏
$(function () {
    $(".collect icon").click(function () {
        $(this).toggleClass('collect_ou').toggleClass('collect_in');
    });
});

$(function () {
    var widths=0;
    for(var i=0;i<$('.merit_pagenation ul li').length;i++){
        widths+=$('.merit_pagenation ul li').eq(i).outerWidth(true);
    }
    $(".merit_pagenation ul").width(widths);
});

$(document).ready(function(e) {
    var unslider06 = $('#b06').unslider({
            speed: 300,
            delay: 3000,
        }),
        data06 = unslider06.data('unslider');

    $('.unslider-arrow06').click(function() {
        var fn = this.className.split(' ')[1];
        data06[fn]();
    });
});

$(document).ready(function(e) {
    var unslider07 = $('#b07').unslider({
            speed: 300,
            delay: 3000,
        }),
        data07 = unslider07.data('unslider');

    $('.unslider-arrow07').click(function() {
        var fn = this.className.split(' ')[1];
        data07[fn]();
    });
});

$(document).ready(function(e) {
    var unslider08 = $('#b08').unslider({
            speed: 300,
            delay: 3000,
        }),
        data08 = unslider08.data('unslider');

    $('.unslider-arrow08').click(function() {
        var fn = this.className.split(' ')[1];
        data08[fn]();
    });
});

//分页标签不可点击
$(function () {
    if($(".merit_pagenation ul li").eq(1).hasClass("on")){
        $(".merit_pagenation ul li:first>a").addClass("pag_no");
    }
    if($(".merit_pagenation ul li").eq(-2).hasClass("on")){
        $(".merit_pagenation ul li:last>a").addClass("pag_no");
    }
});

// 注册登录 | 居中 | 隐藏 |显示
$(function () {

    $(".nav .login").click(function () {
        $("#lr").show();
        $("#cover").show();
        $(".lr_wrap_btn li").eq(0).addClass("form_show").siblings(".lr_wrap_btn li").removeClass("form_show");
        if($(".lr_wrap_btn li:first").hasClass("form_show")){
            $("#login-form").show();
            $("#register-form").hide();
        }else{
            $("#login-form").hide();
            $("#register-form").show();
        }
    });
    $(".nav .register").click(function () {
        $("#lr").show();
        $("#cover").show();
        $(".lr_wrap_btn li").eq(1).addClass("form_show").siblings(".lr_wrap_btn li").removeClass("form_show");
        if($(".lr_wrap_btn li:first").hasClass("form_show")){
            $("#login-form").show();
            $("#register-form").hide();
        }else{
            $("#login-form").hide();
            $("#register-form").show();
        }
    });

    $(".close").click(function () {
       $("#lr").hide();
       $("#cover").hide();
    });


    $(".lr_wrap_btn li").click(function () {
        $(this).addClass("form_show").siblings(".lr_wrap_btn li").removeClass("form_show");
        if($(".lr_wrap_btn li:first").hasClass("form_show")){
            $("#login-form").show();
            $("#register-form").hide();
        }else{
            $("#login-form").hide();
            $("#register-form").show();
        }
    });

    // 登录 手机号/邮箱
    $("#login-form .iphone_email").click(function () {
        $("#login-form .username").focus();
    });
    $("#login-form .username").focus(function () {
        $("#login-form .iphone_email").css("top","-10px");
        $("#login-form .iphone_email").css("color","#2e76a8");
    });
    $("#login-form .username").blur(function () {
        if($("#login-form .username").val() == ""){
            $("#login-form .iphone_email").css("top","9px");
            $("#login-form .iphone_email").css("color","#666");
        }
    });

    // 登录密码
    $("#login-form .pass").click(function () {
        $("#login-form .password").focus();
    });
    $("#login-form .password").focus(function () {
        $("#login-form .pass").css("top","42px");
        $("#login-form .pass").css("color","#2e76a8");
    });
    $("#login-form .password").blur(function () {
        if($("#login-form .password").val() == ""){
            $("#login-form .pass").css("top","60px");
            $("#login-form .pass").css("color","#666");
        }
    });

    // 注册 手机号/邮箱
    $("#register-form .iphone_email").click(function () {
        $("#register-form .username").focus();
    });
    $("#register-form .username").focus(function () {
        $("#register-form .iphone_email").css("top","-10px");
        $("#register-form .iphone_email").css("color","#2e76a8");
    });
    $("#register-form .username").blur(function () {
        if($("#register-form .username").val() == ""){
            $("#register-form .iphone_email").css("top","9px");
            $("#register-form .iphone_email").css("color","#666");
        }
    });

    // 注册 验证码
    $("#register-form .ver_text").click(function () {
        $("#register-form .in_ver").focus();
    });
    $("#register-form .in_ver").focus(function () {
        $("#register-form .ver_text").css("top","42px");
        $("#register-form .ver_text").css("color","#2e76a8");
    });
    $("#register-form .in_ver").blur(function () {
        if($("#register-form .in_ver").val() == ""){
            $("#register-form .ver_text").css("top","60px");
            $("#register-form .ver_text").css("color","#666");
        }
    });

    // 注册 密码
    $("#register-form .pass").click(function () {
        $("#register-form .password").focus();
    });
    $("#register-form .password").focus(function () {
        $("#register-form .pass").css("top","94px");
        $("#register-form .pass").css("color","#2e76a8");
    });
    $("#register-form .password").blur(function () {
        if($("#register-form .password").val() == ""){
            $("#register-form .pass").css("top","112px");
            $("#register-form .pass").css("color","#666");
        }
    });

    // 登录验证
    $('#login-form').submit(function () {
        var username = $('#login-form .username').val(),
            password = $('#login-form .password').val();
        if (username == '' || username.length <= 0) {
            layer.tips('* 用户名不能为空', '#login-form .hint', {time: 2000, tips: 2});
            $('#login-form .username').focus();
            return false;
        }
        if (password == '' || password.length <= 0) {
            layer.tips('* 密码不能为空', '#login-form .hint', {time: 2000, tips: 2});
            $('#login-form .password').focus();
            return false;
        }
        return true;
    });

    // 注册验证
    $('#register-form').submit(function () {
        var username = $('#register-form .username').val(),
            ver_text = $('#register-form .ver_text').val(),
            password = $('#register-form .password').val();

        if (username == '' || username.length <= 0) {
            layer.tips('* 手机号不能为空', '#register-form .hint', {time: 2000, tips: 2});
            $('#register-form .username').focus();
            return false;
        }
        if (!username.match(/^(((13[0-9]{1})|159|153)+\d{8})$/)){
            layer.tips('* 请输入正确的手机号', '#register-form .hint', {time: 2000, tips: 2});
            $('#register-form .username').focus();
            return false;
        }
            if (ver_text == '' || username.length <= 0) {
            layer.tips('* 验证码不可为空', '#register-form .hint', {time: 2000, tips: 2});
            $('#register-form .ver_text').focus();
            return false;
        }
        if (password == '' || password.length <= 0) {
            layer.tips('* 密码不能为空', '#register-form .hint', {time: 2000, tips: 2});
            $('#register-form .password').focus();
            return false;
        }
        return true;
    });
    $(".gain_ver").click(function () {
        layer.tips('验证码已发送，请注意查收', '#register-form .hint', {time: 2000, tips: 2});
        $('#register-form .ver_text').focus();
        return false;
    })
});