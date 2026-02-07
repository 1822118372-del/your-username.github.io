// 初始化
let currentQuestion = 1;
let totalScore = 0;

// 获取页面元素
const nextButton = document.getElementById('next-question');
const questionText = document.getElementById('question-text');
const progressText = document.getElementById('progress-text');
const options = document.querySelectorAll('input[name="answer"]');

// 更新题目
function updateQuestion() {
    questionText.innerText = `第 ${currentQuestion} 题 / 20`; // 更新题目计数
    progressText.innerText = `${currentQuestion}/20`; // 更新进度条
}

// 处理按钮点击
nextButton.addEventListener('click', function() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        // 更新得分
        totalScore += parseInt(selectedAnswer.value);

        if (currentQuestion < 20) {
            // 切换到下一题
            currentQuestion++;
            updateQuestion();
        } else {
            // 提交答题
            window.location.href = 'result.html'; // 跳转到结果页面
        }
    } else {
        alert('请选择一个选项');
    }
});

// 初始化显示
updateQuestion();
