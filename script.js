let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

window.addEventListener("scroll", function () {
  const nav = document.querySelector("header");
  nav.classList.toggle("sticky", window.scrollY)}
);

document.getElementById('sendButton').addEventListener('click', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const problem = document.getElementById('problem').value;
  if (!name) {
    alert("Please enter your full name.");
    return; 
  }
  if (!email) {
    alert("Please enter your email.");
    return;
  }
  if (!problem) {
    alert("Please describe your problem.");
    return;
  }

  document.getElementById('dialogBox').style.display = 'block';

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  doc.text('Contact Us Form Submission', 20, 10);
  doc.text(`Name: ${name}`, 20, 20);
  doc.text(`Email: ${email}`, 20, 30);
  doc.text(`Problem: ${problem}`, 20, 40);

  doc.save('petcare.pdf');
});
document.getElementById('closeDialog').addEventListener('click', function() {
    document.getElementById('dialogBox').style.display = 'none';
});