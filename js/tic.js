// 创建数据
let datas = [{
        imgUrl: "./images/tic-tx-01.svg",
        title: "完全免费",
        content: "腾讯云 TIC 是完全免费的平台产品，所有的功能模块都基于腾讯云自研技术和开源生态技术，您只需要为所创建的云基础资源付费，并且腾讯云 TIC 不会产生云资源的额外使用成本或者影响云资源的价格。"
    },
    {
        imgUrl: "./images/tic-tx-02.svg",
        title: "支持多云",
        content: "无论是用于管理腾讯云还是多云场景下的资源部署、迁移和管理，腾讯云 TIC 作为开放平台都将是您的得力助手。平台支持主流云服务商的资源编排和配置管理，后续也会根据您的业务需求支持更多云厂商和云产品。 "
    },
    {
        imgUrl: "./images/tic-tx-03.svg",
        title: "简单易用",
        content: "腾讯云 TIC 起源于开源技术，全面支持 Terraform 和 Ansible，同时支持流行的声明型语法（JSON 和 YAML），您也可以通过互联网去获取大量的相关学习资料，从而使您和您的团队成员更易上手，降低学习成本。"
    },
    {
        imgUrl: "./images/tic-tx-04.svg",
        title: "全面建模",
        content: "腾讯云 TIC 不仅能够实现基础的资源编排，还将会支持配置管理、应用部署和安全合规的全面建模，帮助您全面实践 IaC，全面提高团队或企业的效率，从而降低业务运营的成本和风险。"
    },
    {
        imgUrl: "./images/tic-tx-05.svg",
        title: "模板丰富",
        content: "腾讯云 TIC 产品会提供不同类型的模板管理入口。私有模板管理可以使您高效的复用已有基础架构，同时收藏和管理优秀的架构案例。公共模板管理为您提供丰富的行业最佳实践，为您使用和优化基础架构提供参考。"
    },
]

let yycj = [{
        title: "快速创建腾讯云基础架构",
        content: "当您需要快速创建多个相同的基础架构需求时，例如不同地域创建相同的基础架构或者跨区灾备，腾讯云 TIC 将会是您的最佳选择。腾讯云 TIC 可以很好的避免重复性的控制台点击操作，也可以省去 API 使用情况下的学习成本，规避误操作风险。您只需要指定地域信息，同时选用已有的模板、修改必要的参数，提交即可创建对应的基础架构。",
        imgUrl: "./images/tic-yycj-01.svg",
        style: "display: block; opacity: 1;",
        active: "active"
    },
    {
        title: "部署多云环境下的基础架构",
        content: "当年需要构建多云环境下的基础架构时，实现多云间的资源管理、迁移，腾讯云 TIC 将会是您的最佳选择。腾讯云 TIC 会根据不同的云服务商资源调用相关 API，并给予资源的依赖关系去构建多云的基础架构。",
        imgUrl: "./images/tic-yycj-02.svg",
        style: "",
        active: ""
    }
]


$(document).ready(function () {

    // 添加数据
    addDatas(".tic-tx-list", datas, 4);
    // 应用场景添加数据
    yycjAddDatas();
    // 应用场景tab切换
    yycjTab();
    // 隐藏菜单栏
    hideMeun();
})