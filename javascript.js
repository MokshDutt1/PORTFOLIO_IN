let allLinks = document.querySelectorAll('header nav a, .nav-scroll');
let activeTab = 'intro';
let zIndex = 2;

const tabMap = {
  intro: 'intro',
  exp: 'experience',
  skills: 'skills',
  project: 'project',
  content: 'contact'
};

allLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const tabKey = link.dataset.tab || link.innerText.trim().toLowerCase();
    const id = tabMap[tabKey] || tabKey;
    const targetTab = document.getElementById(id);

    if (!targetTab || id === activeTab) return;

    // Ripple Effect
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.left = `${e.clientX - 50}px`;
    ripple.style.top = `${e.clientY - 50}px`;
    document.body.appendChild(ripple);

    ripple.addEventListener('animationend', () => ripple.remove());

    // Scroll while ripple plays
    zIndex++;
    targetTab.style.zIndex = zIndex;
    window.scrollTo({
      top: targetTab.offsetTop,
      behavior: 'smooth'
    });

    activeTab = id;
  });
});


window.addEventListener('DOMContentLoaded', () => {
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: { value: '#ffffff' },
      shape: { type: 'circle' },
      opacity: { value: 0.3 },
      size: { value: 3 },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 2
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: 'grab' },
        onclick: { enable: false },
        resize: true
      }
    },
    retina_detect: true
  });
});
