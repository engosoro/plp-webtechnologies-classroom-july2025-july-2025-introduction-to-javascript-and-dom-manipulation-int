/* ========================================
   Part 1: Variable Declarations and Conditionals
======================================== */
let companyName = "OsoroTech";
const serviceCount = 3;
let isOpen = true;

if (isOpen) {
  console.log(`${companyName} is currently accepting new clients!`);
} else {
  console.log(`${companyName} is currently closed for new projects.`);
}

/* ========================================
   Part 2: Custom Functions
======================================== */
// Function 1: Greet visitors
function greetVisitor(name) {
  console.log(`Welcome to ${companyName}, ${name}!`);
  alert(`Welcome to ${companyName}, ${name}!`);
}

// Function 2: Calculate estimated project cost
function calculateCost(hours, rate) {
  return hours * rate;
}

// Function 3 (extra example for clarity): Toggle visibility of an element
function toggleElement(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = el.style.display === "none" ? "block" : "none";
  }
}

/* ========================================
   Part 3: Loops
======================================== */
// Loop 1: List services using an array
const services = ["Software Development", "Cybersecurity", "Cloud Solutions"];
for (let i = 0; i < services.length; i++) {
  console.log(`Service ${i + 1}: ${services[i]}`);
}

// Loop 2: Display numbers 1 to 5 in console using while loop
let count = 1;
while (count <= 5) {
  console.log(`Count: ${count}`);
  count++;
}

// Loop 3 (extra): Use forEach to display services
services.forEach((service, index) => {
  console.log(`forEach -> Service ${index + 1}: ${service}`);
});

/* ========================================
   Part 4: DOM Interactions
======================================== */
// 1. Change page title dynamically
document.title = `${companyName} | Technology Solutions`;

// 2. Add click event to header to change color
document.querySelector("header h1").addEventListener("click", () => {
  document.querySelector("header").style.backgroundColor = "#006600";
  alert("Header color changed!");
});

// 3. Append a new paragraph to About section
const aboutSection = document.getElementById("about");
const newParagraph = document.createElement("p");
newParagraph.textContent =
  "We are passionate about delivering innovative technology solutions.";
aboutSection.appendChild(newParagraph);

// 4. Highlight services function
function highlightServices() {
  const cards = document.querySelectorAll(".service-card");
  cards.forEach(card => {
    card.style.backgroundColor = "#ffff99"; // highlight yellow
    card.style.border = "2px solid #ff6600";
  });
  alert("Services highlighted!");
}

// 5. Extra DOM example: Button that adds new service item
function addServiceItem() {
  const list = document.getElementById("service-list");
  if (list) {
    const li = document.createElement("li");
    li.textContent = `New Service ${list.children.length + 1}`;
    list.appendChild(li);
  }
}
