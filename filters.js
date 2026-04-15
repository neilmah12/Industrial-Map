// ─────────────────────────────────────────────
// FILTERS & SEARCH
// ─────────────────────────────────────────────
let activeCategories = new Set(Object.keys(CONFIG.categories)); // all on by default
let searchQuery      = "";

// Build the category filter buttons from CONFIG
function buildFilters() {
  const container = document.getElementById("category-filters");

  // "All" pill
  const allBtn = document.createElement("button");
  allBtn.className   = "filter-btn active";
  allBtn.dataset.cat = "__all__";
  allBtn.textContent = "All";
  allBtn.addEventListener("click", function () {
    activeCategories = new Set(Object.keys(CONFIG.categories));
    syncButtonStates();
    applyFilters();
  });
  container.appendChild(allBtn);

  // Per-category pills
  Object.entries(CONFIG.categories).forEach(function ([key, cat]) {
    const btn = document.createElement("button");
    btn.className   = "filter-btn active";
    btn.dataset.cat = key;
    btn.textContent = cat.label;
    btn.style.setProperty("--cat-color", cat.color);
    btn.addEventListener("click", function () {
      toggleCategory(key);
    });
    container.appendChild(btn);
  });

  // Count badge
  updateCountBadge();
}

function toggleCategory(key) {
  if (activeCategories.has(key)) {
    activeCategories.delete(key);
    // If nothing is active, re-select all
    if (activeCategories.size === 0) {
      activeCategories = new Set(Object.keys(CONFIG.categories));
    }
  } else {
    activeCategories.add(key);
  }
  syncButtonStates();
  applyFilters();
}

function syncButtonStates() {
  const allActive = activeCategories.size === Object.keys(CONFIG.categories).length;

  document.querySelectorAll(".filter-btn").forEach(function (btn) {
    if (btn.dataset.cat === "__all__") {
      btn.classList.toggle("active", allActive);
    } else {
      btn.classList.toggle("active", activeCategories.has(btn.dataset.cat));
    }
  });
}

function applyFilters() {
  const q = searchQuery.toLowerCase().trim();

  const visible = new Set(
    LOCATIONS.filter(function (loc) {
      const catMatch = activeCategories.has(loc.category);
      const textMatch =
        !q ||
        loc.name.toLowerCase().includes(q) ||
        loc.address.toLowerCase().includes(q) ||
        loc.category.toLowerCase().includes(q);
      return catMatch && textMatch;
    })
  );

  refreshMarkers(visible);
  updateCountBadge(visible.size);
  renderListPanel(visible);
}

function updateCountBadge(count) {
  const total = LOCATIONS.length;
  const shown = count !== undefined ? count : total;
  const badge = document.getElementById("location-count");
  if (badge) badge.textContent = shown === total
    ? `${total} locations`
    : `${shown} of ${total} locations`;
}

// ── Search ────────────────────────────────────
function initSearch() {
  const input = document.getElementById("search-input");
  if (!input) return;

  input.addEventListener("input", function () {
    searchQuery = input.value;
    applyFilters();
  });

  // Clear button
  const clearBtn = document.getElementById("search-clear");
  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      input.value  = "";
      searchQuery  = "";
      applyFilters();
    });
  }
}

// ── Location list panel ───────────────────────
function renderListPanel(visibleSet) {
  const list = document.getElementById("location-list");
  if (!list) return;

  const items = LOCATIONS.filter(function (loc) {
    return visibleSet ? visibleSet.has(loc) : true;
  });

  if (items.length === 0) {
    list.innerHTML = '<p class="list-empty">No locations match your search.</p>';
    return;
  }

  list.innerHTML = items
    .map(function (loc) {
      const cat   = CONFIG.categories[loc.category];
      const color = cat ? cat.color : "#999";
      return `
        <div class="list-item" data-lat="${loc.lat}" data-lng="${loc.lng}">
          <span class="list-dot" style="background:${color}"></span>
          <div class="list-text">
            <div class="list-name">${loc.name}</div>
            <div class="list-address">${loc.address}</div>
          </div>
        </div>`;
    })
    .join("");

  // Click a list item → fly to that marker
  list.querySelectorAll(".list-item").forEach(function (el) {
    el.addEventListener("click", function () {
      const lat = parseFloat(el.dataset.lat);
      const lng = parseFloat(el.dataset.lng);
      map.flyTo([lat, lng], 15, { duration: 0.8 });

      // Open the popup for this marker
      const pair = allMarkers.find(function (m) {
        return m.location.lat === lat && m.location.lng === lng;
      });
      if (pair) {
        // Unspider the cluster if needed
        markerClusterGroup.zoomToShowLayer(pair.marker, function () {
          pair.marker.openPopup();
        });
      }
    });
  });
}
