// Wrap the script inside a DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function () {
  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Get input values
    const nameInput = document.getElementById("name-input").value;
    const recommendationInput = document.getElementById("recommendation-input").value;

    // Confirmation alert before submitting
    const confirmSubmit = confirm("Are you sure you want to submit this recommendation?");

    if (confirmSubmit) {
      const newRecommendation = document.createElement("div");
      newRecommendation.className = "rec1 rec recommendation";
      const newParagraph = document.createElement("p");
      newParagraph.textContent = `"${recommendationInput}"`;
      newRecommendation.appendChild(newParagraph);

      const recommendationsSection = document.getElementById("Recommendations");
      recommendationsSection.appendChild(newRecommendation);

      document.getElementById("name-input").value = "";
      document.getElementById("recommendation-input").value = "";

      alert("Recommendation submitted successfully!");
    }
  }

  const submitBtn = document.getElementById("submit-btn");
  submitBtn.addEventListener("click", handleSubmit);
});