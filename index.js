var elDoubt = document.querySelectorAll('.doubt');

elDoubt.forEach(function(doubt) {
    doubt.addEventListener('click', function() {
        doubt.classList.toggle('active');
    });
});
