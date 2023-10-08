document.getElementById("view-map").addEventListener("click", function (e) {
    e.preventDefault();

    // Replace with your house's latitude and longitude
    const latitude = 20.406858;
    const longitude = 78.118359;
    const mapUrl = `https://maps.google.com/maps?q=${20.406858},${78.118359}&z=17&output=embed`;

     

    // Open Google Maps in a new tab
    window.open(mapUrl, "_blank");
});