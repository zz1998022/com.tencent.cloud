/**
 * 公共js
 */

$(document).ready(function() {
    // 回到鼎固边
    gotop();
    // 搜索框效果
    serach();
    //菜单动画
    meunAm();
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

// 菜单动画
function meunAm() {
    $('#header-left-link').mouseover(function () {
        // 让元素慢慢滑动过来
        $('.menu').stop().animate({
            left: 0
        }, 100)
    })

    $('#header-left-link').mouseout(function () {
        // 让元素慢慢滑动过来
        $('.menu').stop().animate({
            left: -200
        }, 100)
    })
}

// 隐藏的导航栏
function hideMeun() {
    $(window).scroll(function () {
        // 获取window被卷去的高度
        let windowScroll = $(this).scrollTop();
        // 获取元素
        let bar = $('.bar');
        // 创建节流阀
        // window的高度大于400让菜单栏显示
        if (windowScroll >= 400) {
            bar.stop().animate({
                top: 0
            }, 300)
        } 

        if (windowScroll < 400) {
            bar.stop().animate({
                top: -54
            }, 300)
        }
    })
}

/**
 * 
 * @param {string} element css选择器
 * @param {object} datas 数据
 * @param {number} cut 类名截取 从1开始
 */
// 添加数据
function addDatas(element,datas,cut) {
    // 获取元素
    let list = $(element);
    // 清空子节点
    list.html(null);
    // 初始化模板字符串
    let str = "";
    // 截取类名
    let className = element.substring(1,cut);
    // 遍历数据
    datas.forEach(function (value) {
        // 讲内容添加进模板字符串
        str = str + `
        <div class="${className}-tx-list-item">
        <div class="${className}-tx-inner">
            <div class="${className}-tx-img">
                <img src="${value.imgUrl}" alt="">
            </div>
            <div class="${className}-tx-body">
                <h4>${value.title}</h4>
                <p>${value.content}</p>
            </div>
        </div>
    </div>
        `;
    })
    // 通过父元素添加子节点
    list.html(str);
}

// 应用场景tab切换
function yycjTab(lis,items) {

    // 获取元素
    let li = $(`.yycj-bd-ct>ul>li`);
    let item = $('.yycj-item');
    // 创建节流阀
    let temp = document.querySelector('.yycj-bd-ct>ul>li');
    temp.now = 0;

    // 绑定事件
    li.click(function() {
        let index = $(this).index();

        // 判断当前被点击的元素是否和现在被选中元素的索引一样
        if (temp.now !== index) {
            // 清除其他元素的类名
            li.removeClass('active');
            // 给对应的属性添加元素
            li.eq(index).addClass('active');
            // 让其他的元素隐藏
            item.stop().animate({
                opacity: 0
            },300,function() {
                item.hide();
                // 让对应的元素显示出来
                item.eq(index).show().stop().animate({
                    opacity: 1
                })
            })
            temp.now = index;
        }
    })
}

// 应用场景添加数据
function yycjAddDatas() {
    // 获取元素
    let ul = $('.yycj-bd-ct>ul');
    let yycjContent = $('.yycj-bd-ct');

    // 初始化模板
    let title = "";
    let content = "";

    // 遍历数据
    yycj.forEach(function(value) {
        // 将内容添加到模板字符串
        title = title + `
        <li class="${value.active}">
            <a href="javascript:;">${value.title}</a>
        </li>
        `

        content = content + `
        <div class="yycj-item" style="${value.style}">
        <div class="yycj-item-ct">
            <p>
                ${value.content}
                <img src="${value.imgUrl}" alt="">
            </p>
        </div>
    </div>
        `
    })

    // 通过父元素添加子节点
    ul.append(title);
    yycjContent.append(content);
}