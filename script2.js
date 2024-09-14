document.getElementById('streetViewBtn').addEventListener('click', function() {
    // Inject the iframe into the container when the button is clicked
    document.getElementById('streetViewContainer').innerHTML = `
        <div class="sketchfab-embed-wrapper"> <iframe title="Modern Sofa" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/ac92f6e97eaa43c4ad6cb8f7c65ac43f/embed"> </iframe>;
});
