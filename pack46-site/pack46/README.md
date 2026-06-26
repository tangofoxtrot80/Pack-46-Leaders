# Pack 46 · Leader HQ

A resource website for the **adult leadership of Cub Scout Pack 46** — Westchase, Tampa, FL
(Greater Tampa Bay Area Council).

It's a plain static site: HTML, CSS, and a little JavaScript. No build step, no
framework, no dependencies. You can open the files directly in a browser or host
them free on GitHub Pages.

---

## What's in it

| Page | File | What it does |
|------|------|--------------|
| **Home / Leader HQ** | `index.html` | Welcome, the next 3 upcoming events, a "launchpad" of the tools leaders sign into, and a leadership roster reference. |
| **Program Calendar** | `calendar.html` | The whole program year (Aug–Jul) as a year-at-a-glance trail of tentpole events, plus a filterable month-by-month list. |
| **Resources** | `resources.html` | A sorted directory of web links: official tools, advancement & program, training & youth protection, forms & health, fundraising, and local council pages. |

All links to Scouting America and council systems are real and current as of June 2026.

---

## Project structure

```
pack46/
├── index.html            ← Home page
├── calendar.html         ← Program calendar
├── resources.html        ← Resource directory
├── README.md
├── assets/
│   ├── css/styles.css     ← All styling + the official color palette
│   └── js/site.js         ← Nav, "what's next", and calendar rendering
└── data/
    └── events.js          ← ★ The one file you edit to update the calendar
```

---

## How to edit the common things

You do **not** need to know how to code for any of these.

### Add or change a calendar event
Open `data/events.js`. Copy one of the blocks between `{ }`, paste it, and change
the values. Keep the commas between blocks. Each event looks like this:

```js
{
  date: "2027-01-24",          // YYYY-MM-DD
  title: "Pinewood Derby",
  category: "social",          // see the list of categories in the file
  tentpole: true,              // true = shows as a big badge on the trail
  location: "TBD",
  note: "Hand out car kits in December; publish rules early.",
  link: "https://..."          // optional; use "" if none
}
```

Both the calendar **and** the "What's next" box on the home page update automatically.

### Update the leadership roster (names)
Open `index.html`, find the **Leadership roster** section, and replace each
`— Add name` with your team's actual names.

### Add or fix a resource link
Open `resources.html`, copy a `<a class="res-link">…</a>` block inside the right
category, and change the URL and text.

### Change the colors
They live at the top of `assets/css/styles.css` as variables. The official set:

```
Blue   #003F87      Tan   #D6CEBD
Gold   #FDC116      Gray  #E9E9E4
White  #FFFFFF
```

---

## Viewing it locally

Just double-click `index.html` — it works straight from disk (the calendar data is
loaded as a script, so there's no "fetch blocked" problem you'd hit with a JSON file).

To preview exactly as it'll appear when hosted, run a tiny local server:

```bash
# from inside the pack46 folder
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## Publishing free with GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*,
   pick your `main` branch and the `/ (root)` folder, and **Save**.
4. After a minute, your site is live at
   `https://<your-username>.github.io/<repo-name>/`.

No other configuration is needed.

---

## Ideas for the next version (add-on roadmap)

These weren't built yet, but the site is structured so they slot in cleanly. Roughly
in order of bang-for-buck for a pack:

1. **Pinewood Derby toolkit** — a dedicated page: published rules, weigh-in checklist,
   heat schedule, and a simple bracket. The single most-asked-about event.
2. **Blue & Gold planning checklist** — venue, food, advancement order, program flow,
   and a countdown timeline.
3. **Recruitment / Join Scouting Night kit** — flyer templates, the BeAScout pin link,
   a sign-up QR code, and a "first 30 days" plan for new families.
4. **New family welcome guide** — uniform/insignia placement, what each rank means,
   how dues work, and what to expect month to month.
5. **Budget & dues tracker** — a printable or spreadsheet-linked view of the pack
   budget, popcorn goals, and dues status.
6. **Recharter checklist** — the Key 3 to-do list with the deadline front and center.
7. **Communication templates** — ready-to-send email and Remind/ClassDojo blurbs for
   each tentpole event.
8. **Photo highlights** — a simple gallery of past events (great for recruiting).
9. **Den-by-den advancement snapshot** — a visual of where each den stands, pulled
   from or mirroring Scoutbook.
10. **Volunteer sign-up board** — who's covering what for the next few events.

A couple of these (calendar export to iCal, a printable one-page year-at-a-glance)
are small enough to add directly to the existing pages.

---

*An internal resource site for adult leaders. Not an official publication of Scouting
America or the Greater Tampa Bay Area Council.*
