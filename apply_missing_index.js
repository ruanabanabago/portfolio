const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const reps = [
  // Categories names home page
  ['<h3>Animacje</h3>', '<h3 data-i18n="cat_title_anim">Animacje</h3>'],
  ['<h3>Posty</h3>', '<h3 data-i18n="cat_title_post">Posty</h3>'],
  ['<h3>Rolki</h3>', '<h3 data-i18n="cat_title_reel">Rolki</h3>'],
  ['<h3>Plakaty</h3>', '<h3 data-i18n="cat_title_poster">Plakaty</h3>'],
  ['<h3>Design</h3>', '<h3 data-i18n="cat_title_design">Design</h3>'],
  ['<h3>Pozostałe</h3>', '<h3 data-i18n="cat_title_other">Pozostałe</h3>'],

  // Filters projects page
  ['<button class="filter-btn" data-filter="Animacje" id="filter-animacje">ANIMACJE</button>', '<button class="filter-btn" data-filter="Animacje" id="filter-animacje" data-i18n="filter_anim">ANIMACJE</button>'],
  ['<button class="filter-btn" data-filter="Posty" id="filter-posty">POSTY</button>', '<button class="filter-btn" data-filter="Posty" id="filter-posty" data-i18n="filter_post">POSTY</button>'],
  ['<button class="filter-btn" data-filter="Rolki" id="filter-rolki">ROLKI</button>', '<button class="filter-btn" data-filter="Rolki" id="filter-rolki" data-i18n="filter_reel">ROLKI</button>'],
  ['<button class="filter-btn" data-filter="Plakaty" id="filter-plakaty">PLAKATY</button>', '<button class="filter-btn" data-filter="Plakaty" id="filter-plakaty" data-i18n="filter_poster">PLAKATY</button>'],
  ['<button class="filter-btn" data-filter="Design" id="filter-design">DESIGN</button>', '<button class="filter-btn" data-filter="Design" id="filter-design" data-i18n="filter_design">DESIGN</button>'],
  ['<button class="filter-btn" data-filter="Pozostałe" id="filter-pozostale">POZOSTAŁE</button>', '<button class="filter-btn" data-filter="Pozostałe" id="filter-pozostale" data-i18n="filter_other">POZOSTAŁE</button>'],

  // About me
  ['<div class="card-label">CERTYFIKATY</div>', '<div class="card-label" data-i18n="cert_label">CERTYFIKATY</div>'],
  ['<div class="card-label">DOŚWIADCZENIE</div>', '<div class="card-label" data-i18n="exp_title">DOŚWIADCZENIE</div>'],
  ['<div class="card-label">UMIEJĘTNOŚCI</div>', '<div class="card-label" data-i18n="skills_label">UMIEJĘTNOŚCI</div>'],
  ['<div class="card-label">WYKSZTAŁCENIE</div>', '<div class="card-label" data-i18n="edu_title2">WYKSZTAŁCENIE</div>'],
  ['<div class="card-label">JĘZYKI</div>', '<div class="card-label" data-i18n="lang_label">JĘZYKI</div>'],

  ['<span class="tl-date">2025 — Obecnie</span>', '<span class="tl-date" data-i18n="date_present_25">2025 — Obecnie</span>'],
  ['<h4 class="tl-title">Projektant graficzny</h4>', '<h4 class="tl-title" data-i18n="job_title_1">Projektant graficzny</h4>'],
  ['<p class="tl-desc">Urlop.pl · Warszawa (Pełny etat)</p>', '<p class="tl-desc" data-i18n="job_desc_1">Urlop.pl · Warszawa (Pełny etat)</p>'],

  ['<span class="tl-date">2021 — Obecnie</span>', '<span class="tl-date" data-i18n="date_present_21">2021 — Obecnie</span>'],
  ['<h4 class="tl-title">Grafik freelancer</h4>', '<h4 class="tl-title" data-i18n="job_title_2">Grafik freelancer</h4>'],
  ['<p class="tl-desc">Praca zdalna / Freelance · Tworzenie identyfikacji wizualnej i materiałów reklamowych.</p>', '<p class="tl-desc" data-i18n="job_desc_2">Praca zdalna / Freelance · Tworzenie identyfikacji wizualnej i materiałów reklamowych.</p>'],

  ['<h4 class="tl-title">Grafik komputerowy</h4>', '<h4 class="tl-title" data-i18n="job_title_3">Grafik komputerowy</h4>'],
  ['<p class="tl-desc">Enfoglobe LLC · Rzeszów (Hybrydowo)</p>', '<p class="tl-desc" data-i18n="job_desc_3">Enfoglobe LLC · Rzeszów (Hybrydowo)</p>'],

  ['<h4 class="tl-title">Projektant graficzny (Staż)</h4>', '<h4 class="tl-title" data-i18n="job_title_4">Projektant graficzny (Staż)</h4>'],
  
  ['<h4>Grafika Komputerowa</h4>', '<h4 data-i18n="edu_1_title">Grafika Komputerowa</h4>'],
  ['<span>2017 — 2020 · Licencjat</span>', '<span data-i18n="edu_1_desc">2017 — 2020 · Licencjat</span>'],
  
  ['<span class="lang-name">Polski</span>', '<span class="lang-name" data-i18n="lang_pl">Polski</span>'],
  ['<span class="lang-level native">Ojczysty</span>', '<span class="lang-level native" data-i18n="lvl_native">Ojczysty</span>'],
  ['<span class="lang-name">Angielski</span>', '<span class="lang-name" data-i18n="lang_en">Angielski</span>'],
  ['<span class="lang-name">Niemiecki</span>', '<span class="lang-name" data-i18n="lang_de">Niemiecki</span>'],

  ['<span>Luty 2026</span>', '<span data-i18n="month_feb">Luty 2026</span>'],
  ['<span>Marzec 2026</span>', '<span data-i18n="month_mar">Marzec 2026</span>'],
  ['<span>Czerwiec 2022</span>', '<span data-i18n="month_jun">Czerwiec 2022</span>'],

  // Contact
  ['Dostępny do nowych projektów\n              </div>', '<span data-i18n="contact_badge">Dostępny do nowych projektów</span>\n              </div>'],
  ['<h2 class="contact-heading">Masz projekt?<br><span class="hi-green">Porozmawiajmy.</span></h2>', '<h2 class="contact-heading" data-i18n-html="contact_heading">Masz projekt?<br><span class="hi-green">Porozmawiajmy.</span></h2>'],
  ['<p class="contact-desc">Chętnie poznam Twój pomysł i pomogę go zrealizować w najlepszy możliwy sposób. Odpowiadam w ciągu 24h.</p>', '<p class="contact-desc" data-i18n="contact_desc_2">Chętnie poznam Twój pomysł i pomogę go zrealizować w najlepszy możliwy sposób. Odpowiadam w ciągu 24h.</p>'],
  ['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>\n                SKONTAKTUJ SIĘ ZE MNĄ\n              </a>', '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>\n                <span data-i18n="contact_btn_main">SKONTAKTUJ SIĘ ZE MNĄ</span>\n              </a>'],
  ['<p>Pobierz moje CV<br>w formacie PDF</p>', '<p data-i18n-html="cv_desc">Pobierz moje CV<br>w formacie PDF</p>'],
  ['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>\n                POBIERZ CV\n              </a>', '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>\n                <span data-i18n="cv_btn_dl">POBIERZ CV</span>\n              </a>']
];

reps.forEach(r => {
  html = html.replace(r[0], r[1]);
});

fs.writeFileSync('index.html', html);
console.log('Done marking up additional missing i18n tags.');
