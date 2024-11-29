// 导航菜单项点击事件处理函数
function navigateTo(section) {
    switch (section) {
        case '首页':
            window.location.href = '首页.html'; // 首页
            break;
        case 'features':
            window.location.href = 'features.html'; // 分析工具
            break;
        case 'datasets': // 注意这里的case标签已经修改为'datasets'
            window.location.href = 'database.html'; // 数据库推荐
            break;
        case 'help':
            window.location.href = 'help.html'; // 帮助区
            break;
        case 'about':
            window.location.href = 'about.html'; // 关于我们
            break;
        default:
            console.log('未知的导航目标');
    }
}

// 监听页面加载完成事件
document.addEventListener('DOMContentLoaded', function() {
    // 获取导航链接并添加点击事件监听器
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // 阻止默认的链接跳转行为
            const section = link.getAttribute('data-section');
            navigateTo(section);
        });
    });
});