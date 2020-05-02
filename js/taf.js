// 创建数据
let datas = [{
        imgUrl: "./images/taf-tx-01.svg",
        title: "识别虚假设备",
        content: "精准识别模拟器、服务器、群控设备等，打击虚假设备模拟的广告曝光、广告点击、下载行为，严防刷量欺诈。"
    },
    {
        imgUrl: "./images/taf-tx-02.svg",
        title: "识别虚假用户",
        content: "精准识别通过第三方 ROM 或脚本群控真实设备产生的虚假用户，打击真机假用户的刷量欺诈。"
    },
    {
        imgUrl: "./images/taf-tx-03.svg",
        title: "识别虚假行为",
        content: "精准识别病毒感染、静默下载、诱导下载等虚假行为，打击真机真用户假行为欺诈。"
    },
    {
        imgUrl: "./images/taf-tx-04.svg",
        title: "识别注水曝光",
        content: "精准识别无效流量、垃圾流量等注水曝光，严格筛除低转化曝光，节省营销费用。"
    },
    {
        imgUrl: "./images/taf-tx-05.svg",
        title: "识别注水点击",
        content: "精准识别无效点击、机器人点击、多重嵌套点击等欺诈手段，打击注水流量。"
    },
    {
        imgUrl: "./images/taf-tx-06.svg",
        title: "识别注水激活",
        content: "精准识别脚本内嵌、应用市场预装、自动注册等作弊手段，打击无效流量的分发与激活。"
    },
]

// 应用场景数据
let yycj = [
    {
        title: "品牌广告反欺诈",
        content: "有效识别虚假曝光，筛除无效流量，提高流量反欺诈浓度，保障广告真实展示。",
        imgUrl: "./images/taf-yycj-01.jpg",
        style: "display: block; opacity: 1;",
        active: "active"
    },
    {
        title: "效果广告反欺诈",
        content: "有效识别恶意点击刷量，打击黑产伪造虚假下载，精准筛除注水流量，对效果广告进行准确度量。",
        imgUrl: "./images/taf-yycj-02.jpg",
        style: "",
        active: ""
    },
    {
        title: "KOL 监测",
        content: "监测 KOL 在曝光、评论、转化等不同维度的真实性，客观判别 KOL 的商业价值和影响力。",
        imgUrl: "./images/taf-yycj-03.jpg",
        style: "",
        active: ""
    },
]

$(document).ready(function() {

    // 讲数据渲染到页面中
    addDatas(".taf-tx-list",datas,4);
    // 应用场景添加数据
    yycjAddDatas();
    // 应用场景tab切换
    yycjTab();
    // 隐藏菜单栏
    hideMeun();
})