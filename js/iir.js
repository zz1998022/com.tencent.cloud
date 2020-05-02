// 创建数据
let datas = [{
        imgUrl: "./images/iir-tx-01.svg",
        title: "商品覆盖全",
        content: "可以识别上亿 SKU，覆盖服饰、食品、电子产品、电器、书籍等所有常见商品种类，支持综合电商和各类垂直电商的拍照搜商品需求。"
    },
    {
        imgUrl: "./images/iir-tx-02.svg",
        title: "识别精度高",
        content: "支持细粒度的商品识别，可以识别商品具体型号、款式。基于微信海量数据训练和商品库，经过大量真实测试验证，识别同款率效果优异"
    },
    {
        imgUrl: "./images/iir-tx-03.svg",
        title: "信息丰富",
        content: "识别具体商品后，微信识物可以给出品牌、参考价格、名称、型号、百科介绍、展示图片等，丰富的信息可以支持多种场景应用，实现多种功能。"
    },
    {
        imgUrl: "./images/iir-tx-04.svg",
        title: "使用成本低",
        content: "基于微信的亿级商品库，无需自建商品库即可实现拍照搜商品功能，免去了数据梳理、图片入库等工作，减少接入和使用的资源与人力成本。"
    },
    {
        imgUrl: "./images/iir-tx-05.svg",
        title: "多种识别能力",
        content: "智能识图将陆续推出多种多样的图像识别服务，如植物识别等，协助客户实现“识别万物”，将现实世界更好地与内容、服务、商品连接起来。"
    },
]

let yycj = [
    {
        title: "拍照搜商品",
        content: "针对电商、导购应用，可以利用智能识图快速实现自有 App 或小程序内的拍照搜商品，基于微信庞大的商品库，无需自建商品库即可获得良好的体验。",
        imgUrl: "./images/iir-yycj-01.png",
        style: "display: block; opacity: 1;",
        active: "active"
    },
    {
        title: "精准广告投放",
        content: "针对新闻、信息流、视频、短视频等客户，可以利用智能识图深入理解平台中的图片和视频，进行广告的精准投放，提升内容与广告的匹配度，实现体验和投放效果的优化。",
        imgUrl: "./images/iir-yycj-02.png",
        style: "",
        active: ""
    },
    {
        title: "电商导购",
        content: "针对手机、相册、短视频、内容电商、种草社区等，可以通过智能识图识别图片、视频中的商品，并推荐购买链接，进行流量变现。",
        imgUrl: "./images/iir-yycj-03.png",
        style: "",
        active: ""
    },
]


$(document).ready(function () {

    // 添加数据
    addDatas(".iir-tx-list",datas,4);
    // 应用场景添加数据
    yycjAddDatas();
    // 应用场景tab切换
    yycjTab();
    // 隐藏菜单栏
    hideMeun();
})



