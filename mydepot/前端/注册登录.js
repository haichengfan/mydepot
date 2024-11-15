let isLogin = true; // 默认显示登录表单

function switchForm() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const toggleFormBtn = document.getElementById('toggleFormBtn');

    if (isLogin) {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        toggleFormBtn.textContent = '返回登录';
    } else {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        toggleFormBtn.textContent = '登录/注册';
    }
    isLogin = !isLogin; // 切换状态
}