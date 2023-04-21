document.addEventListener("DOMContentLoaded", function () {
  var bttnEle = document.getElementById("contact-btn");
  var formEle = document.getElementById("contact-form-id");
  var submitEle = document.getElementById("submit-btn");

  bttnEle.addEventListener("click", function () {
    window.scrollTo({ top: formEle.offsetTop, behavior: "smooth" });
  });

  submitEle.addEventListener("click", () => {
    alert("Thank you for Reaching Me out\n I will get back to you soon.");
  });
});
