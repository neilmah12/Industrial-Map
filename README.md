# Greater Edmonton Competitor Map

An interactive, client-facing site selection map built with Leaflet.js. Displays competitor locations across Greater Edmonton with category filtering, real-time search, and marker clustering. Deployable to GitHub Pages or Netlify, or openable directly as a local HTML file.

---

## File Structure

```
/
├── index.html
├── style.css
├── config.js
├── data.js
├── map.js
├── filters.js
└── README.md
```

No `logos/` folder required. Logos are embedded directly in `config.js` as Base64 strings, making every file self-contained. A single HTML file (or GitHub Pages link) sent to a client will display logos correctly with no missing assets.

---

## Quick Start (Local)

1. Download or clone this repository to your computer.
2. Add your logos to `config.js` (see **Swapping Logos** below).
3. Open `index.html` directly in any modern browser (Chrome, Firefox, Edge, Safari).
4. No server, no build step, no Node.js required.

---

## Deploy to GitHub Pages

1. **Create a GitHub account** at [github.com](https://github.com) if you don't have one.

2. **Create a new repository:**
   - Click the **+** icon in the top right → **New repository**
   - Name it anything (e.g., `edmonton-competitor-map`)
   - Set visibility to **Public**
   - Click **Create repository**

3. **Upload your files:**
   - On the repository page, click **Add file** → **Upload files**
   - Drag in all files from this folder
   - Click **Commit changes**

4. **Enable GitHub Pages:**
   - Go to **Settings** → **Pages** (left sidebar)
   - Under **Source**, select **Deploy from a branch**
   - Set branch to `main`, folder to `/ (root)`
   - Click **Save**

5. **Access your map:**
   - GitHub will provide a URL in the format: `https://yourusername.github.io/edmonton-competitor-map/`
   - It may take 1-2 minutes to go live after the first deploy.

6. **Updating after initial deploy:**
   - Return to the repository, click the file you want to update → pencil icon to edit inline, or use **Add file** → **Upload files** to replace files.
   - Changes go live within ~1 minute.

---

## Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up or log in.
2. From the dashboard, click **Add new site** → **Deploy manually**.
3. Drag the entire project folder into the upload area.
4. Netlify will assign a URL immediately (e.g., `https://random-name.netlify.app`).
5. To update: drag the folder again, or connect to a GitHub repo for automatic deploys.

---

## Swapping Logos

Logos are embedded as Base64 strings in a clearly marked section at the top of `config.js`. No image files are needed -- everything is self-contained.

### Step 1: Convert your logo to Base64

**Option A -- Python (Google Colab or local):**

```python
import base64

with open("your-logo.png", "rb") as f:
    encoded = base64.b64encode(f.read()).decode("utf-8")

print(encoded)
```

Copy the printed string. It will look like a long block of random characters starting with `iVBOR...`

**Option B -- Online converter:**

Go to [base64.guru/converter/encode/image](https://base64.guru/converter/encode/image), upload your PNG, and copy the output string.

### Step 2: Paste into config.js

Open `config.js` and find the clearly marked logo section at the top:

```js
// ─────────────────────────────────────────────
// LOGOS — swap these for a new client
// Paste Base64 strings below (no logos/ folder needed)
// ─────────────────────────────────────────────
companyLogo: "data:image/png;base64,PASTE_COMPANY_LOGO_BASE64_HERE",
clientLogo:  "data:image/png;base64,PASTE_CLIENT_LOGO_BASE64_HERE",
```

Replace `PASTE_COMPANY_LOGO_BASE64_HERE` and `PASTE_CLIENT_LOGO_BASE64_HERE` with your Base64 strings. Do not remove the `data:image/png;base64,` prefix.

### Step 3: Done

Save `config.js`. Open `index.html` or redeploy. Logos display correctly for anyone who opens the file or visits the URL -- no folder, no zip, no missing assets.

---

## Updating Location Data

All location data lives in `data.js` as a plain JavaScript array. Each entry follows this format:

```js
{
  name:      "Location Name",
  category:  "Golf Simulator",       // must match a category in config.js exactly
  address:   "123 Main St, Edmonton, AB",
  lat:       53.5461,
  lng:       -113.4938
}
```

**To add a location:** Copy an existing entry, paste it at the end of the array (before the closing `]`), and fill in the details. Make sure there is a comma after the preceding entry.

**To remove a location:** Delete the full `{ ... }` block for that entry, including its trailing comma.

**To find lat/lng coordinates:** Go to [google.com/maps](https://google.com/maps), right-click any location, and click the coordinates at the top of the context menu to copy them.

**Valid category values** (must match exactly, case-sensitive):
- `Golf Simulator`
- `Private Facilities`

---

## Changing Category Colors or Names

Open `config.js` and update the `categories` object:

```js
categories: {
  "Golf Simulator": {
    color: "#4DB595",
    label: "Golf Simulator"
  },
  "Private Facilities": {
    color: "#7E9CD1",
    label: "Private Facilities"
  }
}
```

If you rename a category here, update all matching entries in `data.js` as well.

---

## Map Settings

Also in `config.js`:

```js
map: {
  lat:  53.5461,
  lng:  -113.4938,
  zoom: 11
}
```

Adjust `zoom` to increase (closer) or decrease (farther out) the default view.

---

## Browser Compatibility

Tested and working in Chrome 110+, Firefox 110+, Edge 110+, Safari 16+. Internet Explorer is not supported.

---

## Dependencies (loaded via CDN, no install required)

| Library | Version | Purpose |
|---|---|---|
| Leaflet.js | 1.9.4 | Map rendering |
| Leaflet.markercluster | 1.5.3 | Marker clustering |

An internet connection is required on first load for CDN libraries and basemap tiles. Once cached, the UI works offline (basemap tiles may not render offline).
