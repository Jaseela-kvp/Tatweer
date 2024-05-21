// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
// navbar close
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
  // project
  
  function filterProjects(status) {
    let allProjects = document.querySelectorAll('.card');
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