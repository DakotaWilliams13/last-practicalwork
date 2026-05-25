const accordeonQuestions = document.querySelectorAll('.accordion__question');

accordeonQuestions.forEach(accordeonQuestion => {
    accordeonQuestion.addEventListener("click", function () {
        const clickedAnswer = accordeonQuestion.parentElement.querySelector(".accordion__answer");

        accordeonQuestion.classList.toggle('accordion__question--active');
        clickedAnswer.classList.toggle('accordion__answer--visible');

        if (clickedAnswer.classList.contains('accordion__answer--visible')) {
            clickedAnswer.style.maxHeight = clickedAnswer.scrollHeight + "px";
        }
        else {
            clickedAnswer.style.maxHeight = null;
        }
    });
});
