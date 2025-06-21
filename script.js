// === Tanay Portfolio Script.js ===

// Typewriter effect
const typewriter = document.getElementById('typewriter');
if (typewriter) {
  const texts = ["Freelancer Godzyy.", "UI Designer.", "Web Dev.", "Beast Coder."];
  let index = 0, charIndex = 0, isDeleting = false;

  function type() {
    const currentText = texts[index];
    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    typewriter.textContent = currentText.substring(0, charIndex);

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
      setTimeout(type, 300);
    } else {
      setTimeout(type, isDeleting ? 60 : 100);
    }
  }

  type();
}

// Scroll-in animation
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.3 });

cards.forEach(card => observer.observe(card));
