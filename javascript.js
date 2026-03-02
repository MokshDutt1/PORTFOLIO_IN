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

    // Ripple Effect with Neon Color
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.left = `${e.clientX - 50}px`;
    ripple.style.top = `${e.clientY - 50}px`;
    document.body.appendChild(ripple);

    ripple.addEventListener('animationend', () => ripple.remove());

    // Navigation Logic
    zIndex++;
    targetTab.style.zIndex = zIndex;
    
    // Highlight active header link
    document.querySelectorAll('header nav a').forEach(nav => nav.classList.remove('active'));
    // Try to find the nav link that corresponds to this click
    const correspondingNav = document.querySelector(`header nav a[data-tab="${tabKey}"]`);
    if(correspondingNav) correspondingNav.classList.add('active');

    targetTab.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    activeTab = id;
  });
});

window.addEventListener('DOMContentLoaded', () => {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#00f3ff' }, // Cyan particles
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3 },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#00f3ff',
          opacity: 0.2,
          width: 1
        },
        move: { enable: true, speed: 3 }
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        },
        modes: {
          grab: { distance: 180, line_linked: { opacity: 0.8 } }
        }
      },
      retina_detect: true
    });
  }
});