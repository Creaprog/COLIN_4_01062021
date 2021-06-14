function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var formValidate = 0;

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelector(".formData");
const modalclose = document.querySelectorAll(".close");
const modalBody = document.querySelector(".modal-body");
const submitBtn = document.querySelector(".btn-submit");
const modalForm = document.querySelector(".reserve");
const thanks = document.querySelector(".thanks");
const closeBtn = document.querySelector(".close-btn");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalclose.forEach((span) => span.addEventListener("click", closeModal));
closeBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  if (formValidate == 1) {
    modalForm.style.display = "none";
    formValidate = 0;
  }
}

function closeModal() {
  modalbg.style.display = "none";
}

submitBtn.addEventListener("click", validate);

function checkBoxes() {
  var checkboxes = document.getElementsByName("location");
  for (var i=0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked === true) {
      document.querySelector(".error-city").style.display = "none";
      return true;
    }
  }
  document.querySelector(".error-city").style.display = "block";
  return false;
}

function checkNbCharacterFirst() {
  var elem = document.getElementById("first");
  if (elem.value.length < 2) {
    document.querySelector(".error-first").style.display = "block";
    return false;
    } else {
      document.querySelector(".error-first").style.display = "none";
      return true;
  }
}

function checkNbCharacterLast() {
  var elem = document.getElementById("last");
  if (elem.value.length < 2) {
    document.querySelector(".error-last").style.display = "block";
      return false;
    } else {
      document.querySelector(".error-last").style.display = "none";
      return true;
  }
}

function checkNbCharacterEmail() {
  var elem = document.getElementById("email");
  if (elem.value.indexOf("@") === -1) {
    document.querySelector(".error-email").style.display = "block";
    return false;
    } else {
      document.querySelector(".error-email").style.display = "none";
      return true;
  }
}

function checkNbCharacterDate() {
  var elem = document.getElementById("birthdate");
  if (elem.value.length === 0) {
    document.querySelector(".error-date").style.display = "block";
    return false;
    } else {
      document.querySelector(".error-date").style.display = "none";
      return true;
  }
}

function checkNbCharacterQuantity() {
  var elem = document.getElementById("quantity");
  if (elem.value.length === 0) {
    document.querySelector(".error-quantity").style.display = "block";
    return false;
    } else {
      document.querySelector(".error-quantity").style.display = "none";
      return true;
  }
}

function CheckCGU() {
  var elem = document.getElementById("checkbox1");
  if (elem.checked) {
    return true;
  } else {
    return false;
  }
}

function validate(e) {
  checkBoxes();
  checkNbCharacterFirst();
  checkNbCharacterLast();
  checkNbCharacterEmail();
  checkNbCharacterDate();
  checkNbCharacterQuantity();
  CheckCGU();
  if (checkBoxes() && checkNbCharacterFirst() && checkNbCharacterLast() 
        && checkNbCharacterEmail() && checkNbCharacterDate()
        && checkNbCharacterQuantity() && CheckCGU()) {
    //Form validate
    modalForm.style.display = "none";
    thanks.style.display = "block";
    closeBtn.style.display = "block";
    formValidate = 1;
    e.preventDefault();
    return true;
  } else {
  }
  return false;
}
