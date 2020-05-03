// 创建数据
let datas = [{
        imgUrl: "./images/is-tx-01.svg",
        title: "多码适配",
        content: "接入智能扫码 SDK 后，即可识别下列四种码制，适用于不同的扫码场景：二维码、一维码、PDF417码、DataMatrix 码；后续即将推出微信小程序码的支持。"
    },
    {
        imgUrl: "./images/is-tx-02.svg",
        title: "接入全面",
        content: "智能扫码提供 iOS、Android、Linux、Windows  等多种平台的 SDK，满足客户在不同场景的扫码需求。基于微信的广泛应用，智能扫码 SDK 的适配性高，可支持市面上绝大部分的机型。 "
    },
    {
        imgUrl: "./images/is-tx-03.svg",
        title: "效果突出",
        content: "智能扫码识别准确率高、鲁棒性强，支持大图小码（在远距离也能快速识别到），一图多码（长按点选需要识别的二维码）、模糊识别（图片分辨率较低也可以快速识别）。"
    },
    {
        imgUrl: "./images/is-tx-04.svg",
        title: "性能优异",
        content: "智能扫码基于腾讯海量的服务经验，提供高性能的服务模式，其 FPS 高于50，安装包容量小（低于2MB），同时保证了高内聚、低耦合，接入快速，方便开发调试。"
    },
    {
        imgUrl: "./images/is-tx-05.svg",
        title: "配套完善",
        content: "除了基本的扫码功能外，智能扫码还支持多种增值服务，例如暗光开灯，环境光线不佳的场景可以通过手机闪光灯自动补光，提升识别率；自动调焦，镜头焦距不合适时可以自动调整。 "
    },
]

let yycj = [{
        title: "多码识别",
        content: "图片中有多个二维码时，可以通过长按需要识别的那张二维码，进行精准识别，不需要放大或者裁剪就可以识别，为您提升用户体验。",
        imgUrl: "./images/is-yycj-01.png",
        style: "display: block; opacity: 1;",
        active: "active"
    },
    {
        title: "大图小码",
        content: "当二维码距离较远时，往往需要走进一些才能识别到，智能扫码支持自动聚焦，可以快速进行远距离扫码或者快速识别图片中很小的二维码。",
        imgUrl: "./images/is-yycj-02.png",
        style: "",
        active: ""
    },
    {
        title: "模糊识别",
        content: "图片经过多次转发或压缩，可能导致分辨率会降低而变模糊，往往会影响识别效果。智能扫码针对模糊场景进行专门优化，同样也能快速识别。",
        imgUrl: "./images/is-yycj-03.png",
        style: "",
        active: ""
    },
]


$(document).ready(function () {

    // 添加数据
    addDatas(".cdb-tx-list", datas, 4);
    // 应用场景添加数据
    yycjAddDatas();
    // 应用场景tab切换
    yycjTab();
    // 隐藏菜单栏
    hideMeun();
})