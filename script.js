/* All variables declaring */
let headerNav = document.querySelector("header .nav");
let footerNav = document.querySelector("footer .nav");

let upButton = document.querySelector(".scrollUp");

let downScroll = document.querySelector(".downScroll");

let homeButton = document.querySelectorAll(".home");
let welcomeInfo = document.querySelector(".welcome-info");

let aboutButton = document.querySelectorAll(".about");
let aboutInfo = document.querySelector(".about-info");

let contactsButton = document.querySelectorAll(".contacts");
let contactInfo = document.querySelector(".contact-info");


window.addEventListener('scroll', function() {
	/* Assign a value of y-axis scroll to the variable '--scrolling' */
	document.documentElement.style.setProperty('--scrolling', scrollY + 'px');

	/* Upper menu disappears, lower menu apperas when user scrolls the page */
	if(window.scrollY > 50) {
		headerNav.style.display = "none";
		footerNav.style.display = "flex";
	} else {
		headerNav.style.display = "flex";
		footerNav.style.display = "none";
	}
  /* Caption "Scroll down" will appear or disappear, depending on scroll*/
  if (window.scrollY > 90) {
    downScroll.style.display = "none";
  } else {
    downScroll.style.display = "block";
  }
});

/* Returns to the top */
upButton.addEventListener('click', function() {
	document.documentElement.scrollTop = 0;
});

/* Clicking upper and lower navigation bar buttons */
for (let i = 0; i <= 1; i++) {
	homeButton[i].addEventListener("click", function() {
		contactInfo.style.display = "none";
		welcomeInfo.style.display = "block";
		aboutInfo.style.display = "none";
	});
	
	aboutButton[i].addEventListener("click", function() {
		contactInfo.style.display = "none";
		welcomeInfo.style.display = "none";
		aboutInfo.style.display = "block";
	});
	
	contactsButton[i].addEventListener("click", function() {
		contactInfo.style.display = "block";
		welcomeInfo.style.display = "none";
		aboutInfo.style.display = "none";
	});
}