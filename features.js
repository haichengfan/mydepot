// 监听文件上传表单的提交事件
document.getElementById('dataUploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('massSpecData');
    const file = fileInput.files[0];
    if (file) {
        console.log('文件已上传:', file.name);
        // 调用函数处理文件上传
        handleFileUpload(file);
    }
});

// 处理文件上传
function handleFileUpload(file) {
    // 创建一个FormData对象来封装文件数据
    const formData = new FormData();
    formData.append('massSpecData', file);

    // 使用fetch API上传文件到服务器
    fetch('/upload', { // 替换为您的文件上传API端点
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log('文件上传成功:', data);
        // 可以在这里调用运行分析的函数
        runAnalysis(data.algorithm); // 假设后端返回需要使用的算法
    })
    .catch(error => {
        console.error('文件上传失败:', error);
        document.getElementById('resultsDisplay').textContent = '文件上传失败';
    });
}

// 监听运行分析按钮的点击事件
document.getElementById('clusteringAlgorithm').addEventListener('change', function() {
    const algorithm = this.value;
    document.getElementById('runAnalysisButton').onclick = function() {
        runAnalysis(algorithm);
    };
});

// 运行分析
function runAnalysis(algorithm) {
    const resultsDisplay = document.getElementById('resultsDisplay');
    resultsDisplay.textContent = '分析中...';

    // 假设您有一个后端API来处理分析请求
    fetch('/run-analysis', { // 替换为您的分析API端点
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ algorithm: algorithm }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('分析结果:', data);
        resultsDisplay.textContent = '分析结果:';
        // 这里可以根据返回的数据格式来更新结果显示区域
        // 例如，如果返回的是JSON对象，可以将其转换为字符串显示
        resultsDisplay.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => {
        console.error('分析失败:', error);
        resultsDisplay.textContent = '分析失败';
    });
}