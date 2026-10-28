# Territory Console

An offline territory planner for pharmaceutical field representatives. It turns your monthly order data into a forecast, shows how your brands stand against competitors in each account, and builds a weekly visit plan grouped by area.

It is a single web page that installs on an iPad or phone from the home screen. **All your data stays on your device.** There is no account, no server and no tracking.

> This is an independent personal project. It is not affiliated with, endorsed by or supported by any pharmaceutical company. It ships with **no data**.

---

## What it does

| Area | What you get |
|---|---|
| **Forecast** | Monthly orders and forecast by account and presentation, estimated real use (orders minus lead stock), seasonality, and a re-forecast tool with four methods |
| **Forecast accuracy** | Each method tested on the last 8 closed quarters (error and bias), with the best method marked for every brand |
| **Competition** | Share by quarter or month, competitor mix, market growth and evolution index, signals by clinic (switch risk, competitor out, low share) |
| **Account tiers** | Grow / Defend / Maintain / Monitor from each clinic's market size and your share against the territory average, with visits per month per tier |
| **Doctors** | Role and class inside the account (A drives orders, B see when there, C group or events) |
| **Plan** | Weekly journey plan, plan adherence, and **Plan my week**: accounts behind on their visit target, grouped by area and put in route order |
| **Map** | Clinics on a map coloured by status, tier, sector or last visit, with routes and directions links |
| **Review** | Quarter scorecard, takeaways, share and trend charts |

---

## Install (about 10 minutes)

### 1. Host your own copy (GitHub Pages, free)
1. **Fork** this repository, or create a new one and upload these files: `index.html`, `sw.js`, `manifest.webmanifest`, `icon-180.png`, `icon-192.png`, `icon-512.png`.
2. In the repository: **Settings → Pages → Deploy from a branch → `main` / `(root)` → Save**.
3. After about a minute your address appears there: `https://<your-name>.github.io/<repository>/`

### 2. Add it to your iPad or phone
1. Open your address in **Safari** (iPhone/iPad) or **Chrome** (Android).
2. **Share → Add to Home Screen** (Android: menu → Install app).
3. Always open it from the home-screen icon. That version keeps its own storage and works offline.

---

## Get started

1. **Settings → Brands:** set your brands, their presentations and competitors.
2. **Import workbook:** an Excel or CSV file with an account column, a product column and month columns such as `Jan 26`, `2026-03` or `Oct 26 forecast`. You check the name matches before anything is saved, and the app remembers them for next time.
3. **Map:** place your clinics so the weekly plan can group them by area.
4. **Settings → Visit rules:** adjust visits per month for each tier and for key doctors.

The map covers Kuwait (areas and roads are built in). The rest works for any territory.

---

## Your data

- **Stored only on the device** that opens the app, in its browser storage. Nothing is sent anywhere.
- **No sync.** Each device has its own copy.
- **Back up regularly:** **Settings → Save backup** creates one `.json` file; keep it in Files, iCloud Drive or Google Drive. The app reminds you when a backup is due. **Restore a backup** brings it back on any device.
- Deleting the home-screen app or clearing site data deletes your data, unless you have a backup.
- **Follow your company's data policy** before loading company sales or market data onto a personal device.

---

## Update

Replace `index.html` and `sw.js` with the new versions. The app picks up the update the next time it opens online. Your data is not touched.

---

## Technical notes

- One self-contained `index.html`: Chart.js 4.4.1 (MIT), Leaflet 1.9.4 (BSD-2) and SheetJS 0.18.5 (Apache-2.0) are bundled, so it runs fully offline after the first visit.
- `sw.js` caches the app for offline use. It fetches the page from the network when online, so updates arrive.
- Map data: Natural Earth (public domain); Kuwait area boundaries from geoBoundaries, built from OpenStreetMap (© OpenStreetMap contributors, ODbL).
- Fonts load from Google Fonts when online and fall back to system fonts offline.

## Disclaimer

Provided as is, without warranty. Forecasts, tiers and suggestions are planning aids computed from the data you load; check them against your own judgement and your company's guidance.
