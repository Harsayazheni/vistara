document.getElementById('streetViewBtn').addEventListener('click', function() {
    // Inject the iframe into the container when the button is clicked
    document.getElementById('streetViewContainer').innerHTML = `
        <iframe 
            src="https://www.google.com/maps/embed?pb=!4v1726240241837!6m8!1m7!1sdTfqUxNgUmV6mhXf9H96Ew!2m2!1d40.62229735285092!2d-74.17425710234504!3f304.2303587760827!4f-25.373158617003398!5f0.7820865974627469" 
            width="800" 
            height="310" 
            style="border:10;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>`;
});
