// 创建数据
let datas = [{
        imgUrl: "./images/ape-tx-01.svg",
        title: "海量优质图片",
        content: "与腾讯用户研究与体验设计部（CDC）联手，提供优选图库，包含摄影图、漫画、图标、全景等多种类型，保障优质素材供应。"
    },
    {
        imgUrl: "./images/ape-tx-02.svg",
        title: "更多场景覆盖",
        content: "提供在线广告、自媒体配图、线下印刷等多样授权范围供您选择，覆盖更多场景，实现精细化运营。  "
    },
    {
        imgUrl: "./images/ape-tx-03.svg",
        title: "专属授权证明",
        content: "所有图片均提供专属授权文档，实现完整授权链，远离侵权困扰，为业务构建版权保护网。"
    },
]

// 应用场景数据
let yycj = [
    {
        title: "自媒体配图",
        content: "适用于个人内容生产，包括编辑推文、提交论坛文章、发布个人博客等，您可直接使用正版图库直通车的图片，轻松产出更加精彩的内容，助您获取更多粉丝。",
        imgUrl: "./images/ape-yycj-01.png",
        style: "display: block; opacity: 1;",
        active: "active"
    },
    {
        title: "网络广告",
        content: "网站、APP、智能终端、网络视频贴片等渠道广告发布。电商平台、社交论坛、线上活动的商品介绍页及促销页的配图使用。",
        imgUrl: "./images/ape-yycj-02.png",
        style: "",
        active: ""
    },
    {
        title: "实体印刷",
        content: "商品宣传册、促销传单、产品名录等实体打印材料的配图。制作书籍、报刊、杂志、时事通讯、海报等印刷物。",
        imgUrl: "./images/ape-yycj-03.png",
        style: "",
        active: ""
    },
]

$(document).ready(function() {
   // 讲数据渲染到页面中
   addDatas(".ape-tx-list",datas,4);
   // 应用场景添加数据
   yycjAddDatas();
   // 应用场景tab切换
   yycjTab();
   // 隐藏菜单栏
   hideMeun();
})