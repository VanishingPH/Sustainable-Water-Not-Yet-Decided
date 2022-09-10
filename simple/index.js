mapboxgl.accessToken = 'pk.eyJ1IjoiZGFtbXNoaW5lIiwiYSI6ImNsN2sxZjZkcTAzNHYzdm1xaHc1M2p3MWIifQ.VR6TerlEL-LDJ6Iqa3s3LQ';

const map = new mapboxgl.Map({
  container: 'map',
  maxZoom: 5.99,
  minZoom: 4,
  zoom: 5,
  center: [-75.789, 41.874],
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: 'mapbox://styles/mapbox/dark-v10'
});
   
map.on('load', () => {
  map.addSource('radar', {
    'type': 'image',
    'url': 'https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif',
    'coordinates': [
      [-80.425, 46.437],
      [-71.516, 46.437],
      [-71.516, 37.936],
      [-80.425, 37.936]
    ]
  });
  
  map.addLayer({
    id: 'radar-layer',
    'type': 'raster',
    'source': 'radar',
    'paint': {
      'raster-fade-duration': 0
    }
  });
});