const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const reps = [
  // Nav
  ['<span class="nav-label">HOME</span>', '<span class="nav-label" data-i18n="menu_home">HOME</span>'],
  ['<span class="nav-label">PROJEKTY</span>', '<span class="nav-label" data-i18n="menu_projects">PROJEKTY</span>'],
  ['<span class="nav-label">O MNIE</span>', '<span class="nav-label" data-i18n="menu_about">O MNIE</span>'],
  ['<span class="nav-label">KONTAKT</span>', '<span class="nav-label" data-i18n="menu_contact">KONTAKT</span>'],
  // Sidebar footer
  // already has data-i18n="sidebar_sm" from earlier replace
  
  // Hero
  ['GOTOWY DO WSPÓŁPRACY\n            </div>', '<span data-i18n="hero_badge">GOTOWY DO WSPÓŁPRACY</span>\n            </div>'],
  ['<p class="hero-subtitle">Motion Designer &amp; Visual Artist</p>', '<p class="hero-subtitle" data-i18n="hero_role">Motion Designer &amp; Visual Artist</p>'],
  ['<p class="hero-desc">\n              Tworzę <span class="hi-green">animacje</span>, <span class="hi-purple">projekty graficzne</span> i treści wizualne, które przyciągają uwagę i opowiadają historię.\n            </p>', '<p class="hero-desc" data-i18n-html="hero_desc">\n              Tworzę <span class="hi-green">animacje</span>, <span class="hi-purple">projekty graficzne</span> i treści wizualne, które przyciągają uwagę i opowiadają historię.\n            </p>'],
  ['PRZEGLĄDAJ PROJEKTY\n                <svg', '<span data-i18n="btn_projects">PRZEGLĄDAJ PROJEKTY</span>\n                <svg'],
  ['<button class="btn-secondary" onclick="navigate(\'contact\')">KONTAKT</button>', '<button class="btn-secondary" onclick="navigate(\'contact\')" data-i18n="btn_contact">KONTAKT</button>'],
  
  // Stats
  ['<span class="stat-label">Projektów</span>', '<span class="stat-label" data-i18n="stat_projects">Projektów</span>'],
  ['<span class="stat-label">Lata w grafice</span>', '<span class="stat-label" data-i18n="stat_years">Lata w grafice</span>'],
  ['<span class="stat-label">Lata Doświadczenia</span>', '<span class="stat-label" data-i18n="stat_exp">Lata Doświadczenia</span>'],
  
  // Cats
  ['<h2 class="section-title">KATEGORIE</h2>', '<h2 class="section-title" data-i18n="sec_categories">KATEGORIE</h2>'],
  ['<p>Motion graphics &amp; video</p>', '<p data-i18n="cat_anim">Motion graphics &amp; video</p>'],
  ['<p>Social media content</p>', '<p data-i18n="cat_post">Social media content</p>'],
  ['<p>Reels &amp; short-form video</p>', '<p data-i18n="cat_reel">Reels &amp; short-form video</p>'],
  ['<p>Print &amp; digital posters</p>', '<p data-i18n="cat_poster">Print &amp; digital posters</p>'],
  ['<p>UI/UX &amp; branding</p>', '<p data-i18n="cat_design">UI/UX &amp; branding</p>'],
  ['<p>Inne projekty kreatywne</p>', '<p data-i18n="cat_other">Inne projekty kreatywne</p>'],
  
  // Featured
  ['<h2 class="section-title">WYBRANE PROJEKTY</h2>', '<h2 class="section-title" data-i18n="sec_featured">WYBRANE PROJEKTY</h2>'],
  ['<button class="see-all" onclick="navigate(\'projects\')">Zobacz wszystkie →</button>', '<button class="see-all" onclick="navigate(\'projects\')" data-i18n="btn_see_all">Zobacz wszystkie →</button>'],
  
  // Projects page
  ['<h1 class="page-title">PROJEKTY</h1>', '<h1 class="page-title" data-i18n="page_proj_title">PROJEKTY</h1>'],
  ['<p class="page-subtitle">Kolekcja moich prac kreatywnych</p>', '<p class="page-subtitle" data-i18n="page_proj_subtitle">Kolekcja moich prac kreatywnych</p>'],
  ['<button class="filter-btn active" data-filter="all" id="filter-all">WSZYSTKIE</button>', '<button class="filter-btn active" data-filter="all" id="filter-all" data-i18n="filter_all">WSZYSTKIE</button>'],
  // remaining filters are categorized as acronyms and names, we'll translate them if needed or skip some. 
  
  // About Page
  ['<h1 class="page-title">O MNIE</h1>', '<h1 class="page-title" data-i18n="page_about_title">O MNIE</h1>'],
  ['<p class="page-subtitle">Kim jestem i co robię</p>', '<p class="page-subtitle" data-i18n="page_about_subtitle">Kim jestem i co robię</p>'],
  ['<p class="bio-role">Projektant Graficzny &amp; Freelancer</p>', '<p class="bio-role" data-i18n="bio_role">Projektant Graficzny &amp; Freelancer</p>'],
  ['<p class="bio-text">Jestem kreatywnym projektantem graficznym z doświadczeniem freelancerskim oraz agencyjnym. Tworzę kompleksowe projekty, identyfikacje wizualne oraz materiały na social media. Nieustannie poszerzam swoje kompetencje uczestnicząc w szkoleniach i zdobywając certyfikaty Google oraz Adobe.</p>', '<p class="bio-text" data-i18n="bio_text">Jestem kreatywnym projektantem graficznym z doświadczeniem freelancerskim oraz agencyjnym. Tworzę kompleksowe projekty, identyfikacje wizualne oraz materiały na social media. Nieustannie poszerzam swoje kompetencje uczestnicząc w szkoleniach i zdobywając certyfikaty Google oraz Adobe.</p>'],
  ['<div class="card-label">ZAINTERESOWANIA</div>', '<div class="card-label" data-i18n="hobby_label">ZAINTERESOWANIA</div>'],
  ['<li>🎬 Stare kino akcji</li>', '<li data-i18n="hobby_1">🎬 Stare kino akcji</li>'],
  ['<li>🎸 Muzyka oraz gra na basie</li>', '<li data-i18n="hobby_2">🎸 Muzyka oraz gra na basie</li>'],
  ['<li>🎮 Gry komputerowe</li>', '<li data-i18n="hobby_3">🎮 Gry komputerowe</li>'],
  ['<li>💻 Vibe Coding</li>', '<li data-i18n="hobby_4">💻 Vibe Coding</li>'],
  ['<li>🖌️ Animacja</li>', '<li data-i18n="hobby_5">🖌️ Animacja</li>'],
  
  ['<div class="card-label">OSTATNIE WSPÓŁPRACE</div>', '<div class="card-label" data-i18n="exp_label">OSTATNIE WSPÓŁPRACE</div>'],
  ['<p class="exp-desc">Edycja wideo dla kanałów YouTube, social mediów.</p>', '<p class="exp-desc" data-i18n="exp_1">Edycja wideo dla kanałów YouTube, social mediów.</p>'],
  ['<p class="exp-desc">Wraz z zespołem projektowałem platformy do zarządzania zdrowiem, kursy VR, prezentacje dla Amerykańskich uniwersytetów.</p>', '<p class="exp-desc" data-i18n="exp_2">Wraz z zespołem projektowałem platformy do zarządzania zdrowiem, kursy VR, prezentacje dla Amerykańskich uniwersytetów.</p>'],
  ['<p class="exp-desc">Montaż reklam, projektowanie wizualizacja na odzież reklamową, tworzenie witryn, katalogów dla Biura podróży.</p>', '<p class="exp-desc" data-i18n="exp_3">Montaż reklam, projektowanie wizualizacja na odzież reklamową, tworzenie witryn, katalogów dla Biura podróży.</p>'],
  
  ['<div class="card-label">OBIERAM SOBIE ZA CEL</div>', '<div class="card-label" data-i18n="target_label">OBIERAM SOBIE ZA CEL</div>'],
  ['<p class="target-text">Ciągły rozwój i wdrażanie nowoczesnych rozwiązań UI/UX.</p>', '<p class="target-text" data-i18n="target_1">Ciągły rozwój i wdrażanie nowoczesnych rozwiązań UI/UX.</p>'],
  ['<p class="target-text">Tworzenie innowacyjnych kampanii, które opowiadają unikalne historie.</p>', '<p class="target-text" data-i18n="target_2">Tworzenie innowacyjnych kampanii, które opowiadają unikalne historie.</p>'],
  ['<p class="target-text">Praca przy wyjątkowych i nieszablonowych projektach brandingowych.</p>', '<p class="target-text" data-i18n="target_3">Praca przy wyjątkowych i nieszablonowych projektach brandingowych.</p>'],
  
  ['<div class="card-label">NARZĘDZIA &amp; TECHNOLOGIE</div>', '<div class="card-label" data-i18n="tools_label">NARZĘDZIA &amp; TECHNOLOGIE</div>'],
  ['<div class="card-label">CERTYFIKATY &amp; EDUKACJA</div>', '<div class="card-label" data-i18n="edu_label">CERTYFIKATY &amp; EDUKACJA</div>'],
  
  // Contact
  ['<h1 class="page-title">BĄDŹMY W KONTAKCIE</h1>', '<h1 class="page-title" data-i18n="page_contact_title">BĄDŹMY W KONTAKCIE</h1>'],
  ['<p class="page-subtitle">Zawsze otwarty na nowe projekty, jeśli masz coś niesamowitego! 💪</p>', '<p class="page-subtitle" data-i18n="page_contact_subtitle">Zawsze otwarty na nowe projekty, jeśli masz coś niesamowitego! 💪</p>'],
  ['<h2 class="cta-title">Masz projekt do zrealizowania?</h2>', '<h2 class="cta-title" data-i18n="cta_title">Masz projekt do zrealizowania?</h2>'],
  ['<p class="cta-desc">Wyślij do mnie szczegóły na maila, odezwę się jak najszybciej to możliwe z moją propozycją!</p>', '<p class="cta-desc" data-i18n="cta_desc">Wyślij do mnie szczegóły na maila, odezwę się jak najszybciej to możliwe z moją propozycją!</p>'],
  ['<span>Skopiuj Email</span>', '<span data-i18n="btn_copy">Skopiuj Email</span>'],
  ['<span>Otwórz Pocztę</span>', '<span data-i18n="btn_mail">Otwórz Pocztę</span>']

];

reps.forEach(r => {
  html = html.replace(r[0], r[1]);
});

fs.writeFileSync('index.html', html);
console.log('Done marking up index.html');
