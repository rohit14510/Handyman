document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = document.querySelectorAll('.lazy');

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var image = entry.target;
                image.src = image.dataset.src;
                image.classList.remove('lazy');
                observer.unobserve(image);
            }
        });
    });

    lazyImages.forEach(function(image) {
        observer.observe(image);
    });
});

// $(document) .ready(function(){
//     $('.about--part1') .waypoint(function(direction){
//       $('.about--part1') .addClass('animated zoomIn')
//     },{
//       offset:'50px'
//     })
//   });
  