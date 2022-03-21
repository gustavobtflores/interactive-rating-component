const ratings = document.querySelectorAll(".rating-container_scale-item");
const submitButton = document.querySelector(".rating-container_submit");

const removeSelected = () => {
  ratings.forEach((rating) => {
    rating.classList.remove("selected");
  });
};

submitButton.addEventListener("click", (event) => {
  const ratingSelected = document.querySelector(".selected");
  const ratingValue = ratingSelected.textContent;

  if (ratingSelected) {
    window.location.href = "http://127.0.0.1:5500/thank-you.html";
  }
});

ratings.forEach((rating) => {
  rating.addEventListener("click", (event) => {
    removeSelected();
    rating.classList.add("selected");
  });
});
