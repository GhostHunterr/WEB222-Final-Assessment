document.addEventListener("DOMContentLoaded", function () {
  var bttnEle = document.getElementById("contact-btn");
  var formEle = document.getElementById("contact-form-id");

  bttnEle.addEventListener("click", function () {
    window.scrollTo({ top: formEle.offsetTop, behavior: "smooth" });
  });
});
