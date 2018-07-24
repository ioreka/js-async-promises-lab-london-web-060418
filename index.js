const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
const questionContainer = document.querySelector('.question-container')

function appendQuestion(question) {
  questionContainer.innerText = question.questionText
}

function askQuestionThen(time){
  question = questions[0]
  appendQuestion(question)
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve(question)
    })
  })
}

function removeQuestion(){
  return new Promise((resolve ,reject) => {
    questionContainer.innerText = ''
  })
}

function askQuestionThenRemoveQuestion(time){
  return askQuestionThen(time).then(removeQuestion)
}

// <div class="section center-align true-false-list">
//   <div class="btn center-align hide  green lighten-2"> True </div>
//   <div class="btn center-align hide red lighten-2"> False </div>
// </div>

function trueAndFalseButtons() {
  let buttons = document.querySelector('.true-false-list').querySelectorAll('.btn')
  return buttons
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(function(btn){
    if (btn.classList.contains('hide')){
      btn.classList.remove('hide')
    } else {
      btn.classList.add('hide')
    }
  })
}

function displayQuestionOnClick() {
  let click = document.querySelector('.waves-light')
  return click.addEventListener('click', () => {
    askQuestionThenRemoveQuestion(2000)
  })
}
