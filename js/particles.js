document.addEventListener('DOMContentLoaded', () => {
  const particleContainer = document.getElementById('particle-animation');
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Random size between 4px and 10px
    const size = Math.random() * 6 + 4;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    // Random horizontal position within container width
    particle.style.left = Math.random() * 100 + '%';

    // Random animation duration between 5s and 15s
    const duration = Math.random() * 10 + 5;
    particle.style.animationDuration = duration + 's';

    // Random animation delay between 0s and 15s
    const delay = Math.random() * 15;
    particle.style.animationDelay = delay + 's';

    particleContainer.appendChild(particle);
  }
});
