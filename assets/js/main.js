const ratings = document.querySelectorAll(".rating-container_scale-item");
const submitButton = document.querySelector(".rating-container_submit");
const ratingContainer = document.querySelector(".rating-container");
const thanksContainer = document.querySelector(".thanks-container");
var selectedRating = document.querySelector(".thanks-container_rating-selected");

const removeSelected = () => {
  ratings.forEach((rating) => {
    rating.classList.remove("selected");
  });
};

ratings.forEach((rating) => {
  rating.addEventListener("click", (event) => {
    removeSelected();
    rating.classList.add("selected");
  });
});

submitButton.addEventListener("click", (event) => {
  const ratingSelected = document.querySelector(".selected");

  if (ratingSelected) {
    selectedRating.innerHTML = `You selected ${ratingSelected.textContent} out of 5`;
    ratingContainer.style.opacity = 0;
    submitButton.style.cursor = "default";
    setTimeout(() => {
      ratingContainer.classList.add("hidden");
      thanksContainer.classList.remove("hidden");
    }, 200);
    setTimeout(() => {
      thanksContainer.style.opacity = 1;
    }, 400);
  }
});
