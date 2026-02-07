// 解锁码验证逻辑
document.getElementById('submit-code').addEventListener('click', function() {
    const unlockCode = document.getElementById('unlock-code').value;
    if (unlockCode === '114514') {
        window.location.href = 'quiz.html';  // 如果解锁码正确，跳转到测试题目
    } else {
        document.getElementById('error-message').classList.remove('hidden');
    }
});

// 测试页面逻辑
let currentQuestion = 1;
let totalScore = 0;

document.getElementById('next-question').addEventListener('click', function() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        totalScore += parseInt(selectedAnswer.value);
        if (currentQuestion < 20) {
            currentQuestion++;
            document.querySelector('h2').innerText = `第 ${currentQuestion} 题 / 20`;
            // 更新题目
            // 可以在这里替换新的问题
        } else {
            // 题目完了，跳转到结果页
            window.location.href = 'result.html';
        }
    } else {
        alert('请选择一个选项');
    }
});

// 分享按钮逻辑
document.getElementById('share-button').addEventListener('click', function() {
    const shareText = `我刚刚做了恋爱脑测试，结果是：重度恋爱脑！`;
    alert(`分享文案已复制：${shareText}`);
    // 可以调用系统的分享功能，或者将文本复制到剪贴板
});
