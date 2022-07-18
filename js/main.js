var elModalBtn = document.querySelector(".js-modal-button");
var elModal = document.querySelector(".modal");
var elCloseModalBtn = document.querySelector(".close-btn");
var elBody = document.querySelector("body");
var elOpenBtn = document.querySelector(".open");
var elCLosesecondBtn = document.querySelector(".remove")

elOpenBtn.addEventListener("click" , function(){
    elModal.classList.add("close-btn");
    elBody.classList.add("hidden")
} )
elCLosesecondBtn.addEventListener("click", function () {
    elModal.classList.remove("close-btn");
    elBody.classList.remove("hidden")
})