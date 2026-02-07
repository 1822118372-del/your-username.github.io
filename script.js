// 初始化
let currentQuestion = 1;
let totalScore = 0;

// 获取页面元素
const nextButton = document.getElementById('next-question');
const questionText = document.getElementById('question-text');
const progressText = document.getElementById('progress-text');
const resultTitle = document.getElementById('result-title');
const resultAnalysis = document.getElementById('result-analysis');
const scorePercent = document.getElementById('score-percent');

// 更新题目
function updateQuestion() {
    questionText.innerText = `第 ${currentQuestion} 题 / 20`; // 更新题目计数
    progressText.innerText = `${currentQuestion}/20`; // 更新进度条
}

// 计算分数
function calculateResult() {
    const scorePercentage = (totalScore / 80) * 100; // 计算百分比
    scorePercent.innerText = scorePercentage.toFixed(2) + "%"; // 显示百分比

    // 分析结果
    let analysis = "";
    if (totalScore <= 35) {
        analysis = "你是一个非常理性的人，恋爱中你保持独立，不依赖对方，能平衡自己的生活与感情。你擅长理智判断和自我管理，遇到问题时冷静分析，而不会盲目投入。";
    } else if (totalScore <= 50) {
        analysis = "你理性与感性并存，偶尔被爱情牵动，但仍然保持独立。你适当妥协，但不会迷失自己。你懂得找到自己和伴侣的节奏，既浪漫又务实。";
    } else if (totalScore <= 65) {
        analysis = "你容易为爱情付出，情绪易受对方影响，但依然有一定的自我判断。你会做出妥协，但不失自己的底线。你对感情依赖，但并不完全失去自我。";
    } else {
        analysis = "你为爱情而活，情绪完全依赖对方，愿意为对方付出一切，甚至忽视自己的原则。你希望得到对方的全情关注和宠爱，有时会迷失自己。";
    }

    // 显示分析结果
    resultAnalysis.innerText = analysis;
    resultTitle.style.display = 'block';
    resultAnalysis.style.display = 'block';
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
            // 提交答题，显示结果
            calculateResult();
        }
    } else {
        alert('请选择一个选项');
    }
});

// 初始化显示
updateQuestion();
