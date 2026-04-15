// ─────────────────────────────────────────────
// EXCEL / CSV IMPORTER
// Uses SheetJS (loaded via CDN in index.html)
//
// Expected columns (case-insensitive, any order):
//   name | category | address | lat | lng
//   Aliases accepted:
//     lat  → latitude
//     lng  → longitude, long
// ─────────────────────────────────────────────

function initImporter() {
  const dropZone  = document.getElementById("import-drop");
  const fileInput = document.getElementById("import-file-input");
  const status    = document.getElementById("import-status");

  if (!dropZone || !fileInput) return;

  // Click the hidden file input when the drop zone is clicked
  dropZone.addEventListener("click", function () {
    fileInput.value = "";
    fileInput.click();
  });

  fileInput.addEventListener("change", function () {
    if (fileInput.files[0]) handleFile(fileInput.files[0]);
  });

  // Drag-and-drop
  dropZone.addEventListener("dragover", function (e) {
    e.preventDefault();
    dropZone.classList.add("dragging");
  });

  dropZone.addEventListener("dragleave", function () {
    dropZone.classList.remove("dragging");
  });

  dropZone.addEventListener("drop", function (e) {
    e.preventDefault();
    dropZone.classList.remove("dragging");
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  });

  function handleFile(file) {
    const ext = file.name.split(".").pop().toLowerCase();
    if (!["xlsx", "xls", "csv"].includes(ext)) {
      setStatus("error", "Please upload an .xlsx, .xls, or .csv file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheet    = workbook.Sheets[workbook.SheetNames[0]];
        const rows     = XLSX.utils.sheet_to_json(sheet, { defval: "" });

        if (rows.length === 0) {
          setStatus("error", "The file appears to be empty.");
          return;
        }

        const parsed = parseRows(rows);
        if (parsed.errors.length && parsed.locations.length === 0) {
          setStatus("error", parsed.errors[0]);
          return;
        }

        // Replace global LOCATIONS and refresh everything
        LOCATIONS.length = 0;
        parsed.locations.forEach(function (loc) { LOCATIONS.push(loc); });

        // Rebuild markers and reapply filters
        markerClusterGroup.clearLayers();
        allMarkers.length = 0;
        buildMarkers();
        activeCategories = new Set(Object.keys(CONFIG.categories));
        syncButtonStates();
        applyFilters();

        const warn = parsed.errors.length
          ? ` (${parsed.errors.length} row${parsed.errors.length > 1 ? "s" : ""} skipped)`
          : "";
        setStatus("ok", `Loaded ${parsed.locations.length} location${parsed.locations.length !== 1 ? "s" : ""}${warn}.`);

      } catch (err) {
        setStatus("error", "Could not read the file. Is it a valid Excel or CSV?");
        console.error(err);
      }
    };
    reader.readAsArrayBuffer(file);
  }

  // ── Row parser ──────────────────────────────
  function normalizeHeader(h) {
    return String(h).toLowerCase().trim()
      .replace(/\s+/g, "")       // remove spaces
      .replace(/[^a-z]/g, "");   // letters only
  }

  const HEADER_MAP = {
    name:      ["name"],
    category:  ["category", "type"],
    address:   ["address", "addr"],
    lat:       ["lat", "latitude"],
    lng:       ["lng", "long", "longitude"]
  };

  function findColumn(headers, field) {
    const aliases = HEADER_MAP[field];
    return headers.find(function (h) {
      return aliases.includes(normalizeHeader(h));
    });
  }

  function parseRows(rows) {
    const headers = Object.keys(rows[0]);
    const col = {
      name:     findColumn(headers, "name"),
      category: findColumn(headers, "category"),
      address:  findColumn(headers, "address"),
      lat:      findColumn(headers, "lat"),
      lng:      findColumn(headers, "lng")
    };

    // Check required columns exist
    const missing = Object.keys(col).filter(function (k) { return !col[k]; });
    if (missing.length) {
      return {
        locations: [],
        errors: ["Missing columns: " + missing.join(", ") +
                 ". Expected: name, category, address, lat, lng"]
      };
    }

    const locations = [];
    const errors    = [];

    rows.forEach(function (row, i) {
      const name     = String(row[col.name]     || "").trim();
      const category = String(row[col.category] || "").trim();
      const address  = String(row[col.address]  || "").trim();
      const lat      = parseFloat(row[col.lat]);
      const lng      = parseFloat(row[col.lng]);

      if (!name && !address) return; // blank row, skip silently

      if (!name) {
        errors.push(`Row ${i + 2}: missing name`);
        return;
      }
      if (isNaN(lat) || isNaN(lng)) {
        errors.push(`Row ${i + 2}: invalid lat/lng for "${name}"`);
        return;
      }
      if (!CONFIG.categories[category]) {
        errors.push(`Row ${i + 2}: unknown category "${category}" for "${name}"`);
        return;
      }

      locations.push({ name, category, address, lat, lng });
    });

    return { locations, errors };
  }

  // ── Status message ──────────────────────────
  function setStatus(type, msg) {
    if (!status) return;
    status.textContent  = msg;
    status.className    = "import-status import-status--" + type;
    status.style.display = "block";
  }
}
