const phrases = ["I'm a front end developer", "I build responsive websites"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const dynamicText = document.querySelector(".dynamic-text");
const typingSpeed = 100; // Speed of typing (ms)
const deletingSpeed = 50; // Speed of deleting (ms)
const pauseBetween = 1000; // Pause before deleting/typing next phrase (ms)

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    // Typing
    dynamicText.textContent = currentPhrase.substring(0, charIndex);
    charIndex++;
    if (charIndex > currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeEffect, pauseBetween);
    } else {
      setTimeout(typeEffect, typingSpeed);
    }
  } else {
    // Deleting
    dynamicText.textContent = currentPhrase.substring(0, charIndex);
    charIndex--;
    if (charIndex < 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length; // Move to next phrase
      setTimeout(typeEffect, typingSpeed);
    } else {
      setTimeout(typeEffect, deletingSpeed);
    }
  }
}

// Start the typing effect
typeEffect();
