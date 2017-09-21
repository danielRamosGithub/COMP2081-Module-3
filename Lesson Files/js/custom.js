// Custom JavaScript
// STEP 15: Call up the carousel using the id, and use the .carousel() method create the options object
$('.carousel').carousel({
    interval: 3000
  })

// STEP 16: Change the interval to 5 seconds (set in milliseconds)
// STEP 17: Try an event handler to zoom up the .carousel-caption after the slide completes sliding - by adding a class when the slide has finished animating, and removing it when it begins
$('#carousel-cars').on('slide.bs.carousel', function() {
    // remove class that zooms caption
    $('.carousel-caption').removeClass('zoomit');
});
$('#carousel-cars').on('slid.bs.carousel', function() {
    // remove class that zooms caption
    $('.carousel-caption').addClass('zoomit');
});
  