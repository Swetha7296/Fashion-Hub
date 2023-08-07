function initMap() {
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, {
      center: { lat: 30.600976, lng: 32.276348 },
      zoom: 15
    });
  }