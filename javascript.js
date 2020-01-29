var questions = [
    {
        title: "What tag is used to define the bottom section (footer) of an HTML document?",
        choices: ["<td>", "h1-h6", "footer", "nav"],
        answer: "footer"
    },
    {
        title: "In JavaScript, what is a block of code called that is used to perform a specific task?",
        choices: ["Variable", "Declaration", "Function", "String"],
        answer: "Function"
    },
    {
        title: "The link element, in CSS, must go inside the ____ section of an HTML document or page.",
        choices: ["Paragraph", "Footer", "Body", "Head"],
        answer: "Head"
    },
    {
        title: "In JavaScript, a for loop requires how many statements?",
        choices: ["1","2","3","It doesn't matter"],
        answer: "3"
    },
    {
        title: "In html, in order to recieve a user's information one would use which element?",
        choices: ["Input","Button","Paragraph","QuestionMark"],
        answer: "Input"
    }
]
var timeCount = 15
var questCount = 5
var timerTotal = questCount * timeCount
var currentQ = 0
$('input.content-item').on('click', function() {
    
    $('p.content-item').text('You will have 15 seconds per question, incorrect answers cost time!')
    var goButt = $('<button>')
    .text('I\'m Ready!')
    .appendTo($('.content-box'))
    $('input.content-item').hide()
    goButt.on('click', function() {
        goButt.hide()
        questionWriter()
        timer()
        })
    })
    $('<ul>')
        .appendTo($('.content-box'))
    function questionWriter() {
        $('p.content-item').text(questions[currentQ].title)
        
        for (i = 0; i < 4; i++) {
            console.log('I am making lists')
            $('<li>')
            .attr('class', 'answerItem')
            .text(questions[currentQ].choices[i])
            .appendTo($('ul'))
        }
        
        $('li').on('click', function() {
            var playerChoice = this.textContent
            console.log(playerChoice)
            if (playerChoice == questions[currentQ - 1].answer) {
                rightAnswer()
            }else{
                wrongAnswer()
           }

    })
    ++currentQ
    console.log(currentQ)
    }
    function timer() {
        $('span.timer').text(timerTotal)
        setInterval(function() {
            timerTotal--
            $('span.timer').text(timerTotal)
        }, 1000)
    }
    function rightAnswer() {
        $('li').hide()
        timerTotal = timerTotal + 5
        console.log(timerTotal)
        if (currentQ < 6) {
        questionWriter()}   
    }
    function wrongAnswer() {
        $('li').hide()
        timerTotal = timerTotal - 5
        console.log(timerTotal)
        questionWriter()     
    }
