const loginApiUrl = '/api/login'; // 后端登录API
const registerApiUrl = '/api/register'; // 后端注册API

let isLogin = true; // 默认显示登录表单

// 切换登录和注册表单
function switchForm() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const toggleBtn = document.getElementById('toggleFormBtn');

    if (isLogin) {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        toggleBtn.textContent = '登录/注册';
    } else {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        toggleBtn.textContent = '注册/登录';
    }
    isLogin = !isLogin; // 切换状态
}

// 处理登录表单提交
function handleLoginFormSubmit(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    const username = document.querySelector('#loginForm input[type="text"]').value;
    const password = document.querySelector('#loginForm input[type="password"]').value;

    // 使用fetch发送登录请求
    fetch(loginApiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // 登录成功，跳转到首页
            window.location.href = '/首页.html'; 
        } else {
            // 登录失败，显示错误消息
            alert('登录失败：' + data.message);
        }
    })
    .catch(error => {
        console.error('登录请求失败：', error);
        alert('登录请求失败，请稍后再试。');
    });
}

// 处理注册表单提交
function handleRegisterFormSubmit(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    const username = document.querySelector('#registerForm input[type="text"]').value;
    const email = document.querySelector('#registerForm input[type="email"]').value;
    const password = document.querySelector('#registerForm input[type="password"]').value;

    // 使用fetch发送注册请求
    fetch(registerApiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // 注册成功，可以跳转到登录页面或者首页
            alert('注册成功，请登录。');
            switchForm(); // 切换到登录表单
        } else {
            // 注册失败，显示错误消息
            alert('注册失败：' + data.message);
        }
    })
    .catch(error => {
        console.error('注册请求失败：', error);
        alert('注册请求失败，请稍后再试。');
    });
}