// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
   // Basic options for a simple Google Map
   // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
   var mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 2,

      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(40.67, -73.94), // New York

      // How you would like to style the map.
      // This is where you would paste any style found on Snazzy Maps.
      styles: [
         { stylers: [{ hue: '#dd0d0d' }] },
         {
            featureType: 'road',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
         },
         {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ lightness: 100 }, { visibility: 'simplified' }],
         },
      ],
   };

   // Get the HTML DOM element that will contain your map
   // We are using a div with id="map" seen below in the <body>
   var mapElement = document.querySelector('.js-map');

   // Create the Google Map using our element and options defined above
   var map = new google.maps.Map(mapElement, mapOptions);

   // Let's also add a marker while we're at it
   var marker = new google.maps.Marker({
      position: new google.maps.LatLng(40.67, -73.94),
      map: map,
      title: 'Snazzy!',
   });
}
