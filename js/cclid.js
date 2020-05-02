let datas = [{
        imgUrl: "./images/cclid-tx-01.svg",
        title: "使用便捷",
        content: "云开发 CLI  工具目前支持在 macOS、Windows 操作系统上使用，安装方式为 npm 全局安装，您可以使用 tcb 命令完成整个研发任务。"
    },
    {
        imgUrl: "./images/cclid-tx-02.svg",
        title: "完整的工具链",
        content: "云开发 CLI  工具支持完整的研发周期，包括环境创建、环境管理、项目创建、函数管理、文件存储管理，可以闭环完成研发。"
    },
    {
        imgUrl: "./images/cclid-tx-03.svg",
        title: "能力丰富",
        content: "云开发 CLI  工具提供云函数的创建和部署等编程类的操作，以及文件存储和静态网站托管的能力。同时也支持编程式等高级使用方式，能力丰富，涵盖整个研发周期。"
    }
]

$(document).ready(function () {
    // 添加数据
    addDatas(".cclid-tx-list", datas, 6);
    // 隐藏菜单栏
    hideMeun();
})