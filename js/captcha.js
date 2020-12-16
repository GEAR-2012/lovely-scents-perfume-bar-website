/*
Last modified 16 Dec 2020 by Sandor Tudja in Kemnay, Scotland
© Gear Web development 2020
*/

const contactForm = document.getElementById("contactform");
const inputName = document.querySelectorAll("#contactform>input")[0];
const inputEmail = document.querySelectorAll("#contactform>input")[1];
const inputSubject = document.querySelectorAll("#contactform>input")[2];
const inputMessage = document.querySelector("#contactform>textarea");
const captchaBlock = document.getElementById("captcha-block");
const sendBtn = document.getElementById("contactform__btn");
const questionLbl = document.getElementById("captcha-block__question");
const answInput = document.getElementById("captcha-block__answer");
const quesAnsw = [
    {
        ques: "How much three plus five?",
        answ: 8,
    },
    {
        ques: "How much five minus two?",
        answ: 3,
    },
    {
        ques: "How much one plus nine?",
        answ: 10,
    },
    {
        ques: "How much ten divided by five?",
        answ: 2,
    },
    {
        ques: "How much two times three?",
        answ: 6,
    },
    {
        ques: "How many legs does a cat have?",
        answ: 4,
    },
    {
        ques: "How many heads does a seven-headed dragon have?",
        answ: 7,
    },
];
let quesIndex = 0;
let captchaSolved = false;

captchaBlock.classList.add("hide");
sendBtn.disabled = true;
sendBtn.classList.add("disabled");

// when any input fields change in the contact form
contactForm.onchange = function (e) {
    if (!captchaSolved) {
        if (e.target.id === "captcha-block__answer") {
            // if the captcha answer input changed do this:
            checkAnswer(parseInt(e.target.value));
        } else if (
            // if non of the first four input field is empty do this:
            inputName.value !== "" &&
            inputEmail.value !== "" &&
            inputSubject.value !== "" &&
            inputMessage.value !== ""
        ) {
            revealCaptcha("Last question:");
        }
    }
};

function checkAnswer(num) {
    if (num === quesAnsw[quesIndex].answ) {
        // right answer
        captchaSolved = true;
        hideCaptcha();
        sendBtn.disabled = false;
        sendBtn.classList.remove("disabled");
    } else {
        // wrong answer
        answInput.value = "";
        revealCaptcha("Wrong answer! Try another one:");
    }
}

function revealCaptcha(prefix) {
    // unhide the captcha block
    let len = quesAnsw.length;
    quesIndex = Math.floor(Math.random() * len);
    questionLbl.innerText = `${prefix}
    
    ${quesAnsw[quesIndex].ques}

    Type your answer in below, with numbers only.`;
    captchaBlock.classList.remove("hide");
}

function hideCaptcha() {
    quesIndex = 0;
    questionLbl.innerText = "";
    captchaBlock.classList.add("hide");
}
