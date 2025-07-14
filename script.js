// Load particles.js background effect
particlesJS.load('particles-js', 'particles.json', function () {
  console.log('🌌 Particles.js loaded successfully.');
});

// OPTIONAL: You can add scroll animations here using AOS or GSAP
// Example using AOS (if you include AOS in your HTML):
// AOS.init({
//   duration: 1000,
//   once: true
// });

// Example for future enhancements:
// window.addEventListener("scroll", function() {
//   const header = document.querySelector("header");
//   header.classList.toggle("sticky", window.scrollY > 100);
// });
const typingText = document.getElementById('typing-text');
const messages = [
  "System Booting...",
  "Certified Ethical Hacker | MDM Specialist | Network Engineer",
  "Welcome to Haarish's Portfolio"
];

let msgIndex = 0;
let charIndex = 0;
let typingDelay = 80;
let eraseDelay = 40;
let delayBetween = 1500;

function typeMessage() {
  if (charIndex < messages[msgIndex].length) {
    typingText.textContent += messages[msgIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeMessage, typingDelay);
  } else {
    setTimeout(eraseMessage, delayBetween);
  }
}

function eraseMessage() {
  if (charIndex > 0) {
    typingText.textContent = messages[msgIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseMessage, eraseDelay);
  } else {
    msgIndex = (msgIndex + 1) % messages.length;
    setTimeout(typeMessage, typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (typingText) {
    typeMessage();
  }
});


const aboutTyping = document.getElementById('about-typing');
const aboutMessages = [
  "👨‍💻 IT Engineer",
  "🛡️ Cybersecurity Specialist",
  "📱 MDM & Network Expert"
];

let aboutIndex = 0;
let aboutChar = 0;
let aboutTypingSpeed = 90;
let aboutErasingSpeed = 40;
let aboutDelay = 1500;

function typeAbout() {
  if (aboutChar < aboutMessages[aboutIndex].length) {
    aboutTyping.textContent += aboutMessages[aboutIndex].charAt(aboutChar);
    aboutChar++;
    setTimeout(typeAbout, aboutTypingSpeed);
  } else {
    setTimeout(eraseAbout, aboutDelay);
  }
}

function eraseAbout() {
  if (aboutChar > 0) {
    aboutTyping.textContent = aboutMessages[aboutIndex].substring(0, aboutChar - 1);
    aboutChar--;
    setTimeout(eraseAbout, aboutErasingSpeed);
  } else {
    aboutIndex = (aboutIndex + 1) % aboutMessages.length;
    setTimeout(typeAbout, aboutTypingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (aboutTyping) typeAbout();
});
