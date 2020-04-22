$(document).ready(function () {
    // loading page
    $(".jq-loading-logo").addClass("animated zoomIn").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(".jq-loading-bg").fadeOut(2000).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            // banner swiper
            var mySwiper = new Swiper('.jq-swiper-container', {
                // Optional parameters
                direction: 'horizontal',
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 3000,
                },
                // need pagination
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            })
        });
    });
    // menu drop-down
    $(".jq-dropdown").click(function (e) { 
        e.preventDefault();
        //menu 子項目開啟
        $(this).toggleClass("active");
        $(this).parents("li").find(".dropdown-open").slideToggle(500);
        //其餘關閉
        $(this).parents("li").siblings("li").find(".dropdown").removeClass("active");
        $(this).parents("li").siblings("li").find(".dropdown-open").slideUp(300);
    });
    //show animate
    $(window).scroll(function () { 
        if ($(window).scrollTop() > 32){
            $(".jq-header").addClass("sticky");
        } else {
            $(".jq-header").removeClass("sticky");
        }
        if ($(window).scrollTop() > 100) {
            $(".jq-intro").addClass("show");
        } else if ($(window).scrollTop() < 0){
            $(".jq-intro").removeClass("show");
        }
        if ($(window).scrollTop() > 350) {
            $(".jq-table-wrap").addClass("show");
        } else {
            $(".jq-table-wrap").removeClass("show");
        }
        if ($(window).scrollTop() > 650) {
            $(".jq-form-wrap").addClass("show");
        } else {
            $(".jq-form-wrap").removeClass("show");
        }
    });
    //點擊圖片放大後，增加縮小鏡
    $(".jq-pic-box").on("click", function (e) {
        e.preventDefault();
        that = $(this)
        $(this).parents(".wrap").siblings(".lightbox").find(".lb-nav").addClass("active").on("click", function (e) {
            that.parents(".wrap").siblings(".lightbox").fadeOut(500)
            that.parents(".wrap").siblings(".lightboxOverlay").fadeOut(500)
        });
    });
    // 圖片滑過pulse效果
    $(".jq-pic-box img").on("mouseover", function (e) {
        e.preventDefault();
        that = $(this)
        $(this).addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            that.removeClass('animated pulse');
        });
    });
    // intro-button滑過pulse效果
    $(".jq-intro-button").on("mouseover", function (e) {
        e.preventDefault();
        that = $(this)
        $(this).addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            that.removeClass('animated pulse');
        });
    });
    $(".jq-go-top").on("click", function (e) {
        e.preventDefault();
        $("html,body").animate({ scrollTop: 0 }, 500);
    }); 
});