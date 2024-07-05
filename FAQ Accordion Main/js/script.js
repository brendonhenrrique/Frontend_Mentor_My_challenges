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
headerFAQ2.addEventListener("click", toggleContent2);
// headerFAQ3.addEventListener("click", toggleContent3);
// headerFAQ4.addEventListener("click", toggleContent4);

function toggleContent1() {
    // Check if minus icon is displayed
    if (iconMinus1.style.display === "block") {
      // Hide answer content and minus icon
      headerFAQ1.innerHTML = `<h3>What is Frontend Mentor, and how will it help me?</h3> <img class="icon-plus-1" src="./assets/images/icon-plus.svg" alt="icon-plus"">`;
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
  if (iconMinus2.style.display === "block") {
    headerFAQ2.innerHTML = `<h3>Is Frontend Mentor free?</h3>`;
    iconMinus2.style.display = "none";
    paragraph2.innerHTML = ""; // Limpar o conteúdo existente no parágrafo
    const img2 = document.createElement("img")
    img2.classList.add("icon-minus-2"); // Usando classList para uma abordagem mais moderna
    img2.src = "./assets/images/icon-plus.svg"; // Usando dotNotation e o atributo para uma abordagem amis moderna que setAttribute
    img2.alt = "icon-plus";
    headerFAQ2.appendChild(img2)
    iconPlus2.style.display = "block";
  } else {
    headerFAQ2.textContent = ""
    const h3 = document.createElement("h3")
    h3.innerText = "Is Frontend Mentor free?"
    const img2 = document.createElement("img")
    img2.classList.add("icon-minus-2"); // Usando classList para uma abordagem mais moderna
    img2.src = "./assets/images/icon-minus.svg"; // Usando dotNotation e o atributo para uma abordagem amis moderna que setAttribute
    img2.alt = "icon-minus";
    const p = document.createElement("p")
    p.textContent = "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    headerFAQ2.appendChild(h3);
    headerFAQ2.appendChild(img2);
    paragraph2.appendChild(p);
    iconMinus2.style.display = "block";
  }
}

function toggleContent3() {
  // Similar logic for other FAQs
}

function toggleContent4() {
  // Similar logic for other FAQs
}