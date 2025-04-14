const quizBox = document.getElementById("question");
const answerBox = document.getElementById("answer");

let isLoading = false;

async function loadQuiz() {
  if (isLoading) return;
  isLoading = true;

  try {
    const response = await fetch('https://opentdb.com/api.php?amount=1&type=multiple');
    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      alert("퀴즈를 불러오지 못했습니다.");
      return;
    }

    const quiz = data.results[0];
    quizBox.innerText = quiz.question;
    answerBox.innerHTML = "";

    const answerList = [...quiz.incorrect_answers, quiz.correct_answer];
    answerList.sort(() => Math.random() - 0.5);

    for (let i = 0; i < answerList.length; i++) {
      let answer = document.createElement('button');
      answer.classList.add('list');
      answer.innerText = answerList[i];
      answerBox.appendChild(answer);

      answer.addEventListener('click', (event) => {
        const selected = event.target.innerText;
        if (selected === quiz.correct_answer) {
          alert("정답입니다!");
        } else {
          alert("오답입니다!");
        }

        setTimeout(() => {
          isLoading = false;
          loadQuiz(); // 다시 호출
        }, 500);
      });
    }
  } catch (error) {
    alert("서버에 문제가 있습니다. 잠시 후 다시 시도해주세요.");
    isLoading = false;
  }
}
loadQuiz();