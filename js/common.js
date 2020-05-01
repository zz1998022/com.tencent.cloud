/**
 * 公共js
 */

$(document).ready(function() {
    // 回到鼎固边
    gotop();
    // 搜索框效果
    serach();
})

 // 回到顶部功能
 function gotop() {
    $(window).scroll(function () {
        // 获取当前window被卷去的高度
        let windowScroll = $(this).scrollTop();
        // 判断卷去的高度是否达到了1000
        if (windowScroll >= 1000) {
            // 让gotop显示出来
            $('.gotop').css("display", "block").stop().animate({
                opacity: 1
            }, 300, function () {
                console.log('动画执行完毕')
            })
        }
        if (windowScroll <= 1000) {
            // 让gotop隐藏
            $('.gotop').stop().animate({
                opacity: 0
            }, 300, function () {
                console.log('隐藏完毕');
                $('.gotop').css('display', 'none')
            })
        }
    })

    // 给回到顶部绑定点击事件
    // 当点击后,执行动画
    $('.gotop').click(function () {
        $(document.documentElement).stop().animate({
            scrollTop: 0
        },300)
    })
}

// 搜索框效果
function serach() {

    // 获取元素
    let serachFather = $('.header-serach');
    let mask = $('.mask');
    let content = $('.header-serach-list');

    // 绑定事件
    serachFather.find('input').focus(function () {
        // 让遮罩层显示出来
        mask.show();
        // 让内容框显示出来
        content.show();
        serachFather.stop().animate({
            width: 424
        }, 300, function () {
            // 让li显示出来
            content.find('li').css('opacity', '1');
        })
    })

    serachFather.find('input').blur(function () {
        // 让遮罩层隐藏
        mask.hide();
        // 让内容隐藏
        content.hide();
        serachFather.stop().animate({
            width: 160
        }, 300, function () {
            // 让li隐藏
            content.find('li').css('opacity', '0');
            console.log(111)
        })

    })
}