const quizData = [
    {
        question: "1. Popelka utekla z bálu a u toho ztratila:",
        a: "zuby",
        b: "střevíček",
        
        correct: "b",
    },
    {
      question: "2. Ježibaba chtěla Janíčka hodit do:",
      a: "moře",
      b: "pece",
      
      correct: "b",
  },
  {
    question: "3. Pinocchiovi narostl nos pokaždé, když:",
    a: "usnul",
    b: "zalhal",
    
    correct: "b",
},
{
  question: "4. Šípkovou růženku vzbudil polibek od:",
  a: "prince",
  b: "žabáka",
  
  correct: "a",
},{
  question: "5. Malá mořská panna se zamilovala do",
  a: "zlé čarodejnice Uršuly",
  b: "prince",
  
  correct: "b",
},
{
question: "6. Bambiho maminka:",
a: "se proměnila na broskev.",
b: "zemřela.",

correct: "b",
},{
  question: "7. Macecha poslala Marušku pro:",
  a: "banány",
  b: "jahody",
  
  correct: "b",
},
{
question: "8. Kocour v botách uměl:",
a: "mluvit",
b: "létat",

correct: "a",
},{
  question: "9. Nastěnku zachránil:",
  a: "její sestra Marfuška",
  b: "Ivánek",
  
  correct: "b",
},
{
question: "10. Elsa uměla dobře:",
a: "čarovat s ledem",
b: "vařit",

correct: "a",
},{
  question: "11. Zlá královna záviděla Sněhurce její:",
  a: "krásu",
  b: "hračky",
  
  correct: "a",
},
{
question: "12. Princezna ze mlejna se jmenovala:",
a: "Eliška",
b: "Ochechule",

correct: "a",
},{
  question: "13. Maruška milovala svého otce jako:",
  a: "sůl",
  b: "mléko",
  
  correct: "a",
},
{
question: "14. Vlk se tvářil, že je maminka:",
a: "kůzlátek",
b: "koťátek",

correct: "a",
},{
  question: "15. Vlk od Karkulky zjistil, kde bydlí:",
  a: "její křeček",
  b: "její babička",
  
  correct: "b",
},
{
question: "16.Zlatá přadlena musela upříst zlatou nit ze:",
a: "slámy",
b: "salámu",

correct: "a",
},{
  question: "17. Rapuncel měla velice dlouhé:",
  a: "vlasy",
  b: "nechty",
  
  correct: "a",
},
{
question: "18. Dlouhý se jmenoval Dlouhý, protože měl:",
a: "dlouhý nos",
b: "velkou výšku",

correct: "b",
},{
  question: "19. Škaredé káčátko bylo mládětem:",
  a: "labutě",
  b: "slona",
  
  correct: "a",
},
{
question: "20. Olaf byl:",
a: "sněhulák",
b: "kominík",

correct: "a",
},
    
  ];
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const result = document.getElementById('resultquestion')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    deselectAnswers()
  
    const currentQuizData = quizData[currentQuiz]
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
   
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
  
    return answer
  }
  let answers= []; 
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) { answers.push(answer);
            console.log(answers);}
  
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
            
            
        }
        
        currentQuiz++;
        
  
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            
            
  /* 
  */
           let results= quizData.map ((question,i) => 
           
           
           ` 
                <div class="${quizData[i].correct===answers[i]?
                    "correct": "false" } quiz-header ">
                <h2 id="question">${question.question}</h2>
                <ul id="resultquestion"  >
                  <li >
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text">${question.a}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text">${question.b}</label>
                  </li>
        
                  
                  <li>
                  <h4>Správná odpověď: ${question[quizData[i].correct]}</h4>
                <h4>Vybral jsi: ${question[answers[i]]}</h4>
  
                
                  </li>
                  
                </ul>
              </div>`
                
                )
  
  //                 result.classList.add("correct")
  // /* 
                
  
                /* quizData.forEach ((question,i) =>
                 quizData[i].correct===answers[i]?
                  result.classList.add("correct")  : result.classList.add("false") 
                 ) */
            
         
  
  
            quiz.innerHTML = `
                <h2>Získal jsi ${score} bodů z ${quizData.length}.</h2>
               
  
                
                
               
    
                ${results}
  
  
                
  
                <button onclick="location.reload()">Znovu zkusit</button>
            `
        
        
        }
    }
  })