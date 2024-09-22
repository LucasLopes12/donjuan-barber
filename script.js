window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  header.style.opacity = 0;
  setTimeout(() => {
    header.style.opacity = 1;
  }, 100);

  const updateHeader = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY > 50) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  };

  window.addEventListener('scroll', updateHeader);
  updateHeader();
});