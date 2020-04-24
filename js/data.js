let mapZuoBiao = [{
        city: '硅谷',
        left: 18.747,
        top: 39.796,
        color: "#00a4ff",
        fontX: "",
    },
    {
        city: '达拉斯',
        left: 25.368,
        top: 44.49,
        color: "#FF7800",
        fontX: "",
    },
    {
        city: '多伦多',
        left: 28.814,
        top: 34.286,
        color: "#00a4ff",
        fontX: "",
    },
    {
        city: '圣保罗',
        left: 35.115,
        top: 78.163,
        color: "#ff7800",
        fontX: "",
    },
    {
        city: '伦敦',
        left: 46.751,
        top: 28.796,
        color: "#ff7800",
        fontX: ""
    },
    {
        city: '阿姆斯特丹',
        left: 48.814,
        top: 27.98,
        color: "#ff7800",
        fontX: "left: 100%",
    },
    {
        city: '法兰克福',
        left: 49.209,
        top: 31.245,
        color: "#00a4ff",
        fontX: "left: 100%",
    },
    {
        city: '莫斯科',
        left: 55.225,
        top: 24.49,
        color: "#00a4ff",
        fontX: "left: 100%",
    },
    {
        city: '金奈',
        left: 64.6,
        top: 55.898,
        color: "#ff7800",
        fontX: "",
    },
    {
        city: '孟买',
        left: 63.67,
        top: 52.449,
        color: "#00a4ff",
        fontX: "",
    },
    {
        city: '成都',
        left: 68.00,
        top: 43.53,
        color: "#00a4ff",
        fontX: "",
    },
    {
        city: '重庆',
        left: 68.715,
        top: 46.6,
        color: "#00a4ff",
        fontX: "",
    },
    {
        city: '北京',
        left: 72.47,
        top: 36.122,
        color: "#00a4ff",
        fontX: "",
    },
    {
        city: '北京金融',
        left: 72.47,
        top: 39.122,
        color: "#00a4ff",
        fontX: "",
    },
    {
        city: '香港',
        left: 71.383,
        top: 51.224,
        color: "#00a4ff",
        fontX: "left: 100%",
    },
    {
        city: '曼谷',
        left: 70.383,
        top: 55.224,
        color: "#00a4ff",
        fontX: "",
    },
    {
        city: '深圳金融',
        left: 70.9,
        top: 48.5,
        color: "#00a4ff",
        fontX: "left: 100%",
    },
    {
        city: '广州',
        left: 70.5,
        top: 46.0,
        color: "#00a4ff",
        fontX: "left: 100%",
    },
    {
        city: '上海',
        left: 74.842,
        top: 43.122,
        color: "#00a4ff",
        fontX: "left: 100%",
    },
    {
        city: '上海金融',
        left: 74.842,
        top: 46.122,
        color: "#00a4ff",
        fontX: "left: 100%",
    },
    {
        city: '首尔',
        left: 76.917,
        top: 37.959,
        color: "#00a4ff",
        fontX: "left: 100%",
    },
    {
        city: '东京',
        left: 79.375,
        top: 41.224,
        color: "#00a4ff",
        fontX: "left: 100%",
    },
    {
        city: '新加坡',
        left: 71.198,
        top: 63.653,
        color: "#00a4ff",
        fontX: "",
    },
    {
        city: '悉尼',
        left: 82.735,
        top: 81.224,
        color: "#ff7800",
        fontX: "left: 100%",
    },
    {
        city: '南京',
        left: 73.842,
        top: 41.022,
        color: "#00a4ff",
        fontX: "left: 100%",
    },
]

mapList();


function mapList() {

    // 获取元素
    let map_bd_list = $('.map-bd-list');
    // 初始化模板字符串
    let str = '';
    // 遍历对象数组
    mapZuoBiao.forEach(function (value) {
        // 遍历对象数组
        // 将数据的内容添加到字符里面
        str = `
    <div class="map-bd-list-point active" style="left: ${value.left}%; top: ${value.top}%">
                        <!-- 中心原点 -->
                        <div class="map-list-point-center" style="background-color:${value.color}"></div>
                        <span style="${value.fontX}">${value.city}</span>
                        <!-- 气泡提示start -->
                        <div class="map-list-ponit-prompt">
                            <div class="map-list-inner">
                                <h3>2个可用区</h3>
                                <div>
                                    <p>硅谷(2)</p>
                                </div>
                            </div>
                        </div>
                        <!-- 气泡提示end -->

                    </div>
    ` + str
        // 将内容添加到子元素里面
        map_bd_list.html(str);
    })

}