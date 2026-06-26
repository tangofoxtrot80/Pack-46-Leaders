/* ============================================================================
   PACK 46 — LEADER HQ  ·  site behavior
   Reads events from window.PACK_EVENTS (see /data/events.js) and renders:
     • the "What's next" cards on the home page
     • the year-at-a-glance trail and the month-by-month list on the calendar
   No build step, no dependencies. Works opened directly or on GitHub Pages.
   ============================================================================ */
(function () {
  "use strict";

  var EVENTS = Array.isArray(window.PACK_EVENTS) ? window.PACK_EVENTS.slice() : [];

  var MONTHS = ["January","February","March","April","May","June",
                "July","August","September","October","November","December"];
  var MON_SHORT = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var DOW = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  // Parse "YYYY-MM-DD" as a LOCAL date (avoids timezone off-by-one).
  function parseDate(s) {
    var p = String(s).split("-");
    return new Date(+p[0], (+p[1]) - 1, +p[2]);
  }
  function startOfToday() {
    var n = new Date();
    return new Date(n.getFullYear(), n.getMonth(), n.getDate());
  }
  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function prettyCat(c) { return c ? c.charAt(0).toUpperCase() + c.slice(1) : ""; }

  // -------------------------------------------------------------- mobile nav
  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var links = document.querySelector(".nav-links");
    if (!toggle || !links) return;
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // --------------------------------------------------- home: "What's next"
  function initNext() {
    var host = document.getElementById("next-grid");
    if (!host) return;

    var today = startOfToday();
    var upcoming = EVENTS
      .filter(function (e) { return parseDate(e.date) >= today; })
      .sort(function (a, b) { return parseDate(a.date) - parseDate(b.date); })
      .slice(0, 3);

    if (!upcoming.length) {
      host.innerHTML = '<p class="next-empty">No upcoming events are on the calendar yet. ' +
        'Add some in <code>data/events.js</code>.</p>';
      return;
    }

    host.innerHTML = upcoming.map(function (e) {
      var d = parseDate(e.date);
      var loc = e.location ? '<span class="next-meta">' + esc(e.location) + "</span>" : "";
      return '' +
        '<article class="next-card">' +
          '<div class="next-date">' +
            '<span class="next-day">' + d.getDate() + "</span>" +
            '<span class="next-mo">' + MON_SHORT[d.getMonth()] + " · " + DOW[d.getDay()] + "</span>" +
          "</div>" +
          '<div class="next-title">' + esc(e.title) + "</div>" +
          '<span class="cat cat-' + esc(e.category) + '">' + prettyCat(e.category) + "</span>" +
          loc +
        "</article>";
    }).join("");
  }

  // ------------------------------------------- calendar: program-year order
  // A Cub Scout program year runs Aug -> Jul. Sort events into that order.
  function programYearKey(d) {
    var m = d.getMonth();                 // 0=Jan
    var py = (m >= 7) ? 0 : 1;            // Aug-Dec first, Jan-Jul second
    return py * 100 + m;
  }
  function sortProgramYear(a, b) {
    var da = parseDate(a.date), db = parseDate(b.date);
    var ka = programYearKey(da), kb = programYearKey(db);
    if (ka !== kb) return ka - kb;
    return da - db;
  }

  // ------------------------------------------------ calendar: trail (top)
  function renderTrail(events) {
    var host = document.getElementById("trail");
    if (!host) return;
    var tentpoles = events.filter(function (e) { return e.tentpole; }).sort(sortProgramYear);

    host.innerHTML = tentpoles.map(function (e) {
      var d = parseDate(e.date);
      var link = e.link
        ? '<a class="evlink" href="' + esc(e.link) + '" target="_blank" rel="noopener">Open link &rsaquo;</a>'
        : "";
      var note = e.note ? "<p>" + esc(e.note) + "</p>" : "";
      return '' +
        '<div class="trail-stop is-tentpole">' +
          '<div class="trail-dot">' + MON_SHORT[d.getMonth()].toUpperCase() + "</div>" +
          '<div class="trail-month">' + MONTHS[d.getMonth()] + " " + d.getFullYear() + "</div>" +
          '<div class="trail-card is-tentpole">' +
            "<h3>" + esc(e.title) + "</h3>" +
            '<span class="when">' + DOW[d.getDay()] + ", " + MONTHS[d.getMonth()] + " " + d.getDate() + "</span>" +
            note +
            '<div class="row">' +
              '<span class="cat cat-' + esc(e.category) + '">' + prettyCat(e.category) + "</span>" +
              link +
            "</div>" +
          "</div>" +
        "</div>";
    }).join("");
  }

  // -------------------------------------- calendar: detailed month list
  var activeFilter = "all";

  function renderList(events) {
    var host = document.getElementById("month-list");
    if (!host) return;

    var list = events.slice().sort(sortProgramYear);
    if (activeFilter !== "all") {
      list = list.filter(function (e) { return e.category === activeFilter; });
    }
    if (!list.length) {
      host.innerHTML = '<p class="next-empty">No events match this filter.</p>';
      return;
    }

    var html = "";
    var curKey = null;
    list.forEach(function (e) {
      var d = parseDate(e.date);
      var key = d.getFullYear() + "-" + d.getMonth();
      if (key !== curKey) {
        if (curKey !== null) html += "</div>"; // close previous month-block
        curKey = key;
        html += '<div class="month-block"><div class="month-h">' +
                  MONTHS[d.getMonth()] + " " + d.getFullYear() +
                  '<span class="rule"></span></div>';
      }
      var loc = e.location
        ? '<span class="loc"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' + esc(e.location) + "</span>" : "";
      var link = e.link
        ? '<a class="evlink" href="' + esc(e.link) + '" target="_blank" rel="noopener">Open link &rsaquo;</a>'
        : "";
      var note = e.note ? '<p class="note">' + esc(e.note) + "</p>" : "";
      html += '' +
        '<article class="evrow' + (e.tentpole ? " is-tentpole" : "") + '">' +
          '<div class="evdate"><span class="d">' + d.getDate() + "</span>" +
            '<span class="dow">' + DOW[d.getDay()] + "</span></div>" +
          '<div class="evbody">' +
            "<h3>" + esc(e.title) + "</h3>" +
            '<div class="meta">' +
              '<span class="cat cat-' + esc(e.category) + '">' + prettyCat(e.category) + "</span>" +
              loc + link +
            "</div>" +
            note +
          "</div>" +
        "</article>";
    });
    html += "</div>"; // close final month-block
    host.innerHTML = html;
  }

  function initFilters(events) {
    var bar = document.getElementById("filters");
    if (!bar) return;
    bar.addEventListener("click", function (ev) {
      var btn = ev.target.closest(".filter-pill");
      if (!btn) return;
      activeFilter = btn.getAttribute("data-filter") || "all";
      bar.querySelectorAll(".filter-pill").forEach(function (p) {
        p.classList.toggle("is-on", p === btn);
      });
      renderList(events);
    });
  }

  function initCalendar() {
    if (!document.getElementById("trail") && !document.getElementById("month-list")) return;
    renderTrail(EVENTS);
    initFilters(EVENTS);
    renderList(EVENTS);
  }

  // ----------------------------------------------------------------- start
  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initNext();
    initCalendar();
  });
})();
