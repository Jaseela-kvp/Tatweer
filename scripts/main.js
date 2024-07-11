// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
// navbar close




// navbar
function closeNavbar() {
    var navbarContent = document.getElementById('navbarContent');
    var navbarToggler = document.querySelector('.navbar-toggler');
  
    // Check if the navbar is currently expanded
    if (navbarContent.classList.contains('show')) {
      // If it's expanded, collapse it
      navbarContent.classList.remove('show');
      // Toggle the aria-expanded attribute to false
      navbarToggler.setAttribute('aria-expanded', 'false');
    }
  }


// animation 
 new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 100, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true // act on asynchronously loaded content (default is true)
  }).init();




  // project
  
  function filterProjects(status) {
    let allProjects = document.querySelectorAll('.overlay-class');
    allProjects.forEach(project => {
      if (status === 'all') {
        project.style.display = 'block';
      } else {
        project.style.display = project.classList.contains(status) ? 'block' : 'none';
      }
    });
  }

  // Initially show all projects
  filterProjects('all');


// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
      $('.back-to-top').fadeIn('slow');
  } else {
      $('.back-to-top').fadeOut('slow');
  }
});