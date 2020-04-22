$(document).ready(function () {
    /* 轮播图部分 */
    banner();
    // tab切换
    tabToggle($('.jieshao-tab>ul>li'), $('.jieshao-content>.jieshao-item'), 'sel', {
        'display': 'flex'
    });
    // 解决方案tab切换
    tabToggle($('.program-bar ul>li'), $('.program-left>.program-itme'), 'active', null, 500);

    // 云市场tab切换
    cloudTab();
})


let temp = 0; // 初始化临时变量

// 轮播图部分
function banner() {
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
    current.on('click', function () {
        // 获取当前元素的索引
        let index = $(this).index();
        // 排他
        current.removeClass('active')
        // 让当前元素添加类名
        $(this).addClass('active');
        // 让其他元素变为透明
        currentOl.stop().fadeOut();
        // 让索引对应的图片显示出来
        currentOl.eq(index).fadeIn()
    })

}

/**
 * tab切换
 * @param {string} element 传入jQuery对象
 * @param {string} child  传入对tab对应的内容
 * @param {string} classname 传入类名
 * @param {obj} object 传入css属性,没有则为null
 * @param {time} number 动画时间(默认300)
 */

function tabToggle(element, child, classname, obj, time) {
    // 获取元素
    let el = $(element);
    let cld = $(child);
    time == undefined ? 300 : time;
    // 绑定事件
    el.on('click', function () {
        // 获取当前元素的索引
        let index = $(this).index();
        // 移出其他元素的类名
        el.removeClass(classname);
        // 给当前元素添加类名
        $(this).addClass(classname);
        // 让其他元素淡出
        cld.stop().fadeOut(time);
        // 让索引对应的元素淡入
        if (!obj) {
            cld.eq(index).stop().fadeIn()
        } else {
            cld.eq(index).fadeIn(time).css(obj);
        }
    })
}

// 云市场tab切换
function cloudTab() {
    // 获取元素
    let cloudShowBar = $('.cloud-show-bar ul>li');
    let cloudContentItem = $('.cloud-plane-item');
    let cloudLeftBar = $('.cloud-plane-bar-item');

    // 绑定事件
    cloudShowBar.on('click', function () {
        // 获取当前被点击的索引
        let index = $(this).index();
        // 判断当前点击的元素索引是不是和index一样,如果一样,那么就不做动画
        if (temp !== index) {
            // 移出其他元素的类名
            cloudShowBar.removeClass('active');
            // 给当前被点击的元素添加类名
            $(this).addClass('active');
            // 让元素变透明
            cloudContentItem.stop().animate({
                opacity: 0
            }, 300, function () {
                $(this).css('display', 'none')
                // 让对应的元素显示出来
                cloudContentItem.eq(index).css('display', 'block').animate({
                    opacity: 1
                }, 300);
            })

            cloudLeftBar.stop().animate({
                opacity: 0
            }, 300, function () {
                $(this).css('display', 'none')
                // 让对应的元素显示出来
                cloudLeftBar.eq(index).css('display', 'block').animate({
                    opacity: 1
                }, 300);
            })
            temp = index;
        }
    })
}