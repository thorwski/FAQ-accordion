function clicked(headerElement) {
  const faqItem = headerElement.parentElement;
  const faqAnswer = faqItem.querySelector(".faq-answer");
  const plusButton = faqItem.querySelector(".plus-icon");

  if (!faqAnswer.classList.contains("show")) {
    faqAnswer.classList.add("show");
    plusButton.src = "assets/images/icon-minus.svg";

    setTimeout(() => {
      faqItem.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 300);
  } else {
    faqAnswer.classList.remove("show");
    plusButton.src = "assets/images/icon-plus.svg";
  }
}
