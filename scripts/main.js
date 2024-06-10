// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
// navbar close


// preloader starts
// Set the progress bar fill time (in milliseconds)
const PROGRESS_FILL_TIME = 3000;

window.addEventListener('load', function() {
    // Disable scrolling during preloading
    document.body.style.overflow = 'hidden';

    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');
    const progressBar = document.getElementById('progress-bar');

    // Start filling the progress bar
    progressBar.style.width = '100%';

    // Set a timeout to start the upward movement after the progress bar is filled
    setTimeout(() => {
        // Add class for moving the preloader from right to left
        preloader.classList.add('move-left');

        // Hide the preloader after transition ends
        preloader.addEventListener('transitionend', function() {
            preloader.style.display = 'none';

            // Enable scrolling after preloading is done
            document.body.style.overflow = 'auto';

            // Show the content from the top
            content.style.display = 'block';
            
            // Scroll to the top of the content immediately
            window.scrollTo(0, 0); // Scroll to the top of the page
        });
    }, PROGRESS_FILL_TIME + 2000); // Adjust timing to match the transition duration in CSS
});


// preloader ends

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