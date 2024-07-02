let headerFAQ1 = document.querySelector(".faq1");
let headerFAQ2 = document.querySelector(".faq2");
let headerFAQ3 = document.querySelector(".faq3");
let headerFAQ4 = document.querySelector(".faq4");

let iconPlus1 = document.querySelector(".icon-plus-1");
let iconPlus2 = document.querySelector(".icon-plus-2");
let iconPlus3 = document.querySelector(".icon-plus-3");
let iconPlus4 = document.querySelector(".icon-plus-4");

let iconMinus1 = document.querySelector(".icon-minus-1");
let iconMinus2 = document.querySelector(".icon-minus-2");
let iconMinus3 = document.querySelector(".icon-minus-3");
let iconMinus4 = document.querySelector(".icon-minus-4");

let paragraph1 = document.querySelector(".paragraph-1");
let paragraph2 = document.querySelector(".paragraph-2");
let paragraph3 = document.querySelector(".paragraph-3");
let paragraph4 = document.querySelector(".paragraph-4");

// Add click event listener to each FAQ header
headerFAQ1.addEventListener("click", toggleContent1);
// headerFAQ2.addEventListener("click", toggleContent2);
// headerFAQ3.addEventListener("click", toggleContent3);
// headerFAQ4.addEventListener("click", toggleContent4);

function toggleContent1() {
    // Check if minus icon is displayed
    if (iconMinus1.style.display === "block") {
      // Hide answer content and minus icon
      headerFAQ1.innerHTML = `<h3>What is Frontend Mentor, and how will it help me?</h3>`;
      paragraph1.innerHTML = " ";
      iconMinus1.style.display = "none";
    } else {
      // Show answer content and minus icon
      headerFAQ1.innerHTML = `<h3>What is Frontend Mentor, and how will it help me?</h3> <img class="icon-minus-1" src="./assets/images/icon-minus.svg" alt="icon-minus">`;
      paragraph1.innerHTML = `<p>
        Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. Its suitable for all levels and ideal for portfolio building.
      </p>`;
      iconMinus1.style.display = "block";
    }
  
    // Always show the plus button
    iconPlus1.style.display = "block";
  }

function toggleContent2() {
  // Similar logic for other FAQs
}

function toggleContent3() {
  // Similar logic for other FAQs
}

function toggleContent4() {
  // Similar logic for other FAQs
}