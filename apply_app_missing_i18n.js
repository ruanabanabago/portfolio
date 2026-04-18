const fs = require('fs');

const updatedObjectCode = `const TRANSLATIONS = {
  pl: {
    menu_home: "HOME", menu_projects: "PROJEKTY", menu_about: "O MNIE", menu_contact: "KONTAKT", sidebar_sm: "ZAPRASZAM NA MOJE SM:",
    hero_badge: "GOTOWY DO WSPÓŁPRACY", hero_role: "Motion Designer & Visual Artist", 
    hero_desc: "Tworzę <span class=\\"hi-green\\">animacje</span>, <span class=\\"hi-purple\\">projekty graficzne</span> i treści wizualne, które przyciągają uwagę i opowiadają historię.",
    btn_projects: "PRZEGLĄDAJ PROJEKTY", btn_contact: "KONTAKT",
    stat_projects: "Projektów", stat_years: "Lata w grafice", stat_exp: "Lata Doświadczenia",
    sec_categories: "KATEGORIE", cat_anim: "Motion graphics & video", cat_post: "Social media content",
    cat_reel: "Reels & short-form video", cat_poster: "Print & digital posters", cat_design: "UI/UX & branding", cat_other: "Inne projekty kreatywne",
    sec_featured: "WYBRANE PROJEKTY", btn_see_all: "Zobacz wszystkie →",
    page_proj_title: "PROJEKTY", page_proj_subtitle: "Kolekcja moich prac kreatywnych", filter_all: "WSZYSTKIE",
    page_about_title: "O MNIE", page_about_subtitle: "Kim jestem i co robię", bio_role: "Projektant Graficzny & Freelancer",
    bio_text: "Jestem kreatywnym projektantem graficznym z doświadczeniem freelancerskim oraz agencyjnym. Tworzę kompleksowe projekty, identyfikacje wizualne oraz materiały na social media. Nieustannie poszerzam swoje kompetencje uczestnicząc w szkoleniach i zdobywając certyfikaty Google oraz Adobe.",
    hobby_label: "ZAINTERESOWANIA", hobby_1: "🎬 Stare kino akcji", hobby_2: "🎸 Muzyka oraz gra na basie", hobby_3: "🎮 Gry komputerowe", hobby_4: "💻 Vibe Coding", hobby_5: "🖌️ Animacja",
    exp_label: "OSTATNIE WSPÓŁPRACE", exp_1: "Edycja wideo dla kanałów YouTube, social mediów.", exp_2: "Wraz z zespołem projektowałem platformy do zarządzania zdrowiem, kursy VR, prezentacje dla Amerykańskich uniwersytetów.", exp_3: "Montaż reklam, projektowanie wizualizacja na odzież reklamową, tworzenie witryn, katalogów dla Biura podróży.",
    target_label: "OBIERAM SOBIE ZA CEL", target_1: "Ciągły rozwój i wdrażanie nowoczesnych rozwiązań UI/UX.", target_2: "Tworzenie innowacyjnych kampanii, które opowiadają unikalne historie.", target_3: "Praca przy wyjątkowych i nieszablonowych projektach brandingowych.",
    tools_label: "NARZĘDZIA & TECHNOLOGIE", edu_label: "CERTYFIKATY & EDUKACJA",
    page_contact_title: "BĄDŹMY W KONTAKCIE", page_contact_subtitle: "Zawsze otwarty na nowe projekty, jeśli masz coś niesamowitego! 💪",
    cta_title: "Masz projekt do zrealizowania?", cta_desc: "Wyślij do mnie szczegóły na maila, odezwę się jak najszybciej to możliwe z moją propozycją!",
    btn_copy: "Skopiuj Email", btn_mail: "Otwórz Pocztę",
    
    // NEW ONES
    cat_title_anim: "Animacje", cat_title_post: "Posty", cat_title_reel: "Rolki", cat_title_poster: "Plakaty", cat_title_design: "Design", cat_title_other: "Pozostałe",
    filter_anim: "ANIMACJE", filter_post: "POSTY", filter_reel: "ROLKI", filter_poster: "PLAKATY", filter_design: "DESIGN", filter_other: "POZOSTAŁE",
    cert_label: "CERTYFIKATY", exp_title: "DOŚWIADCZENIE", skills_label: "UMIEJĘTNOŚCI", edu_title2: "WYKSZTAŁCENIE", lang_label: "JĘZYKI",
    date_present_25: "2025 — Obecnie", date_present_21: "2021 — Obecnie", month_feb: "Luty 2026", month_mar: "Marzec 2026", month_jun: "Czerwiec 2022",
    job_title_1: "Projektant graficzny", job_desc_1: "Urlop.pl · Warszawa (Pełny etat)",
    job_title_2: "Grafik freelancer", job_desc_2: "Praca zdalna / Freelance · Tworzenie identyfikacji wizualnej i materiałów reklamowych.",
    job_title_3: "Grafik komputerowy", job_desc_3: "Enfoglobe LLC · Rzeszów (Hybrydowo)",
    job_title_4: "Projektant graficzny (Staż)", edu_1_title: "Grafika Komputerowa", edu_1_desc: "2017 — 2020 · Licencjat",
    lang_pl: "Polski", lvl_native: "Ojczysty", lang_en: "Angielski", lang_de: "Niemiecki",
    contact_badge: "Dostępny do nowych projektów", contact_heading: "Masz projekt?<br><span class=\\"hi-green\\">Porozmawiajmy.</span>", contact_desc_2: "Chętnie poznam Twój pomysł i pomogę go zrealizować w najlepszy możliwy sposób. Odpowiadam w ciągu 24h.",
    contact_btn_main: "SKONTAKTUJ SIĘ ZE MNĄ", cv_desc: "Pobierz moje CV<br>w formacie PDF", cv_btn_dl: "POBIERZ CV"
  },
  en: {
    menu_home: "HOME", menu_projects: "PROJECTS", menu_about: "ABOUT ME", menu_contact: "CONTACT", sidebar_sm: "FOLLOW MY SOCIALS:",
    hero_badge: "AVAILABLE FOR COOPERATION", hero_role: "Motion Designer & Visual Artist",
    hero_desc: "I create <span class=\\"hi-green\\">animations</span>, <span class=\\"hi-purple\\">graphic designs</span>, and visual content that grab attention and tell a story.",
    btn_projects: "BROWSE PROJECTS", btn_contact: "CONTACT ME",
    stat_projects: "Projects", stat_years: "Years in Design", stat_exp: "Years Experience",
    sec_categories: "CATEGORIES", cat_anim: "Motion graphics & video", cat_post: "Social media content",
    cat_reel: "Reels & short-form video", cat_poster: "Print & digital posters", cat_design: "UI/UX & branding", cat_other: "Other creative projects",
    sec_featured: "FEATURED PROJECTS", btn_see_all: "See all →",
    page_proj_title: "PROJECTS", page_proj_subtitle: "A collection of my creative work", filter_all: "ALL",
    page_about_title: "ABOUT ME", page_about_subtitle: "Who I am and what I do", bio_role: "Graphic Designer & Freelancer",
    bio_text: "I am a creative graphic designer with freelance and agency experience. I create comprehensive projects, visual identities, and social media content. I continuously expand my skills by participating in training and earning Google and Adobe certifications.",
    hobby_label: "INTERESTS", hobby_1: "🎬 Classic action movies", hobby_2: "🎸 Music and playing bass", hobby_3: "🎮 Video games", hobby_4: "💻 Vibe Coding", hobby_5: "🖌️ Animation",
    exp_label: "RECENT WORK", exp_1: "Video editing for YouTube channels and social media.", exp_2: "Designed health management platforms, VR courses, and presentations for American universities.", exp_3: "Ad editing, ad clothing visualization design, website creation, catalogs for a travel agency.",
    target_label: "MY GOALS", target_1: "Continuous development and implementation of modern UI/UX solutions.", target_2: "Creating innovative campaigns that tell unique stories.", target_3: "Working on unique and unconventional branding projects.",
    tools_label: "TOOLS & TECHNOLOGIES", edu_label: "CERTIFICATIONS & EDUCATION",
    page_contact_title: "LET'S STAY IN TOUCH", page_contact_subtitle: "Always open to new projects if you have something amazing! 💪",
    cta_title: "Have a project in mind?", cta_desc: "Send me the details via email, and I will get back to you as soon as possible with my proposal!",
    btn_copy: "Copy Email", btn_mail: "Open Mail",
    
    // NEW ONES
    cat_title_anim: "Animations", cat_title_post: "Posts", cat_title_reel: "Reels", cat_title_poster: "Posters", cat_title_design: "Design", cat_title_other: "Other",
    filter_anim: "ANIMATIONS", filter_post: "POSTS", filter_reel: "REELS", filter_poster: "POSTERS", filter_design: "DESIGN", filter_other: "OTHER",
    cert_label: "CERTIFICATIONS", exp_title: "EXPERIENCE", skills_label: "SKILLS", edu_title2: "EDUCATION", lang_label: "LANGUAGES",
    date_present_25: "2025 — Present", date_present_21: "2021 — Present", month_feb: "February 2026", month_mar: "March 2026", month_jun: "June 2022",
    job_title_1: "Graphic Designer", job_desc_1: "Urlop.pl · Warsaw (Full-time)",
    job_title_2: "Freelance Graphic Designer", job_desc_2: "Remote / Freelance · Visual identity and advertising materials creation.",
    job_title_3: "Computer Graphic Designer", job_desc_3: "Enfoglobe LLC · Rzeszów (Hybrid)",
    job_title_4: "Graphic Designer (Intern)", edu_1_title: "Computer Graphics", edu_1_desc: "2017 — 2020 · Bachelor degree",
    lang_pl: "Polish", lvl_native: "Native", lang_en: "English", lang_de: "German",
    contact_badge: "Available for new projects", contact_heading: "Have a project?<br><span class=\\"hi-green\\">Let's talk.</span>", contact_desc_2: "I'd love to hear about your idea and help bring it to life in the best way possible. I reply within 24h.",
    contact_btn_main: "CONTACT ME", cv_desc: "Download my CV<br>in PDF format", cv_btn_dl: "DOWNLOAD CV"
  },
  de: {
    menu_home: "STARTSEITE", menu_projects: "PROJEKTE", menu_about: "ÜBER MICH", menu_contact: "KONTAKT", sidebar_sm: "FOLGEN SIE MEINEN SM:",
    hero_badge: "BEREIT ZUR ZUSAMMENARBEIT", hero_role: "Motion Designer & Visual Artist",
    hero_desc: "Ich erstelle <span class=\\"hi-green\\">Animationen</span>, <span class=\\"hi-purple\\">Grafikdesigns</span> und visuelle Inhalte, die Aufmerksamkeit erregen und eine Geschichte erzählen.",
    btn_projects: "PROJEKTE ANSEHEN", btn_contact: "KONTAKT",
    stat_projects: "Projekte", stat_years: "Jahre in Grafik", stat_exp: "Jahre Erfahrung",
    sec_categories: "KATEGORIEN", cat_anim: "Motion Graphics & Video", cat_post: "Social Media Content",
    cat_reel: "Reels & Short-Form Video", cat_poster: "Print & digitale Poster", cat_design: "UI/UX & Branding", cat_other: "Andere kreative Projekte",
    sec_featured: "AUSGEWÄHLTE PROJEKTE", btn_see_all: "Alle ansehen →",
    page_proj_title: "PROJEKTE", page_proj_subtitle: "Eine Sammlung meiner kreativen Arbeiten", filter_all: "ALLE",
    page_about_title: "ÜBER MICH", page_about_subtitle: "Wer ich bin und was ich mache", bio_role: "Grafikdesigner & Freelancer",
    bio_text: "Ich bin ein kreativer Grafikdesigner mit Erfahrung als Freelancer und in Agenturen. Ich entwerfe ganzheitliche Projekte, visuelle Identitäten und Social-Media-Materialien. Ich erweitere ständig meine Fähigkeiten durch Schulungen und den Erhalt von Google- und Adobe-Zertifikaten.",
    hobby_label: "INTERESSEN", hobby_1: "🎬 Klassische Actionfilme", hobby_2: "🎸 Musik und Bass spielen", hobby_3: "🎮 Videospiele", hobby_4: "💻 Vibe Coding", hobby_5: "🖌️ Animation",
    exp_label: "AKTUELLE ZUSAMMENARBEITEN", exp_1: "Videobearbeitung für YouTube-Kanäle und Social Media.", exp_2: "Zusammen mit dem Team gestaltete ich Gesundheitsmanagement-Plattformen, VR-Kurse und Präsentationen für amerikanische Universitäten.", exp_3: "Werbeschnitt, Visualisierung von Werbebekleidung, Erstellung von Webseiten, Katalogen für ein Reisebüro.",
    target_label: "MEINE ZIELE", target_1: "Kontinuierliche Entwicklung und Implementierung moderner UI/UX-Lösungen.", target_2: "Entwicklung innovativer Kampagnen, die einzigartige Geschichten erzählen.", target_3: "Arbeit an einzigartigen und unkonventionellen Branding-Projekten.",
    tools_label: "WERKZEUGE & TECHNOLOGIEN", edu_label: "ZERTIFIKATE & AUSBILDUNG",
    page_contact_title: "LASS UNS IN KONTAKT BLEIBEN", page_contact_subtitle: "Immer offen für neue Projekte, wenn Sie etwas Großartiges haben! 💪",
    cta_title: "Haben Sie ein Projekt im Kopf?", cta_desc: "Senden Sie mir die Details per E-Mail, ich werde mich so schnell wie möglich mit meinem Vorschlag bei Ihnen melden!",
    btn_copy: "E-Mail kopieren", btn_mail: "Mail öffnen",
    
    // NEW ONES
    cat_title_anim: "Animationen", cat_title_post: "Beiträge", cat_title_reel: "Reels", cat_title_poster: "Plakate", cat_title_design: "Design", cat_title_other: "Andere",
    filter_anim: "ANIMATIONEN", filter_post: "BEITRÄGE", filter_reel: "REELS", filter_poster: "PLAKATE", filter_design: "DESIGN", filter_other: "ANDERE",
    cert_label: "ZERTIFIKATE", exp_title: "ERFAHRUNG", skills_label: "FÄHIGKEITEN", edu_title2: "AUSBILDUNG", lang_label: "SPRACHEN",
    date_present_25: "2025 — Heute", date_present_21: "2021 — Heute", month_feb: "Februar 2026", month_mar: "März 2026", month_jun: "Juni 2022",
    job_title_1: "Grafikdesigner", job_desc_1: "Urlop.pl · Warschau (Vollzeit)",
    job_title_2: "Freelance Grafikdesigner", job_desc_2: "Fernarbeit / Freelance · Erstellung von visuellen Identitäten und Werbematerialien.",
    job_title_3: "Computergrafiker", job_desc_3: "Enfoglobe LLC · Rzeszów (Hybrid)",
    job_title_4: "Grafikdesigner (Praktikum)", edu_1_title: "Computergrafik", edu_1_desc: "2017 — 2020 · Bachelor",
    lang_pl: "Polnisch", lvl_native: "Muttersprache", lang_en: "Englisch", lang_de: "Deutsch",
    contact_badge: "Verfügbar für neue Projekte", contact_heading: "Haben Sie ein Projekt?<br><span class=\\"hi-green\\">Lass uns reden.</span>", contact_desc_2: "Ich würde gerne von Ihrer Idee hören und helfen, sie auf die bestmögliche Weise umzusetzen. Ich antworte innerhalb von 24 Stunden.",
    contact_btn_main: "KONTAKTIERE MICH", cv_desc: "Lade meinen Lebenslauf<br>im PDF-Format herunter", cv_btn_dl: "LEBENSLAUF HERUNTERLADEN"
  }
};`;

let appjs = fs.readFileSync('app.js', 'utf8');

// Replace the TRANSLATIONS object
const startIdx = appjs.indexOf('const TRANSLATIONS = {');
let endIdx = appjs.indexOf('};\n\nlet currentLang = localStorage.getItem');
if(endIdx === -1) endIdx = appjs.indexOf('let currentLang = localStorage.getItem');

if (startIdx !== -1 && endIdx !== -1) {
  appjs = appjs.slice(0, startIdx) + updatedObjectCode + '\n\n' + appjs.slice(endIdx);
  fs.writeFileSync('app.js', appjs);
  console.log('Successfully updated TRANSLATIONS in app.js');
} else {
  console.log('Could not find TRANSLATIONS object bounds in app.js');
}
