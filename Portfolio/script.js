document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('main-header');
  const scrollThreshold = 50;
  
  const handleScroll = () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  const menuBtn = document.getElementById('mobile-menu-btn');
  const menuCloseBtn = document.getElementById('mobile-menu-close-btn'); 

  if (menuBtn && nav && menuCloseBtn) {
    menuBtn.addEventListener('click', () => {
      nav.classList.add('open');
    });
    menuCloseBtn.addEventListener('click', () => { 
      nav.classList.remove('open');
    });
  }
  
});