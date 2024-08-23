// scripts.js

document.addEventListener("DOMContentLoaded", () => {
  // Select the button element
  const button = document.getElementById("dLabel");

  // Add an event listener for clicks
  button.addEventListener("click", () => {
    // Toggle a class or perform an action when the button is clicked
    console.log("Button clicked!");
    // For example, you could toggle a class to show/hide the menu
    const menu = document.querySelector(".dropdown-menu");
    menu.classList.toggle("show");
  });
});

// let serviceHeading = document.getElementById("serviceAmazing");
// console.group(serviceHeading)

// let serviceElementsBox = document.getElementsByClassName("serviceElementsBox");
// console.log(serviceElementsBox);

// let serviceSupport = document.querySelector(".infoImgCol h4");
// console.log(serviceSupport);

// let serviceColumns = document.querySelectorAll("serviceElementsBox")
// console.log(serviceColumns)

// serviceHeading.innerHTML ="AMAZING"

// serviceSupport.style

// #region NEWSLETTER SING UP

let subscribe_arr = [];

let personInfo = {
  name: "",
  email: "",
};

let subscribeButton = document.querySelector(".subscribe input");

subscribeButton.addEventListener("click", grabNewsLetterInfo);

function grabNewsLetterInfo() {
  let inputName = document.querySelector("#name");
  let inputEmail = document.querySelector("#email");

  personInfo.name = inputName;
  personInfo.email = inputEmail;
  console.log(personInfo);

  subscribe_arr.push(personInfo);
  console.log(subscribe_arr);

  inputName = "";
  inputEmail = "";
}

// #endregion
