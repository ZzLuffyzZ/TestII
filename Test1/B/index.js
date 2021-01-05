
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [{"category":"Sports","type":"multiple","difficulty":"easy",
                    question:"In golf, what name is given to a hole score of two under par?",
                    correct_answer:"Eagle",incorrect_answers:["Birdie","Bogey","Albatross"]},
                    {"category":"Sports","type":"multiple","difficulty":"easy",
                    question:"Which team won 2014 FIFA World Cup in Brazil?",
                    correct_answer:"Germany",incorrect_answers:["Argentina","Brazil","Netherlands"]},
                    {"category":"Sports","type":"multiple","difficulty":"easy",
                    question:"In Baseball, how many times does the ball have to be pitched outside of the strike zone before the batter is walked?",
                    correct_answer:"4",incorrect_answers:["1","2","3"]},
                    {"category":"Sports","type":"multiple","difficulty":"easy",
                    question:"Who is often called &quot;the Maestro&quot; in the men&#039;s tennis circuit?",
                    correct_answer:"Roger Federer",incorrect_answers:["Bill Tilden","Boris Becker","Pete Sampras"]},
                    {"category":"Sports","type":"multiple","difficulty":"easy",
                    question:"Who won the UEFA Champions League in 2016?",
                    correct_answer:"Real Madrid C.F.",incorrect_answers:["FC Bayern Munich","Atletico Madrid","Manchester City F.C.",]}]
  

  function buildQuiz() {
    const output = [];
  
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        const answers = [];
      for (letter in currentQuestion.incorrect_answers) {


        answers.push(
          `<label>


                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${currentQuestion.incorrect_answers[letter]}

              </label>`
        );
      }
        //console.log(answers);
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> 
                ${answers.join('')}
                <input type="radio" name="question${questionNumber}">
                ${currentQuestion.correct_answer}

                 </div>
                `
          );
        //console.log(output);
      }
    );
  
    quizContainer.innerHTML = output.join('');
  }
  
  function showResults() {
  
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    let numCorrect = 0;
  
    myQuestions.forEach((myQuestion, questionNumber) => {
  
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = [(answerContainer.querySelector(selector) || ``).value];
      console.log(userAnswer);
      for (let i = 0; i < userAnswer.length; i++) {
        if (userAnswer[i] == "on") {
          numCorrect++;
  
          answerContainers[questionNumber].style.color = 'blue';
        }
        else {
          answerContainers[questionNumber].style.color = 'red';
        }
        break;

        //console.log(userAnswer);
      }
      
    });
  
  
    alert( `Your point: ${numCorrect*10} `);
    alert(`Correct answer is : 1: Eagle,
                              2: Germany ,
                              3: 4,
                              4: Roger Federer ,
                              5 :Real Madrid C.F`)
  }
  
  
  buildQuiz();
  
  submitButton.addEventListener('click', showResults);
  
