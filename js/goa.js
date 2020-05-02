let datas = [{
    imgUrl: "./images/goa-tx-01.svg",
    title: "任意网络无差别接入",
    content: "全球任意网络免 VPN 接入，实现终端用户内外网访问体验一致，可随时随地安全地访问企业资源，大幅度提升协同办公体验。"
},
{
    imgUrl: "./images/goa-tx-02.svg",
    title: "极速可靠的传输链路",
    content: "通过智能路由、协议优化、多路传输、抗抖动等自研技术，有效解决办公数据跨国、跨网传输过程中丢包、延迟等问题。"
},
{
    imgUrl: "./images/goa-tx-03.svg",
    title: "可信认证安全管理",
    content: "基于用户、身份、应用等多种方式持续检查设备安全状态，限制不安全设备访问，保障企业数据安全。"
},
{
    imgUrl: "./images/goa-tx-04.svg",
    title: "多维度访问控制",
    content: "基于设备识别、身份认证、权限管控等多维度访问控制，保护办公敏感资源，保证企业数据安全。"
},
{
    imgUrl: "./images/goa-tx-05.svg",
    title: "服务平台全面管控",
    content: "通过可视化系统进行管理，可透视全网接入信息与安全态势，同时支持网络质量监测，帮助您快速响应威胁事件，及时处置风险问题。"
},
]

$(document).ready(function() {
    // 添加数据
    addDatas(".goa-tx-list",datas,4);
    // 隐藏菜单栏
    hideMeun();
})