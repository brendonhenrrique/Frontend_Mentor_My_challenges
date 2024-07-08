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

// Adicionar ouvinte de evento de clique a cada cabeçalho de FAQ
headerFAQ1.addEventListener("click", toggleContent1);
headerFAQ2.addEventListener("click", toggleContent2);
headerFAQ3.addEventListener("click", toggleContent3);
headerFAQ4.addEventListener("click", toggleContent4);

function toggleContent1() {
    // Verifique se o ícone de menos é exibido
    if (iconMinus1.style.display === "block") {
      // Ocultar o conteúdo da resposta e o ícone de menos
      headerFAQ1.innerHTML = `<h3>What is Frontend Mentor, and how will it help me?</h3> <img class="icon-plus-1" src="./assets/images/icon-plus.svg" alt="icon-plus"">`;
      paragraph1.innerHTML = " ";
      iconMinus1.style.display = "none";
    } else {
      // Mostrar o conteúdo da resposta e o ícone de menos
      headerFAQ1.innerHTML = `<h3>What is Frontend Mentor, and how will it help me?</h3> <img class="icon-minus-1" src="./assets/images/icon-minus.svg" alt="icon-minus">`;
      paragraph1.innerHTML = `<p>
        Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. Its suitable for all levels and ideal for portfolio building.
      </p>`;
      iconMinus1.style.display = "block";
    }
  
    // Sempre mostre o botão de adição
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
  if(iconMinus3.style.display === "block") {
    headerFAQ3.innerHTML = `<h3>Can I use Frontend Mentor projects in my portfolio?</h3> <img class="icon-plus-1" src="./assets/images/icon-plus.svg" alt="icon-plus"">`;
    paragraph3.innerHTML = " ";
    iconMinus3.style.display = "none"
  } else {
    headerFAQ3.innerHTML = `<h3>Can I use Frontend Mentor projects in my portfolio?</h3> <img class="icon-minus-1" src="./assets/images/icon-minus.svg" alt="icon-minus">`;
    paragraph3.innerHTML = `<p>
         Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!
      </p>`;
      iconMinus3.style.display = "block";
  }
}

function toggleContent4() {
  if(iconMinus4.style.display === "block") {
    headerFAQ4.innerHTML = `<h3>How can I get help if I'm stuck on a challenge?</h3>`;
    iconMinus4.style.display = "none";
    paragraph4.innerHTML= ""
    const img4 = document.createElement("img")
    img4.classList.add("icon-minus-4"); // Usando classList para uma abordagem mais moderna
    img4.src = "./assets/images/icon-plus.svg"; // Usando dotNotation e o atributo para uma abordagem amis moderna que setAttribute
    img4.alt = "icon-plus";
    headerFAQ4.appendChild(img4)
    iconPlus4.style.display = "block"
  } else {
    headerFAQ4.textContent = ""
    const h3 = document.createElement("h3")
    h3.innerText = "How can I get help if I'm stuck on a challenge?"
    const img4 = document.createElement("img")
    img4.classList.add("icon-minus-4")
    img4.src = "./assets/images/icon-minus.svg"; // Usando dotNotation e o atributo para uma abordagem amis moderna que setAttribute
    img4.alt = "icon-minus";
    const p = document.createElement("p")
    p.textContent = "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    headerFAQ4.appendChild(h3);
    headerFAQ4.appendChild(img4);
    paragraph4.appendChild(p);
    iconMinus4.style.display = "block";
  }
}