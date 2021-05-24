const quiz = {
    _id: 1,
    questions: [
        {
            _id: 1,
            question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nemo quibusdam commodi beatae velit impedit ea itaque eius, aliquam reiciendis explicabo libero, esse maiores. Ab obcaecati vitae necessitatibus harum illum!",
            options: [
                {
                    _id: 1,
                    option: "Lorem ipsum dolor sit amet."
                },
                {
                    _id: 2,
                    option: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, est."
                },
                {
                    _id: 3,
                    option: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                }
            ]
        },
        {
            _id: 2,
            question: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit eaque libero eos quod voluptatem dolorem.",
            options: [
                {
                    _id: 1,
                    option: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                },
                {
                    _id: 2,
                    option: "Lorem ipsum dolor sit amet consectetur."
                },
                {
                    _id: 3,
                    option: "Lorem ipsum dolor sit amet."
                }
            ]
        },
        {
            _id: 3,
            question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quod sapiente fugiat accusantium! In consectetur, dolorum minima pariatur amet quas.",
            options: [
                {
                    _id: 1,
                    option: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                },
                {
                    _id: 2,
                    option: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea blanditiis, fugiat dolorem distinctio perspiciatis deleniti!"
                },
                {
                    _id: 3,
                    option: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, fuga!"
                }
            ]
        },
        {
            _id: 4,
            question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil provident nesciunt consectetur vitae nobis aspernatur, doloremque dolore. Nesciunt possimus repellat deserunt excepturi? Nam ducimus expedita minus similique, accusantium nisi numquam enim ad beatae nobis aperiam incidunt corrupti mollitia?",
            options: [
                {
                    _id: 1,
                    option: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea deserunt temporibus unde, laboriosam quaerat a fugiat explicabo beatae?"
                },
                {
                    _id: 2,
                    option: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla alias modi."
                },
                {
                    _id: 3,
                    option: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil reprehenderit nostrum natus illum harum quae odit voluptas, quaerat animi! Odit."
                }
            ]
        }
    ]
}

var currentQuestion = 0;
var answers = {
    quiz_id: quiz._id,
    answers: []
}

function setQuestion(question_no) {
    const question = quiz.questions[question_no];

    if (question) {
        // Set quiz_question_no
        $("#quiz_question_no").text("Pregunta " + (question_no + 1));
    
        // Reset pagination
        $("#first_question").parent().removeClass("active");
        $("#last_question").parent().removeClass("active");
        $("#current_question").parent().removeClass("active");
        $("#current_question").parent().addClass("disabled");
        $("#current_question").text("...");

        // Set current_question
        if (question_no === 0) {
            $("#first_question").parent().addClass("active");
        } else if (question_no === quiz.questions.length - 1) {
            $("#last_question").parent().addClass("active");
        } else {
            $("#current_question").text((question_no + 1));
            $("#current_question").parent().removeClass("disabled");
            $("#current_question").parent().addClass("active");
        }
    
        // Set quiz_question
        $("#quiz_question").text(question.question);

        // Get selected option
        const selected = answers.answers.find(e => e.question_id === question._id);

        // Set options
        for (let i = 0; i < question.options.length; i++) {
            const option = question.options[i];
            $(`#option_${i}`).text(option.option);
            $(`#option_${i}`).parent().removeClass("active")

            if (!selected) continue;
            
            // Set selected option
            if (selected.option_id === option._id) $(`#option_${i}`).parent().addClass("active");
        }

        currentQuestion = question_no;
    }
}

function changeQuestion(question_selected) {
    if (question_selected != undefined && question_selected != null) {
        // Next question
        if (question_selected == 'next') setQuestion(currentQuestion + 1);
        // Previous question
        else if (question_selected == 'previous') setQuestion(currentQuestion - 1);
        // First question
        else if (question_selected == 'first') setQuestion(0);
        // Last question
        else if (question_selected == 'last') setQuestion(quiz.questions.length - 1);
    }
}

function addAnswer(answer) {
    const match = answers.answers.find(a => a.question_id == answer.question_id);

    if (!match) {
        answers.answers.push(answer);
        return;
    }
    
    match.option_id = answer.option_id;
}

function answerQuestion(question_no) {
    // Find question
    const question = quiz.questions[question_no];

    if (question) {
        const option_no = $("input[name=options]:checked", "#quiz_options").val()
        const option = question.options[option_no];

        if (option) {
            const answer = {
                question_id: question._id,
                option_id: option._id
            }
            
            // Add answer
            addAnswer(answer);
        }
    }
}

// Reset options
$("#quiz_options input").prop("checked", false);

// Answer question
$("#quiz_options input").click(() => {
    answerQuestion(currentQuestion);
});

var time = 0;
const limit = 10;

function timer() {
    if (time <= limit) {
        let current = "";
        // Get minutes
        const minutes = Math.floor(time / 60);
        // Get seconds
        const seconds = time - minutes * 60;
        // Get percent
        const percent = time * 100 / limit;

        // Format time
        if (minutes < 10) current += "0" + minutes;
        else current += minutes;
        current += ":";
        if (seconds < 10) current += "0" + seconds;
        else current += seconds;

        $("#progress_time").css("width", `${percent}%`);
        $("#time_elapsed").text(current + " min");
        setTimeout(timer, 1000);
        time++;
    } else {
        showStatistics();
    }
}

timer();

function showStatistics() {
    $("#time_section").addClass("d-none");
    $("#exit_section").removeClass("d-none");
    $("#questions_section").addClass("d-none");
    $("#results_section").removeClass("d-none");
    $("#send_section").addClass("d-none");
}

$("#send_quiz").click((e) => {
    e.preventDefault();
    showStatistics();
});
