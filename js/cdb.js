$(document).ready(function () {

    // 应用场景tab切换
    yycjTab();
    // 隐藏菜单栏
    hideMeun();
    // 视频播放
    videoPlayer();
})

// 应用场景tab切换
function yycjTab() {
    // 获取元素
    let lis = $('.yycj-bd-ct>ul>li');
    let item = $('.yycj-item')
    let temp = document.querySelector('.yycj-item');
    // 给dom对象设置一个属性用来判断当前点击的是不是自己
    temp.now = 0;
    // 绑定事件
    lis.click(function () {
        // 获取当前被点击元素的索引
        let index = $(this).index();
        // 判断点击的是不是自己
        if (temp.now !== index) {
            // 去掉所有元素的类名
            lis.removeClass('active');
            // 给当前被点击的元素添加类名
            $(this).addClass('active');
            // 让其他元素隐藏
            // 添加动画
            item.stop().animate({
                opacity: 0,
            }, 300, function () {
                item.hide();
                // 让对应的元素显示出来
                item.eq(index).show().stop().animate({
                    opacity: 1,
                }, 300)
            })
            temp.now = index;
        }
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

// 视频播放
function videoPlayer() {
    // 获取元素
    let video = document.querySelector('.about-video');
    let mask = document.querySelector('.mask');
    let closeBtn = document.querySelector('.video-close')
    let videoBox = document.querySelector('.video-box');
    let play = document.querySelector('.video-play');
    let stop = document.querySelector('.video-stop');
    // 判断当前是否在播放状态
    let flag = true;
    let videoMain = document.querySelector('.video-box>video');
    // 初始化定时器
    let tiemr = null;

    // 绑定事件
    video.addEventListener('click',function() {
        // 让遮罩层显示出来
        mask.style.display = 'block';
        // 让视频播放器显示出来
        videoBox.style.display = 'block';
        // 让关闭按钮显示出来
        closeBtn.style.display = 'block';
        // 让播放按钮显示出来
        play.style.display = 'block';
        // 让遮罩层的高度等于body的高度
        mask.style.height= window.getComputedStyle(document.body,null)['height'];
        // 禁止滚动条
        $(document.body).css({
            "overflow-x": "hidden",
            "overflow-y": "hidden"
        });
    })

    // 当点击关闭按钮的时候,隐藏视频和遮罩层并让视频停止播放
    closeBtn.addEventListener('click',function() {
        // 隐藏遮罩层
        mask.style.display = 'none';
        // 隐藏按钮
        this.style.display = 'none';
        // 隐藏视频
        videoBox.style.display = 'none';
        // 隐藏播放按钮
        play.style.display = 'none';
        // 显示暂停按钮
        stop.style.display = 'none';
        // 让滚动条显示出来
        $(document.body).css({
            "overflow-x": "auto",
            "overflow-y": "auto"
        });
        videoMain.pause();
    })

    // 点击视频的时候开始播放
    videoMain.addEventListener('click',function() {
        if (flag) {
            // 清除定时器
            clearTimeout(tiemr);
            // 让播放键隐藏
            play.style.display = 'none'
            // 让暂停键显示出来
            stop.style.display = 'block'
            // 一秒之后让暂停隐藏
            setTimeout(function() {
                $(stop).animate({
                    "opacity" : 0
                },300,function() {
                    $(stop).hide();
                })
            })
            flag = false;
            this.play();
        } else {
            flag = true;
            this.pause();
            // 让暂停键隐藏
            $(stop).hide();
            // 让播放键显示出来
            $(play).show();
        }
    })
}