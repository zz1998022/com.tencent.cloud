let datas = [{
    imgUrl: "./images/tp-tx-01.svg",
    title: "更低成本",
    content: "预付费流量包的单价比后付费按流量计费更低，帮您有效降低公网成本。同时提供闲时流量套餐，进一步节省非高峰时段的费用。"
},
{
    imgUrl: "./images/tp-tx-02.svg",
    title: "覆盖范围广",
    content: "全地域支持共享流量包，能同时抵扣同地域下的云服务器、弹性公网IP产生的网络流量。支持多种规格的月包、半年包。"
},
{
    imgUrl: "./images/tp-tx-03.svg",
    title: "用量透明",
    content: "展示共享流量包的消耗趋势，及包内所有设备小时粒度的用量明细，您可以随时精准地核对公网流量用量，快速定位用量异常的设备，降低费用超出预算的风险。"
},
{
    imgUrl: "./images/tp-tx-04.svg",
    title: "易于管理",
    content: "您可以轻松汇总公网流量整体使用情况，统一管理和分析按流量计费的实例。实例创建后将自动抵扣流量，无需额外操作。"
},
{
    imgUrl: "./images/tp-tx-05.svg",
    title: "灵活使用",
    content: "支持多个共享流量包叠加使用，同一个共享流量包可同时抵扣多个实例。未用完的共享流量包在有效期内可以随时退还。"
},
]

$(document).ready(function() {
    // 添加数据
    addDatas(".tp-tx-list",datas,3);
    // 隐藏菜单栏
    hideMeun();
})