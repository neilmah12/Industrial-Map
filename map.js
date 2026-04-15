// ─────────────────────────────────────────────
// MAP INITIALISATION
// ─────────────────────────────────────────────
let map;
let markerClusterGroup;
let allMarkers = []; // { marker, location } pairs used by filters

function initMap() {
  map = L.map("map", {
    center: [CONFIG.map.lat, CONFIG.map.lng],
    zoom:   CONFIG.map.zoom,
    zoomControl: false
  });

  // Zoom control — bottom right
  L.control.zoom({ position: "bottomright" }).addTo(map);

  // Basemap tiles
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);

  // Marker cluster group
  markerClusterGroup = L.markerClusterGroup({
    showCoverageOnHover: false,
    maxClusterRadius: 50,
    iconCreateFunction: function (cluster) {
      return L.divIcon({
        html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
        className: "",
        iconSize: [36, 36]
      });
    }
  });

  buildMarkers();
  map.addLayer(markerClusterGroup);
}

// Create a circular SVG icon for a given category color
function createMarkerIcon(color) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
      <path d="M14 0C6.268 0 0 6.268 0 14c0 9.333 14 22 14 22S28 23.333 28 14C28 6.268 21.732 0 14 0z"
            fill="${color}" stroke="#fff" stroke-width="1.5"/>
      <circle cx="14" cy="14" r="6" fill="#fff" fill-opacity="0.85"/>
    </svg>`;
  return L.divIcon({
    html: svg,
    className: "",
    iconSize:   [28, 36],
    iconAnchor: [14, 36],
    popupAnchor:[0, -34]
  });
}

function buildMarkers() {
  allMarkers = [];

  LOCATIONS.forEach(function (loc) {
    const cat   = CONFIG.categories[loc.category];
    const color = cat ? cat.color : "#999999";
    const icon  = createMarkerIcon(color);

    const marker = L.marker([loc.lat, loc.lng], { icon })
      .bindPopup(buildPopup(loc), { maxWidth: 260 });

    allMarkers.push({ marker, location: loc });
    markerClusterGroup.addLayer(marker);
  });
}

function buildPopup(loc) {
  const cat   = CONFIG.categories[loc.category];
  const color = cat ? cat.color : "#999";
  const label = cat ? cat.label : loc.category;

  return `
    <div class="popup-content">
      <div class="popup-category" style="background:${color}">${label}</div>
      <div class="popup-name">${loc.name}</div>
      <div class="popup-address">${loc.address}</div>
    </div>`;
}

// Called by filters.js whenever the active set of markers changes
function refreshMarkers(visibleLocations) {
  markerClusterGroup.clearLayers();
  allMarkers.forEach(function ({ marker, location }) {
    if (visibleLocations.has(location)) {
      markerClusterGroup.addLayer(marker);
    }
  });
}
