const NAV_HEIGHT = document.querySelector('.navbar').offsetHeight;

document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      const y = target.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
});

// Timeline reveal
function revealTimeline() {
  const items = document.querySelectorAll('.timeline li');
  const trigger = window.innerHeight * 0.8;

  items.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < trigger) {
      item.classList.add('visible');
    } else {
      item.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', revealTimeline);
window.addEventListener('load', revealTimeline);

