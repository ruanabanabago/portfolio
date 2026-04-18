const fs = require('fs');

const i18nCode = `
// ============================================================
// I18N (TRANSLATIONS)
// ============================================================
const TRANSLATIONS = {
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
    btn_copy: "Skopiuj Email", btn_mail: "Otwórz Pocztę"
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
    exp_label: "RECENT COLLABORATIONS", exp_1: "Video editing for YouTube channels and social media.", exp_2: "Along with the team, I designed health management platforms, VR courses, and presentations for American universities.", exp_3: "Ad editing, ad clothing visualization design, website creation, catalogs for a travel agency.",
    target_label: "MY GOALS", target_1: "Continuous development and implementation of modern UI/UX solutions.", target_2: "Creating innovative campaigns that tell unique stories.", target_3: "Working on unique and unconventional branding projects.",
    tools_label: "TOOLS & TECHNOLOGIES", edu_label: "CERTIFICATIONS & EDUCATION",
    page_contact_title: "LET'S STAY IN TOUCH", page_contact_subtitle: "Always open to new projects if you have something amazing! 💪",
    cta_title: "Have a project in mind?", cta_desc: "Send me the details via email, and I will get back to you as soon as possible with my proposal!",
    btn_copy: "Copy Email", btn_mail: "Open Mail"
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
    btn_copy: "E-Mail kopieren", btn_mail: "Mail öffnen"
  }
};

let currentLang = localStorage.getItem('portfolio_lang') || 'pl';

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = 'pl';
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);
  
  // Update texts
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang][key]) el.textContent = TRANSLATIONS[lang][key];
  });
  
  // Update HTML texts
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (TRANSLATIONS[lang][key]) el.innerHTML = TRANSLATIONS[lang][key];
  });
  
  // Update document language
  document.documentElement.lang = lang;
  
  // Update switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) btn.classList.add('active');
    else btn.classList.remove('active');
  });
}

function initI18n() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
  setLanguage(currentLang);
}

// Ensure initI18n runs after DOM loads, we will place it into init()
`;

let appjs = fs.readFileSync('app.js', 'utf8');

// Prepend i18n code
appjs = i18nCode + '\\n\\n' + appjs;

// Add initI18n() inside init()
appjs = appjs.replace(/function init\(\) \{/, 'function init() {\\n  initI18n();');

fs.writeFileSync('app.js', appjs);
console.log('Done injecting i18n logic into app.js');
