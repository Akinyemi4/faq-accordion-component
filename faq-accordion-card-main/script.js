"use strict";

console.log("Hello");

const accordionBox = document.querySelector(".accordion");

accordionBox.addEventListener("click", function (e) {
  const questionContainer = e.target.closest(".question-container");
  const questionEl = questionContainer.querySelector(".question");
  const arrowBtn = questionContainer.querySelector(".icon-btn");

  const answerContainer = questionContainer
    .closest("article")
    .querySelector(".answer-container");

  if (questionContainer) {
    questionEl.classList.toggle("question-active");

    questionEl.classList.contains("question-active")
      ? (answerContainer.style.maxHeight = answerContainer.scrollHeight + "px")
      : (answerContainer.style.maxHeight = null);

    arrowBtn.classList.toggle("icon-change");
  }
});
