document.addEventListener('DOMContentLoaded', function() {
    const scrollUpBtn = document.getElementById('scrollUpBtn');
  
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 200) { 
        scrollUpBtn.classList.add('show');
      } else {
        scrollUpBtn.classList.remove('show');
      }
    });
  
  
    scrollUpBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    });
  });
  