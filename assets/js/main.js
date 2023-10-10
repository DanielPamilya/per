AOS.init();

AOS.init({
  

  offset: 120,
  delay: 0, 
  duration: 700, 
  easing: 'ease', 
  once: false, 
  mirror: false, 
  anchorPlacement: 'top-bottom', 

});



document.addEventListener("DOMContentLoaded", function() {
  const navbarLinks = document.querySelectorAll(".navbar-nav a");

  navbarLinks.forEach(link => {
      link.addEventListener("click", function(event) {
          event.preventDefault();

          const targetId = this.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);

          window.scrollTo({
              top: targetSection.offsetTop,
              behavior: "smooth"
          });

          const navbarToggler = document.querySelector(".navbar-toggler");
          if (navbarToggler.getAttribute("aria-expanded") === "true") {
              navbarToggler.click();
          }
      });
  });
});





(function() {
  "use strict";
  
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

})()
