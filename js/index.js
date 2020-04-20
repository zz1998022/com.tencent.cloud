$(document).ready(function() {
    /* 轮播图部分 */
    // 获取小圆点
    let currentOl = $('.banner-main>li');
    // 根据图片数量创建小圆点
    for (let i = 0; i < currentOl.length; i++) {
        // 将元素添加到ol里面
        $('.banner ol').append('<li></li>')
    }
    // 获取元素
    let current = $('.banner ol>li');
    // 给第一个小圆点添加类名
    current.eq(0).addClass('active')
    // 绑定事件
    current.on('click',function() {
        // 获取当前元素的索引
        let index = $(this).index();
        // 排他
        current.removeClass('active')
        // 让当前元素添加类名
        $(this).addClass('active');
        // 让其他元素变为透明
        currentOl.stop().fadeOut();
        // 让索引对应的图片显示出来
        currentOl.eq(index).stop().fadeIn();
    })
})