$(function () {
    //监听浏览器的滚动事件
    $(window).scroll(function () {
        var docScrollTop = $(document).scrollTop();
        $(".main").animate({
            top:docScrollTop + 80
        },100);
        console.log($(".left").offsetTop);
    });
});