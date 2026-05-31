
// ============================================================
// AUTH — WYŁĄCZONE (strona publiczna)
// ============================================================
function checkAuth() {
  const authScreen = document.getElementById('auth-screen');
  const appContainer = document.querySelector('.app');
  if (authScreen) authScreen.classList.add('hidden');
  if (appContainer) appContainer.classList.add('visible');
}

// ============================================================
// I18N (TRANSLATIONS)
// ============================================================
const TRANSLATIONS = {
  pl: {
    menu_home: "HOME", menu_projects: "PROJEKTY", menu_about: "O MNIE", menu_contact: "KONTAKT", sidebar_sm: "ZAPRASZAM NA MOJE SM:",
    hero_badge: "GOTOWY DO WSPÓŁPRACY", hero_role: "Motion Designer & Visual Artist", 
    hero_desc: "Tworzę <span class=\"hi-green\">animacje</span>, <span class=\"hi-purple\">projekty graficzne</span> i treści wizualne, które przyciągają uwagę i opowiadają historię.",
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
    
    cat_title_anim: "Animacje", cat_title_post: "Posty", cat_title_reel: "Rolki", cat_title_poster: "Plakaty", cat_title_design: "Design", cat_title_other: "Pozostałe",
    filter_anim: "ANIMACJE", filter_post: "POSTY", filter_reel: "ROLKI", filter_poster: "PLAKATY", filter_design: "DESIGN", filter_other: "POZOSTAŁE",
    cert_label: "CERTYFIKATY", exp_title: "DOŚWIADCZENIE", skills_label: "UMIEJĘTNOŚCI", edu_title2: "WYKSZTAŁCENIE", lang_label: "JĘZYKI",
    date_present_25: "2025 — Obecnie", date_present_21: "2021 — Obecnie", month_feb: "Luty 2026", month_mar: "Marzec 2026", month_jun: "Czerwiec 2022", month_jun26: "Czerwiec 2026",
    job_title_1: "Projektant graficzny", job_desc_1: "Urlop.pl · Warszawa (Pełny etat)",
    job_title_2: "Grafik freelancer", job_desc_2: "Praca zdalna / Freelance · Tworzenie identyfikacji wizualnej i materiałów reklamowych.",
    job_title_3: "Grafik komputerowy", job_desc_3: "Enfoglobe LLC · Rzeszów (Hybrydowo)",
    job_title_4: "Projektant graficzny (Staż)", edu_1_title: "Grafika Komputerowa", edu_1_desc: "2017 — 2020 · Licencjat",
    lang_pl: "Polski", lvl_native: "Ojczysty", lang_en: "Angielski", lang_de: "Niemiecki",
    contact_badge: "Dostępny do nowych projektów", contact_heading: "Masz projekt?<br><span class=\"hi-green\">Porozmawiajmy.</span>", contact_desc_2: "Chętnie poznam Twój pomysł i pomogę go zrealizować w najlepszy możliwy sposób. Odpowiadam w ciągu 24h.",
    contact_btn_main: "SKONTAKTUJ SIĘ ZE MNĄ", cv_desc: "Pobierz moje CV<br>w formacie PDF", cv_btn_dl: "POBIERZ CV",
    menu_contact_sub: "Nawiąż współpracę",
    auth_title: "Dostęp zastrzeżony",
    auth_subtitle: "Ta strona jest chroniona hasłem. Wprowadź klucz dostępu, aby kontynuować.",
    auth_placeholder: "Hasło...",
    auth_btn: "WEJDŹ",
    auth_error: "Błędne hasło. Spróbuj ponownie.",
    
    menu_cv: "CV", cv_available: "Dostępny do pracy", cv_job_title: "AI-Powered Graphic Designer",
    cv_exp_title: "Doświadczenie zawodowe", cv_cert_title: "Certyfikaty", cv_edu_title: "Wykształcenie",
    cv_skill_ai_img: "Gen. Obrazów AI", cv_skill_ai_vid: "Gen. Wideo AI",
    cv_job1_title: "Projektant Graficzny", cv_job1_date: "Luty 2025 — Obecnie", cv_fulltime: "· Pełny etat",
    cv_job1_b1: "Tworzenie materiałów graficznych na potrzeby social media (Facebook, Instagram) oraz kampanii e-mail", cv_job1_b2: "Projektowanie banerów, kreacji reklamowych i layoutów na stronę internetową urlop.pl", cv_job1_b3: "Produkcja animowanych grafik i rolków promujących oferty biura podróży", cv_job1_b4: "Tworzenie materiałów DTP: katalogi, ulotki, plakaty, wizytówki", cv_job1_b5: "Współpraca z działem marketingu przy kampaniach sezonowych i last-minute",
    cv_job2_title: "Grafik Freelancer", cv_job2_company: "Praca zdalna / Freelance", cv_job2_date: "2021 — Obecnie",
    cv_job2_b1: "Kompleksowe projekty identyfikacji wizualnej dla firm z różnych branż", cv_job2_b2: "Tworzenie animacji motion graphics oraz rolków na potrzeby social media", cv_job2_b3: "Obsługa klientów m.in. Seqma, Vision4U, Drukarnia Jasło, APS Data, Ranczo Rumak, OSCA Courts", cv_job2_b4: "Wykorzystanie generatywnej AI (Midjourney, Sora, Kling, Seedream) do produkcji contentu",
    cv_job3_title: "Grafik Komputerowy", cv_hybrid: "· Hybrydowo",
    cv_job3_b1: "Projektowanie platform do zarządzania zdrowiem i kursów VR dla rynku amerykańskiego", cv_job3_b2: "Tworzenie prezentacji i materiałów marketingowych dla uniwersytetów w USA", cv_job3_b3: "Praca w środowisku międzynarodowym w języku angielskim",
    cv_job4_title: "Projektant Graficzny (Staż)",
    cv_job4_b1: "Montaż reklam i wizualizacje odzieży reklamowej", cv_job4_b2: "Tworzenie witryn i katalogów dla biura podróży",
    cv_job5_title: "Praktyki zawodowe", cv_job5_comp: "APSdata", cv_job5_date: "2015", cv_job5_b1: "Realizacja zleceń w firmie (ulotki, wizytówki, plakaty)",
    cv_job6_comp: "Drukarnia Jasło", cv_job6_date: "2014", cv_job6_b1: "Przygotowywanie grafik do procesu drukowania", cv_job6_b2: "Obsługa maszyn drukujących",
    cv_job7_comp: "MGM Reklamy", cv_job7_date: "2013", cv_job7_b1: "Projektowanie grafik reklamowych oraz przygotowanie do druku", cv_job7_b2: "Obsługa plotera tnącego i oklejanie banerów",
    cv_edu2_title: "Technik cyfrowych procesów graficznych", cv_edu2_school: "Technikum nr 4 w Jaśle",
    cv_cert_a54: "Kwalifikacja A54 Przygotowanie mat. graficznych do druku",
    cv_cert_a55: "Kwalifikacja A55 Drukowanie cyfrowe",
    cv_cert_a25: "Kwalifikacja A25 Projektowanie multimedialne",
    cv_cert_social: "The Social Media Marketing Masterclass 2024",
    cv_cert_masterclass: "Graphic Design Masterclass Intermediate"
  },
  en: {
    menu_home: "HOME", menu_projects: "PROJECTS", menu_about: "ABOUT ME", menu_contact: "CONTACT", sidebar_sm: "FOLLOW MY SOCIALS:",
    hero_badge: "AVAILABLE FOR COOPERATION", hero_role: "Motion Designer & Visual Artist",
    hero_desc: "I create <span class=\"hi-green\">animations</span>, <span class=\"hi-purple\">graphic designs</span>, and visual content that grab attention and tell a story.",
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
    
    cat_title_anim: "Animations", cat_title_post: "Posts", cat_title_reel: "Reels", cat_title_poster: "Posters", cat_title_design: "Design", cat_title_other: "Other",
    filter_anim: "ANIMATIONS", filter_post: "POSTS", filter_reel: "REELS", filter_poster: "POSTERS", filter_design: "DESIGN", filter_other: "OTHER",
    cert_label: "CERTIFICATIONS", exp_title: "EXPERIENCE", skills_label: "SKILLS", edu_title2: "EDUCATION", lang_label: "LANGUAGES",
    date_present_25: "2025 — Present", date_present_21: "2021 — Present", month_feb: "February 2026", month_mar: "March 2026", month_jun: "June 2022", month_jun26: "June 2026",
    job_title_1: "Graphic Designer", job_desc_1: "Urlop.pl · Warsaw (Full-time)",
    job_title_2: "Freelance Graphic Designer", job_desc_2: "Remote / Freelance · Visual identity and advertising materials creation.",
    job_title_3: "Computer Graphic Designer", job_desc_3: "Enfoglobe LLC · Rzeszow (Hybrid)",
    job_title_4: "Graphic Designer (Intern)", edu_1_title: "Computer Graphics", edu_1_desc: "2017 — 2020 · Bachelor degree",
    lang_pl: "Polish", lvl_native: "Native", lang_en: "English", lang_de: "German",
    contact_badge: "Available for new projects", contact_heading: "Have a project?<br><span class=\"hi-green\">Let's talk.</span>", contact_desc_2: "I'd love to hear about your idea and help bring it to life in the best way possible. I reply within 24h.",
    contact_btn_main: "CONTACT ME", cv_desc: "Download my CV<br>in PDF format", cv_btn_dl: "DOWNLOAD CV",
    menu_contact_sub: "Start project",
    auth_title: "Restricted Access",
    auth_subtitle: "This page is password protected. Please enter the access key to continue.",
    auth_placeholder: "Password...",
    auth_btn: "ENTER",
    auth_error: "Incorrect password. Try again.",
    
    menu_cv: "RESUME", cv_available: "Available for Work", cv_job_title: "AI-Powered Graphic Designer",
    cv_exp_title: "Work Experience", cv_cert_title: "Certifications", cv_edu_title: "Education",
    cv_skill_ai_img: "AI Image Gen.", cv_skill_ai_vid: "AI Video Gen.",
    cv_job1_title: "Graphic Designer", cv_job1_date: "February 2025 — Present", cv_fulltime: "· Full-time",
    cv_job1_b1: "Creating graphic materials for social media (Facebook, Instagram) and email campaigns", cv_job1_b2: "Designing banners, advertising creatives, and layouts for the urlop.pl website", cv_job1_b3: "Producing animated graphics and reels promoting travel agency offers", cv_job1_b4: "Creating DTP materials: catalogs, flyers, posters, business cards", cv_job1_b5: "Collaborating with the marketing department on seasonal and last-minute campaigns",
    cv_job2_title: "Freelance Graphic Designer", cv_job2_company: "Remote / Freelance", cv_job2_date: "2021 — Present",
    cv_job2_b1: "Comprehensive visual identity projects for companies in various industries", cv_job2_b2: "Creating motion graphics animations and reels for social media", cv_job2_b3: "Serving clients including Seqma, Vision4U, Jasło Printing House, APS Data, Rumak Ranch, OSCA Courts", cv_job2_b4: "Using generative AI (Midjourney, Sora, Kling, Seedream) for content production",
    cv_job3_title: "Computer Graphic Designer", cv_hybrid: "· Hybrid",
    cv_job3_b1: "Designing health management platforms and VR courses for the US market", cv_job3_b2: "Creating presentations and marketing materials for US universities", cv_job3_b3: "Working in an international environment in English",
    cv_job4_title: "Graphic Designer (Intern)",
    cv_job4_b1: "Editing advertisements and visualizing promotional clothing", cv_job4_b2: "Creating websites and catalogs for a travel agency",
    cv_job5_title: "Vocational Internship", cv_job5_comp: "APSdata", cv_job5_date: "2015", cv_job5_b1: "Order fulfillment (flyers, business cards, posters)",
    cv_job6_comp: "Jasło Printing House", cv_job6_date: "2014", cv_job6_b1: "Preparing graphics for the printing process", cv_job6_b2: "Operating printing machines",
    cv_job7_comp: "MGM Advertising", cv_job7_date: "2013", cv_job7_b1: "Designing ad graphics and pre-press preparation", cv_job7_b2: "Operating cutting plotters and banner wrapping",
    cv_edu2_title: "Digital Graphic Processes Technician", cv_edu2_school: "Technical School No. 4 in Jasło",
    cv_cert_a54: "A54 Qualification: Pre-press graphics preparation",
    cv_cert_a55: "A55 Qualification: Digital printing",
    cv_cert_a25: "A25 Qualification: Multimedia projects realization",
    cv_cert_social: "The Social Media Marketing Masterclass 2024",
    cv_cert_masterclass: "Graphic Design Masterclass Intermediate"
  },
  de: {
    menu_home: "STARTSEITE", menu_projects: "PROJEKTE", menu_about: "ÜBER MICH", menu_contact: "KONTAKT", sidebar_sm: "FOLGEN SIE MEINEN SM:",
    hero_badge: "BEREIT ZUR ZUSAMMENARBEIT", hero_role: "Motion Designer & Visual Artist",
    hero_desc: "Ich erstelle <span class=\"hi-green\">Animationen</span>, <span class=\"hi-purple\">Grafikdesigns</span> und visuelle Inhalte, die Aufmerksamkeit erregen und eine Geschichte erzählen.",
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
    
    cat_title_anim: "Animationen", cat_title_post: "Beiträge", cat_title_reel: "Reels", cat_title_poster: "Plakate", cat_title_design: "Design", cat_title_other: "Andere",
    filter_anim: "ANIMATIONEN", filter_post: "BEITRÄGE", filter_reel: "REELS", filter_poster: "PLAKATE", filter_design: "DESIGN", filter_other: "ANDERE",
    cert_label: "ZERTIFIKATE", exp_title: "ERFAHRUNG", skills_label: "FÄHIGKEITEN", edu_title2: "AUSBILDUNG", lang_label: "SPRACHEN",
    date_present_25: "2025 — Heute", date_present_21: "2021 — Heute", month_feb: "Februar 2026", month_mar: "März 2026", month_jun: "Juni 2022", month_jun26: "Juni 2026",
    job_title_1: "Grafikdesigner", job_desc_1: "Urlop.pl · Warschau (Vollzeit)",
    job_title_2: "Freelance Grafikdesigner", job_desc_2: "Fernarbeit / Freelance · Erstellung von visuellen Identitäten und Werbematerialien.",
    job_title_3: "Computergrafiker", job_desc_3: "Enfoglobe LLC · Rzeszow (Hybrid)",
    job_title_4: "Grafikdesigner (Praktikum)", edu_1_title: "Computergrafik", edu_1_desc: "2017 — 2020 · Bachelor",
    lang_pl: "Polnisch", lvl_native: "Muttersprache", lang_en: "Englisch", lang_de: "Deutsch",
    contact_badge: "Verfügbar für neue Projekte", contact_heading: "Haben Sie ein Projekt?<br><span class=\"hi-green\">Lass uns reden.</span>", contact_desc_2: "Ich würde gerne von Ihrer Idee hören und helfen, sie auf die bestmögliche Weise umzusetzen. Ich antworte innerhalb von 24 Stunden.",
    contact_btn_main: "KONTAKTIERE MICH", cv_desc: "Lade meinen Lebenslauf<br>im PDF-Format herunter", cv_btn_dl: "LEBENSLAUF HERUNTERLADEN",
    menu_contact_sub: "Zusammenarbeit",
    auth_title: "Eingeschränkter Zugriff",
    auth_subtitle: "Diese Seite ist passwortgeschützt. Bitte geben Sie den Zugangsschlüssel ein, um fortzufahren.",
    auth_placeholder: "Passwort...",
    auth_btn: "EINTRETEN",
    auth_error: "Falsches Passwort. Versuchen Sie es erneut.",
    
    menu_cv: "LEBENSLAUF", cv_available: "Verfügbar für Arbeit", cv_job_title: "AI-Powered Graphic Designer",
    cv_exp_title: "Berufserfahrung", cv_cert_title: "Zertifizierungen", cv_edu_title: "Ausbildung",
    cv_skill_ai_img: "KI-Bildgenerierung", cv_skill_ai_vid: "KI-Videogenerierung",
    cv_job1_title: "Grafikdesigner", cv_job1_date: "Februar 2025 — Heute", cv_fulltime: "· Vollzeit",
    cv_job1_b1: "Erstellung von Grafikmaterialien für Social Media (Facebook, Instagram) und E-Mail-Kampagnen", cv_job1_b2: "Gestaltung von Bannern, Werbemitteln und Layouts für die Website urlop.pl", cv_job1_b3: "Produktion von animierten Grafiken und Reels zur Förderung von Reiseangeboten", cv_job1_b4: "Erstellung von DTP-Materialien: Kataloge, Flyer, Plakate, Visitenkarten", cv_job1_b5: "Zusammenarbeit mit der Marketingabteilung bei saisonalen und Last-Minute-Kampagnen",
    cv_job2_title: "Freiberuflicher Grafikdesigner", cv_job2_company: "Fernarbeit / Freiberuflich", cv_job2_date: "2021 — Heute",
    cv_job2_b1: "Umfassende visuelle Identitätsprojekte für Unternehmen aus verschiedenen Branchen", cv_job2_b2: "Erstellung von Motion Graphics Animationen und Reels für Social Media", cv_job2_b3: "Betreuung von Kunden wie Seqma, Vision4U, Druckerei Jasło, APS Data, Ranch Rumak, OSCA Courts", cv_job2_b4: "Nutzung generativer KI (Midjourney, Sora, Kling, Seedream) für die Content-Produktion",
    cv_job3_title: "Computergrafikdesigner", cv_hybrid: "· Hybrid",
    cv_job3_b1: "Gestaltung von Gesundheitsmanagement-Plattformen und VR-Kursen für den US-Markt", cv_job3_b2: "Erstellung von Präsentationen und Marketingmaterialien für US-Universitäten", cv_job3_b3: "Arbeiten in einem internationalen Umfeld auf Englisch",
    cv_job4_title: "Grafikdesigner (Praktikant)",
    cv_job4_b1: "Bearbeitung von Werbung und Visualisierung von Werbebekleidung", cv_job4_b2: "Erstellung von Websites und Katalogen für ein Reisebüro",
    cv_job5_title: "Berufspraktikum", cv_job5_comp: "APSdata", cv_job5_date: "2015", cv_job5_b1: "Auftragsabwicklung (Flyer, Visitenkarten, Plakate)",
    cv_job6_comp: "Druckerei Jasło", cv_job6_date: "2014", cv_job6_b1: "Druckvorstufe von Grafiken", cv_job6_b2: "Bedienung von Druckmaschinen",
    cv_job7_comp: "MGM Werbung", cv_job7_date: "2013", cv_job7_b1: "Entwurf von Werbegrafiken und Druckvorbereitung", cv_job7_b2: "Bedienung von Schneideplottern und Bannerbeklebung",
    cv_edu2_title: "Techniker für digitale Grafikprozesse", cv_edu2_school: "Technische Schule Nr. 4 in Jasło",
    cv_cert_a54: "A54 Qualifikation: Pre-Press Vorbereitung",
    cv_cert_a55: "A55 Qualifikation: Digitaldruck",
    cv_cert_a25: "A25 Qualifikation: Multimedia-Projekte",
    cv_cert_social: "The Social Media Marketing Masterclass 2024",
    cv_cert_masterclass: "Graphic Design Masterclass Intermediate"
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
  
  // Update Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (TRANSLATIONS[lang][key]) el.placeholder = TRANSLATIONS[lang][key];
  });
  
  // Update document language (data attribute – nie zmieniamy lang, bo Chrome Translate wywołuje re-tłumaczenie)
  document.documentElement.setAttribute('data-lang', lang);
  
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

// ============================================================
// PROJECTS DATA
// ============================================================
const PROJECTS = [
  // ANIMACJE
  {"id":1,"category":"Animacje","title":"Animacja 1","desc":"Animacja / projekt wideo.","tags":["After Effects","Animation","Motion Graphics"],"video":"video/animacje/Animacja 1.mp4","accent":"#39FF14","span":"normal"},
  {"id":2,"category":"Animacje","title":"Animacja 2","desc":"Animacja / projekt wideo.","tags":["After Effects","Animation","Motion Graphics"],"video":"video/animacje/Animacja 2.mp4","landscape":true,"accent":"#39FF14","span":"normal"},
  {"id":3,"category":"Animacje","title":"Animacja 3","desc":"Animacja / projekt wideo.","tags":["After Effects","Animation","Motion Graphics"],"video":"video/animacje/Animacja 3.mp4","accent":"#39FF14","span":"normal"},
  {"id":4,"category":"Animacje","title":"Animacja 4","desc":"Animacja / projekt wideo.","tags":["After Effects","Animation","Motion Graphics"],"video":"video/animacje/Animacja 4.mp4","landscape":true,"accent":"#39FF14","span":"normal"},
  {"id":400,"category":"Animacje","title":"Animacja 5","desc":"Animacja / projekt wideo.","tags":["After Effects","Animation","Motion Graphics"],"video":"video/animacje/Animacja 5.mp4","accent":"#39FF14","span":"normal"},
  {"id":401,"category":"Animacje","title":"Animacja 6","desc":"Animacja / projekt wideo.","tags":["After Effects","Animation","Motion Graphics"],"video":"video/animacje/Animacja 6.mp4","accent":"#39FF14","span":"normal"},
  {"id":402,"category":"Animacje","title":"Animacja 7","desc":"Animacja / projekt wideo.","tags":["After Effects","Animation","Motion Graphics"],"video":"video/animacje/Animacja 7.mp4","accent":"#39FF14","span":"normal"},
  {"id":403,"category":"Animacje","title":"Animacja 8","desc":"Animacja / projekt wideo.","tags":["After Effects","Animation","Motion Graphics"],"video":"video/animacje/Animacja 8.mp4","accent":"#39FF14","span":"normal"},
  {"id":404,"category":"Animacje","title":"Animacja 9","desc":"Animacja / projekt wideo.","tags":["After Effects","Animation","Motion Graphics"],"video":"video/animacje/Animacja 9.mp4","landscape":true,"accent":"#39FF14","span":"normal"},



  // ROLKI
  {"id":8,"category":"Rolki","title":"Rolka 1","desc":"Rolka social media.","tags":["Reels","Video","Social Media"],"video":"video/rolki/Rolka 1.mp4","accent":"#BF5FFF","span":"normal"},
  {"id":9,"category":"Rolki","title":"Rolka 2","desc":"Rolka social media.","tags":["Reels","Video","Social Media"],"video":"video/rolki/Rolka 2.mp4","accent":"#BF5FFF","span":"normal"},
  {"id":300,"category":"Rolki","title":"Rolka 3","desc":"Rolka social media.","tags":["Reels","Video","Social Media"],"video":"video/rolki/Rolka 3.mp4","accent":"#BF5FFF","span":"normal"},
  {"id":301,"category":"Rolki","title":"Rolka 4","desc":"Rolka social media.","tags":["Reels","Video","Social Media"],"video":"video/rolki/Rolka 4.mp4","accent":"#BF5FFF","span":"normal"},
  {"id":302,"category":"Rolki","title":"Rolka 5","desc":"Rolka social media.","tags":["Reels","Video","Social Media"],"video":"video/rolki/Rolka 5.mp4","accent":"#BF5FFF","span":"normal"},
  {"id":303,"category":"Rolki","title":"Rolka 6","desc":"Rolka social media.","tags":["Reels","Video","Social Media"],"video":"video/rolki/Rolka 6.mp4","accent":"#BF5FFF","span":"normal"},
  {"id":304,"category":"Rolki","title":"Rolka 7","desc":"Rolka social media.","tags":["Reels","Video","Social Media"],"video":"video/rolki/Rolka 7.mp4","accent":"#BF5FFF","span":"normal"},
  {"id":305,"category":"Rolki","title":"Rolka 8","desc":"Rolka social media.","tags":["Reels","Video","Social Media"],"video":"video/rolki/Rolka 8.mp4","accent":"#BF5FFF","span":"normal"},
  {"id":306,"category":"Rolki","title":"Rolka 9","desc":"Rolka social media.","tags":["Reels","Video","Social Media"],"video":"video/rolki/Rolka 9.mp4","accent":"#BF5FFF","span":"normal"},
  {"id":307,"category":"Rolki","title":"Rolka 10","desc":"Rolka social media.","tags":["Reels","Video","Social Media"],"video":"video/rolki/Rolka 10.mp4","accent":"#BF5FFF","span":"normal"},
  {"id":308,"category":"Rolki","title":"Rolka 11","desc":"Rolka social media.","tags":["Reels","Video","Social Media"],"video":"video/rolki/Rolka 11.mp4","accent":"#BF5FFF","span":"normal"},
  {"id":309,"category":"Rolki","title":"Rolka 12","desc":"Rolka social media.","tags":["Reels","Video","Social Media"],"video":"video/rolki/Rolka 12.mp4","accent":"#BF5FFF","span":"normal"},
  {"id":310,"category":"Rolki","title":"Rolka 13","desc":"Rolka social media.","tags":["Reels","Video","Social Media"],"video":"video/rolki/Rolka 13.mp4","accent":"#BF5FFF","span":"normal"},
  {"id":311,"category":"Rolki","title":"Rolka 14","desc":"Rolka social media.","tags":["Reels","Video","Social Media"],"video":"video/rolki/Rolka 14.mp4","accent":"#BF5FFF","span":"normal"},
  {"id":312,"category":"Rolki","title":"Rolka 15","desc":"Rolka social media.","tags":["Reels","Video","Social Media"],"video":"video/rolki/Rolka 15.mp4","accent":"#BF5FFF","span":"normal"},
  {"id":313,"category":"Rolki","title":"Rolka 16","desc":"Rolka social media.","tags":["Reels","Video","Social Media"],"video":"video/rolki/Rolka 16.mp4","accent":"#BF5FFF","span":"normal"},
  {"id":314,"category":"Rolki","title":"Rolka 17","desc":"Rolka social media.","tags":["Reels","Video","Social Media"],"video":"video/rolki/Rolka 17.mp4","accent":"#BF5FFF","span":"normal"},

  // PLAKATY

  {"id":12,"category":"Plakaty","title":"Plakat 2","desc":"Plakat / projekt graficzny.","tags":["Print Design","Photoshop","Poster"],"images":["img/projects/plakaty/Plakat 2.webp"],"span":"normal","accent":"#FFA139"},
  {"id":500,"category":"Plakaty","title":"Plakat 3","desc":"Plakat / projekt graficzny.","tags":["Print Design","Photoshop","Poster"],"images":["img/projects/plakaty/Plakat 3.webp"],"span":"normal","accent":"#FFA139"},
  {"id":501,"category":"Plakaty","title":"Plakat 4","desc":"Plakat / projekt graficzny.","tags":["Print Design","Photoshop","Poster"],"images":["img/projects/plakaty/Plakat 4.webp"],"span":"normal","accent":"#FFA139"},
  {"id":502,"category":"Plakaty","title":"Plakat 5","desc":"Plakat / projekt graficzny.","tags":["Print Design","Photoshop","Poster"],"images":["img/projects/plakaty/Plakat 5.webp"],"span":"normal","accent":"#FFA139"},
  {"id":503,"category":"Plakaty","title":"Plakat 6","desc":"Plakat / projekt graficzny.","tags":["Print Design","Photoshop","Poster"],"images":["img/projects/plakaty/Plakat 6.webp"],"span":"normal","accent":"#FFA139"},
  {"id":504,"category":"Plakaty","title":"Plakat 7","desc":"Plakat / projekt graficzny.","tags":["Print Design","Photoshop","Poster"],"images":["img/projects/plakaty/Plakat 7.webp"],"span":"normal","accent":"#FFA139"},
  {"id":505,"category":"Plakaty","title":"Plakat 8","desc":"Plakat / projekt graficzny.","tags":["Print Design","Photoshop","Poster"],"images":["img/projects/plakaty/Plakat 8.webp"],"span":"normal","accent":"#FFA139"},
  {"id":506,"category":"Plakaty","title":"Plakat 9","desc":"Plakat / projekt graficzny.","tags":["Print Design","Photoshop","Poster"],"images":["img/projects/plakaty/Plakat 9.webp"],"span":"large","accent":"#FFA139"},
  {"id":507,"category":"Plakaty","title":"Plakat 10","desc":"Plakat / projekt graficzny.","tags":["Print Design","Photoshop","Poster"],"images":["img/projects/plakaty/Plakat 10.webp"],"span":"large","accent":"#FFA139"},
  {"id":508,"category":"Plakaty","title":"Plakat 11","desc":"Plakat / projekt graficzny.","tags":["Print Design","Photoshop","Poster"],"images":["img/projects/plakaty/Plakat 11.webp"],"span":"normal","accent":"#FFA139"},
  {"id":509,"category":"Plakaty","title":"Plakat 12","desc":"Plakat / projekt graficzny.","tags":["Print Design","Photoshop","Poster"],"images":["img/projects/plakaty/Plakat 12.webp"],"span":"large","accent":"#FFA139"},
  {"id":510,"category":"Plakaty","title":"Plakat 13","desc":"Plakat / projekt graficzny.","tags":["Print Design","Photoshop","Poster"],"images":["img/projects/plakaty/Plakat 13.webp"],"span":"normal","accent":"#FFA139"},
  {"id":511,"category":"Plakaty","title":"Plakat 14","desc":"Plakat / projekt graficzny.","tags":["Print Design","Photoshop","Poster"],"images":["img/projects/plakaty/Plakat 14.webp"],"span":"normal","accent":"#FFA139"},
  {"id":512,"category":"Plakaty","title":"Plakat 15","desc":"Plakat / projekt graficzny.","tags":["Print Design","Photoshop","Poster"],"images":["img/projects/plakaty/Plakat 15.webp"],"span":"normal","accent":"#FFA139"},
  {"id":513,"category":"Plakaty","title":"Plakat 16","desc":"Plakat / projekt graficzny.","tags":["Print Design","Photoshop","Poster"],"images":["img/projects/plakaty/Plakat 16.webp"],"span":"normal","accent":"#FFA139"},
  {"id":514,"category":"Plakaty","title":"Plakat 17","desc":"Plakat / projekt graficzny.","tags":["Print Design","Photoshop","Poster"],"images":["img/projects/plakaty/Plakat 17.webp"],"span":"normal","accent":"#FFA139"},
  {"id":515,"category":"Plakaty","title":"Plakat 18","desc":"Plakat / projekt graficzny.","tags":["Print Design","Photoshop","Poster"],"images":["img/projects/plakaty/Plakat 18.webp"],"span":"normal","accent":"#FFA139"},
  {"id":516,"category":"Plakaty","title":"Plakat 19","desc":"Plakat / projekt graficzny.","tags":["Print Design","Photoshop","Poster"],"images":["img/projects/plakaty/Plakat 19.webp"],"span":"normal","accent":"#FFA139"},
  {"id":517,"category":"Plakaty","title":"Plakat 20","desc":"Plakat / projekt graficzny.","tags":["Print Design","Photoshop","Poster"],"images":["img/projects/plakaty/Plakat 20.webp"],"span":"normal","accent":"#FFA139"},
  {"id":518,"category":"Plakaty","title":"Plakat 21","desc":"Plakat / projekt graficzny.","tags":["Print Design","Photoshop","Poster"],"images":["img/projects/plakaty/Plakat 21.webp"],"span":"normal","accent":"#FFA139"},
  {"id":519,"category":"Plakaty","title":"Plakat 22","desc":"Plakat / projekt graficzny.","tags":["Print Design","Photoshop","Poster"],"images":["img/projects/plakaty/Plakat 22.webp"],"span":"normal","accent":"#FFA139"},
  {"id":520,"category":"Plakaty","title":"Plakat 23","desc":"Plakat / projekt graficzny.","tags":["Print Design","Photoshop","Poster"],"images":["img/projects/plakaty/Plakat 23.webp"],"span":"normal","accent":"#FFA139"},
  {"id":521,"category":"Plakaty","title":"Plakat 24","desc":"Plakat / projekt graficzny.","tags":["Print Design","Photoshop","Poster"],"images":["img/projects/plakaty/Plakat 24.webp"],"span":"normal","accent":"#FFA139"},
  {"id":522,"category":"Plakaty","title":"Plakat 25","desc":"Plakat / projekt graficzny.","tags":["Print Design","Photoshop","Poster"],"images":["img/projects/plakaty/Plakat 25.webp"],"span":"normal","accent":"#FFA139"},

  {"id":524,"category":"Plakaty","title":"Plakat 27","desc":"Plakat / projekt graficzny.","tags":["Print Design","Photoshop","Poster"],"images":["img/projects/plakaty/Plakat 27.webp"],"span":"normal","accent":"#FFA139"},
  {"id":525,"category":"Plakaty","title":"Plakat 28","desc":"Plakat / projekt graficzny.","tags":["Print Design","Photoshop","Poster"],"images":["img/projects/plakaty/Plakat 28.webp"],"span":"normal","accent":"#FFA139"},
  {"id":526,"category":"Plakaty","title":"Plakat 29","desc":"Plakat / projekt graficzny.","tags":["Print Design","Photoshop","Poster"],"images":["img/projects/plakaty/Plakat 29.webp"],"span":"normal","accent":"#FFA139"},

  // DESIGN
  {
    id: 13, category: 'Design',
    title: 'UI Dashboard',
    desc: 'Projekt interfejsu dashboardu analitycznego dla startupu SaaS. Dark mode, data visualization, responsive. Projekt w Figma + prototyp.',
    tags: ['Figma', 'UI/UX', 'Dashboard', 'Dark Mode'],
    bg: 'linear-gradient(135deg, #050d18 0%, #0d1020 100%)',
    accent: '#39AAFF', emoji: '💻', span: 'large'
  },
  {
    id: 14, category: 'Design',
    title: 'Brand Identity',
    desc: 'Kompletna identyfikacja wizualna dla startupu tech. Logo, paleta kolorów, typografia, system ikon i brand guidelines 40+ stron.',
    tags: ['Illustrator', 'Branding', 'Brand Identity'],
    bg: 'linear-gradient(135deg, #140814 0%, #0a0614 100%)',
    accent: '#BF5FFF', emoji: '✏️', span: 'normal'
  },
  {
    id: 15, category: 'Design',
    title: 'App UI Kit',
    desc: 'Kompletny UI kit dla aplikacji mobilnej — 40+ komponentów, dark/light mode, 3 warianty kolorystyczne.',
    tags: ['Figma', 'Mobile', 'UI Kit'],
    bg: 'linear-gradient(135deg, #08100d 0%, #050d10 100%)',
    accent: '#39FF14', emoji: '📐', span: 'normal'
  },

  // POZOSTAŁE
  {"id":600,"category":"Pozostałe","title":"Kartka świąteczna dla klientów","desc":"Projekt w kategorii Pozostałe.","tags":["Design","Graphic Design"],"images":["img/projects/pozostale/Kartka świąteczna dla klientów.webp"],"span":"large","accent":"#FFDB39"},
  {"id":601,"category":"Pozostałe","title":"Kartka świąteczna dla partnerów","desc":"Projekt w kategorii Pozostałe.","tags":["Design","Graphic Design"],"images":["img/projects/pozostale/Kartka świąteczna dla partnerów.webp"],"span":"large","accent":"#FFDB39"},
  {"id":602,"category":"Pozostałe","title":"Okładka kalendarza","desc":"Projekt w kategorii Pozostałe.","tags":["Design","Graphic Design"],"images":["img/projects/pozostale/Okładka kalendarza.webp"],"span":"normal","accent":"#FFDB39"},
  {"id":603,"category":"Pozostałe","title":"Projekty logo","desc":"Projekt w kategorii Pozostałe.","tags":["Design","Graphic Design"],"images":["img/projects/pozostale/Projekty logo.webp"],"span":"large","accent":"#FFDB39"},
  {"id":604,"category":"Pozostałe","title":"Seqma brand hero do prezentacji","desc":"Projekt w kategorii Pozostałe.","tags":["Design","Graphic Design"],"images":["img/projects/pozostale/Seqma brand hero do prezentacji.webp"],"span":"large","accent":"#FFDB39"},
  {"id":605,"category":"Pozostałe","title":"Urlop.pl projekty oraz wizualizacje merch","desc":"Projekt w kategorii Pozostałe.","tags":["Design","Graphic Design"],"images":["img/projects/pozostale/Urlop.pl projekty oraz wizualizacje merch.webp"],"span":"large","accent":"#FFDB39"},
  // NOWE POSTY (Wygenerowane)
  {"id":100,"category":"Posty","title":"Cover fb dla franczyz","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/cover fb dla franczyz.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":101,"category":"Posty","title":"Grafika informująca o dyżurach","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/grafika informująca o dyżurach.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":102,"category":"Posty","title":"Grafika na konkurs nekera","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/grafika na konkurs nekera.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":103,"category":"Posty","title":"Grafika na konkurs rainbow","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/grafika na konkurs rainbow.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":104,"category":"Posty","title":"Neocardiosim","desc":"Karuzela: Neocardiosim","tags":["Social Media","Design","Carousel"],"images":["img/projects/neocardiosim/Post Neocardiosim (1).webp","img/projects/neocardiosim/Post Neocardiosim (2).webp","img/projects/neocardiosim/Post Neocardiosim (3).webp","img/projects/neocardiosim/Post Neocardiosim (4).webp","img/projects/neocardiosim/Post Neocardiosim (5).webp","img/projects/neocardiosim/Post Neocardiosim (6).webp"],"span":"large","accent":"#39FF14"},
  {"id":105,"category":"Posty","title":"Pora na pomidora post 2","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/pora na pomidora post 2.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":106,"category":"Posty","title":"Pora na pomidora post 3","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/Pora na pomidora post 3.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":107,"category":"Posty","title":"Pora na pomidora post","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/pora na pomidora post.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":108,"category":"Posty","title":"Post  WSPIA 2","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/post  WSPIA 2.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":109,"category":"Posty","title":"Post citybreak","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/post citybreak.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":110,"category":"Posty","title":"Post dzień kobiet","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/post dzień kobiet.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":111,"category":"Posty","title":"Post Enfoglobe University Florida 2","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/Post Enfoglobe University Florida 2.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":112,"category":"Posty","title":"Post Enfoglobe University Florida","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/Post Enfoglobe University Florida.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":113,"category":"Posty","title":"Post floryhorse produkt 1","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/post floryhorse produkt 1.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":114,"category":"Posty","title":"Post floryhorse produkt 2","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/post floryhorse produkt 2.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":115,"category":"Posty","title":"Jakim urlopowiczem jesteś","desc":"Karuzela: Jakim urlopowiczem jesteś","tags":["Social Media","Design","Carousel"],"images":["img/projects/post karuzela jakim urlopowiczem jesteś/01.webp","img/projects/post karuzela jakim urlopowiczem jesteś/02.webp","img/projects/post karuzela jakim urlopowiczem jesteś/03.webp","img/projects/post karuzela jakim urlopowiczem jesteś/04.webp","img/projects/post karuzela jakim urlopowiczem jesteś/05.webp","img/projects/post karuzela jakim urlopowiczem jesteś/06.webp","img/projects/post karuzela jakim urlopowiczem jesteś/07.webp","img/projects/post karuzela jakim urlopowiczem jesteś/08.webp","img/projects/post karuzela jakim urlopowiczem jesteś/09.webp","img/projects/post karuzela jakim urlopowiczem jesteś/10.webp","img/projects/post karuzela jakim urlopowiczem jesteś/11.webp","img/projects/post karuzela jakim urlopowiczem jesteś/12.webp","img/projects/post karuzela jakim urlopowiczem jesteś/13.webp","img/projects/post karuzela jakim urlopowiczem jesteś/14.webp"],"span":"large","accent":"#39FF14"},
  {"id":116,"category":"Posty","title":"Kierunki","desc":"Karuzela: Kierunki","tags":["Social Media","Design","Carousel"],"images":["img/projects/post karuzela kierunki/Egipt.webp","img/projects/post karuzela kierunki/Hiszpania.webp","img/projects/post karuzela kierunki/Paryż.webp","img/projects/post karuzela kierunki/Wenecja.webp","img/projects/post karuzela kierunki/Zanzibar.webp"],"span":"normal","accent":"#39FF14"},

  {"id":118,"category":"Posty","title":"Post KNZiM","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/Post KNZiM.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":119,"category":"Posty","title":"Post luxdom 1","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/post luxdom 1.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":120,"category":"Posty","title":"Post LuxDom 2","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/Post LuxDom 2.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":121,"category":"Posty","title":"Post LuxDom 3","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/Post LuxDom 3.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":122,"category":"Posty","title":"Post na kampanie walentynkową","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/post na kampanie walentynkową.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":123,"category":"Posty","title":"Post na majówkowe last minute","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/post na majówkowe last minute.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":124,"category":"Posty","title":"Post na piątek 13","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/post na piątek 13.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":125,"category":"Posty","title":"Post na prima aprilis","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/post na prima aprilis.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":126,"category":"Posty","title":"Post promocyjny dla franczyz wersja druga","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/post promocyjny dla franczyz wersja druga.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":127,"category":"Posty","title":"Post promocyjny dla franczyz","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/post promocyjny dla franczyz.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":128,"category":"Posty","title":"Post promujący walentynkowe last minute","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/post promujący walentynkowe last minute.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":129,"category":"Posty","title":"Post przypominający o walentynkach","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/post przypominający o walentynkach.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":130,"category":"Posty","title":"Post walentynkowy dłuższe wyjazdy","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/post walentynkowy dłuższe wyjazdy.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":131,"category":"Posty","title":"Post walentynkowy zakochaj się w urlopie","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/post walentynkowy zakochaj się w urlopie.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":132,"category":"Posty","title":"ARC","desc":"Karuzela: ARC","tags":["Social Media","Design","Carousel"],"images":["img/projects/Posty ARC/post ARC (1).webp","img/projects/Posty ARC/post ARC (2).webp","img/projects/Posty ARC/post ARC (3).webp","img/projects/Posty ARC/post ARC (4).webp","img/projects/Posty ARC/post ARC (5).webp","img/projects/Posty ARC/post ARC (6).webp"],"span":"large","accent":"#39FF14"},
  {"id":133,"category":"Posty","title":"Enfoglobe","desc":"Karuzela: Enfoglobe","tags":["Social Media","Design","Carousel"],"images":["img/projects/posty Enfoglobe/Post Enfoglobe (1).webp","img/projects/posty Enfoglobe/Post Enfoglobe (2).webp","img/projects/posty Enfoglobe/Post Enfoglobe (3).webp","img/projects/posty Enfoglobe/Post Enfoglobe (4).webp","img/projects/posty Enfoglobe/Post Enfoglobe (5).webp","img/projects/posty Enfoglobe/Post Enfoglobe (6).webp","img/projects/posty Enfoglobe/Post Enfoglobe (7).webp"],"span":"large","accent":"#39FF14"},
  {"id":134,"category":"Posty","title":"Gocławia","desc":"Karuzela: Gocławia","tags":["Social Media","Design","Carousel"],"images":["img/projects/Posty Gocławia/Social media EDINVEST (1).webp","img/projects/Posty Gocławia/Social media EDINVEST (2).webp","img/projects/Posty Gocławia/Social media EDINVEST (3).webp","img/projects/Posty Gocławia/Social media EDINVEST (4).webp","img/projects/Posty Gocławia/Social media EDINVEST (5).webp","img/projects/Posty Gocławia/Social media EDINVEST (6).webp"],"span":"large","accent":"#39FF14"},
  {"id":135,"category":"Posty","title":"Informed Consent","desc":"Karuzela: Informed Consent","tags":["Social Media","Design","Carousel"],"images":["img/projects/Posty Informed Consent/Post Informed Consent (1).webp","img/projects/Posty Informed Consent/Post Informed Consent (2).webp","img/projects/Posty Informed Consent/Post Informed Consent (3).webp","img/projects/Posty Informed Consent/Post Informed Consent (4).webp"],"span":"normal","accent":"#39FF14"},
  {"id":136,"category":"Posty","title":"Interactive Care","desc":"Karuzela: Interactive Care","tags":["Social Media","Design","Carousel"],"images":["img/projects/Posty Interactive Care/Post interactive care (1).webp","img/projects/Posty Interactive Care/Post interactive care (2).webp","img/projects/Posty Interactive Care/Post interactive care (3).webp"],"span":"normal","accent":"#39FF14"},
  {"id":137,"category":"Posty","title":"LOCCO","desc":"Karuzela: LOCCO","tags":["Social Media","Design","Carousel"],"images":["img/projects/posty LOCCO/1.webp","img/projects/posty LOCCO/2.webp","img/projects/posty LOCCO/3.webp","img/projects/posty LOCCO/4.webp","img/projects/posty LOCCO/5.webp","img/projects/posty LOCCO/6.webp"],"span":"large","accent":"#39FF14"},
  {"id":138,"category":"Posty","title":"Rainbow 1 (1)","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/rainbow 1 (1).webp"],"span":"normal","accent":"#39AAFF"},
  {"id":139,"category":"Posty","title":"Rainbow 1","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/rainbow 1.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":140,"category":"Posty","title":"Rainbow 2","desc":"Projekt na social media / Post promocyjny.","tags":["Social Media","Design","Post"],"images":["img/projects/rainbow 2.webp"],"span":"normal","accent":"#39AAFF"},
  // POSTY URLOP.PL
  {"id":200,"category":"Posty","title":"Post urlop.pl (1)","desc":"Post promocyjny dla urlop.pl.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/posty urlop/Post urlop (1).webp"],"span":"normal","accent":"#39AAFF"},
  {"id":201,"category":"Posty","title":"Post urlop.pl (2)","desc":"Post promocyjny dla urlop.pl.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/posty urlop/Post urlop (2).webp"],"span":"normal","accent":"#39AAFF"},
  {"id":202,"category":"Posty","title":"Post urlop.pl (3)","desc":"Post promocyjny dla urlop.pl.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/posty urlop/Post urlop (3).webp"],"span":"normal","accent":"#39AAFF"},
  {"id":203,"category":"Posty","title":"Post urlop.pl (4)","desc":"Post promocyjny dla urlop.pl.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/posty urlop/Post urlop (4).webp"],"span":"normal","accent":"#39AAFF"},
  {"id":204,"category":"Posty","title":"Post urlop.pl (5)","desc":"Post promocyjny dla urlop.pl.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/posty urlop/Post urlop (5).webp"],"span":"normal","accent":"#39AAFF"},
  {"id":205,"category":"Posty","title":"Post urlop.pl (6)","desc":"Post promocyjny dla urlop.pl.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/posty urlop/Post urlop (6).webp"],"span":"normal","accent":"#39AAFF"},
  {"id":206,"category":"Posty","title":"Post urlop.pl (7)","desc":"Post promocyjny dla urlop.pl.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/posty urlop/Post urlop (7).webp"],"span":"normal","accent":"#39AAFF"},
  {"id":207,"category":"Posty","title":"Post urlop.pl (8)","desc":"Post promocyjny dla urlop.pl.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/posty urlop/Post urlop (8).webp"],"span":"normal","accent":"#39AAFF"},
  {"id":208,"category":"Posty","title":"Post urlop.pl (9)","desc":"Post promocyjny dla urlop.pl.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/posty urlop/Post urlop (9).webp"],"span":"normal","accent":"#39AAFF"},
  {"id":209,"category":"Posty","title":"Post urlop.pl (10)","desc":"Post promocyjny dla urlop.pl.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/posty urlop/Post urlop (10).webp"],"span":"normal","accent":"#39AAFF"},
  {"id":210,"category":"Posty","title":"Post urlop.pl (11)","desc":"Post promocyjny dla urlop.pl.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/posty urlop/Post urlop (11).webp"],"span":"normal","accent":"#39AAFF"},
  {"id":211,"category":"Posty","title":"Post urlop.pl (12)","desc":"Post promocyjny dla urlop.pl.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/posty urlop/Post urlop (12).webp"],"span":"normal","accent":"#39AAFF"},
  {"id":212,"category":"Posty","title":"Post urlop.pl (13)","desc":"Post promocyjny dla urlop.pl.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/posty urlop/Post urlop (13).webp"],"span":"normal","accent":"#39AAFF"},
  {"id":213,"category":"Posty","title":"Post urlop.pl (14)","desc":"Post promocyjny dla urlop.pl.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/posty urlop/Post urlop (14).webp"],"span":"normal","accent":"#39AAFF"},
  {"id":214,"category":"Posty","title":"Post urlop.pl (15)","desc":"Post promocyjny dla urlop.pl.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/posty urlop/Post urlop (15).webp"],"span":"normal","accent":"#39AAFF"},
  {"id":215,"category":"Posty","title":"Post urlop.pl (16)","desc":"Post promocyjny dla urlop.pl.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/posty urlop/Post urlop (16).webp"],"span":"normal","accent":"#39AAFF"},
  {"id":216,"category":"Posty","title":"Post urlop.pl (17)","desc":"Post promocyjny dla urlop.pl.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/posty urlop/Post urlop (17).webp"],"span":"normal","accent":"#39AAFF"},
  {"id":217,"category":"Posty","title":"Post urlop.pl (18)","desc":"Post promocyjny dla urlop.pl.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/posty urlop/Post urlop (18).webp"],"span":"normal","accent":"#39AAFF"},
  {"id":218,"category":"Posty","title":"Post urlop.pl (19)","desc":"Post promocyjny dla urlop.pl.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/posty urlop/Post urlop (19).webp"],"span":"normal","accent":"#39AAFF"},
  {"id":219,"category":"Posty","title":"Post urlop.pl (20)","desc":"Post promocyjny dla urlop.pl.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/posty urlop/Post urlop (20).webp"],"span":"normal","accent":"#39AAFF"},
  {"id":220,"category":"Posty","title":"Post urlop.pl (21)","desc":"Post promocyjny dla urlop.pl.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/posty urlop/Post urlop (21).webp"],"span":"normal","accent":"#39AAFF"},
  {"id":221,"category":"Posty","title":"Post urlop.pl (22)","desc":"Post promocyjny dla urlop.pl.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/posty urlop/Post urlop (22).webp"],"span":"normal","accent":"#39AAFF"},
  {"id":222,"category":"Posty","title":"Post urlop.pl (23)","desc":"Post promocyjny dla urlop.pl.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/posty urlop/Post urlop (23).webp"],"span":"normal","accent":"#39AAFF"},
  {"id":223,"category":"Posty","title":"Post urlop.pl (24)","desc":"Post promocyjny dla urlop.pl.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/posty urlop/Post urlop (24).webp"],"span":"normal","accent":"#39AAFF"},

  // NOWE ROLKI
  {"id":315,"category":"Rolki","title":"Rolka 18","desc":"Rolka social media.","tags":["Reels","Video","Social Media"],"video":"video/rolki/Rolka 18.mp4","accent":"#BF5FFF","span":"normal"},
  {"id":316,"category":"Rolki","title":"Rolka 19","desc":"Rolka social media.","tags":["Reels","Video","Social Media"],"video":"video/rolki/Rolka 19.mp4","accent":"#BF5FFF","span":"normal"},

  // NOWE POSTY POJEDYNCZE
  {"id":224,"category":"Posty","title":"1 maja","desc":"Post na Święto Pracy.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/1 maja.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":225,"category":"Posty","title":"2 maja","desc":"Post na Dzień Flagi.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/2 maja.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":226,"category":"Posty","title":"3 maja","desc":"Post na Święto Konstytucji.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/3 maja.webp"],"span":"normal","accent":"#39AAFF"},
  {"id":227,"category":"Posty","title":"Post Włochy","desc":"Post promocyjny — Włochy.","tags":["Social Media","Design","urlop.pl"],"images":["img/projects/post włochy.webp"],"span":"normal","accent":"#39AAFF"},

  // NOWE KARUZELE
  {"id":228,"category":"Posty","title":"Egipt — Wiza 0","desc":"Karuzela: Egipt bez wizy.","tags":["Social Media","Design","Carousel","urlop.pl"],"images":["img/projects/post egipt wiza 0/egipt wiza 0 (1).webp","img/projects/post egipt wiza 0/egipt wiza 0 (2).webp","img/projects/post egipt wiza 0/egipt wiza 0 (3).webp","img/projects/post egipt wiza 0/egipt wiza 0 (4).webp","img/projects/post egipt wiza 0/egipt wiza 0 (5).webp"],"span":"normal","accent":"#39FF14"},
  {"id":229,"category":"Posty","title":"Post Cypr","desc":"Karuzela: Cypr — oferta wakacyjna.","tags":["Social Media","Design","Carousel","urlop.pl"],"images":["img/projects/post cypr/post cypr (1).webp","img/projects/post cypr/post cypr (2).webp","img/projects/post cypr/post cypr (3).webp","img/projects/post cypr/post cypr (4).webp","img/projects/post cypr/post cypr (5).webp","img/projects/post cypr/post cypr (6).webp"],"span":"large","accent":"#39FF14"},
  {"id":230,"category":"Posty","title":"Dzień Ziemi","desc":"Karuzela: Dzień Ziemi.","tags":["Social Media","Design","Carousel"],"images":["img/projects/post dzien ziemi/post ziemia 1 (1).webp","img/projects/post dzien ziemi/post ziemia 1 (2).webp","img/projects/post dzien ziemi/post ziemia 1 (3).webp","img/projects/post dzien ziemi/post ziemia 1 (4).webp","img/projects/post dzien ziemi/post ziemia 1 (5).webp"],"span":"normal","accent":"#39FF14"}
];

// ============================================================
// ROUTER
// ============================================================
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const pg  = document.getElementById(`page-${page}`);
  const nav = document.getElementById(`nav-${page}`);
  if (pg)  pg.classList.add('active');
  if (nav) nav.classList.add('active');

  window.location.hash = page;
  document.getElementById('main-content').scrollTo({ top: 0, behavior: 'smooth' });

  // Page enter effects
  if (page === 'home')     setTimeout(animateStats, 120);
  if (page === 'about')    setTimeout(initSkillBars, 120);
  if (page === 'projects') setTimeout(() => renderProjects('all'), 50);

  document.getElementById('sidebar').classList.remove('open');
}

function navigateToCategory(cat) {
  navigate('projects');
  setTimeout(() => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === cat));
    renderProjects(cat);
  }, 100);
}

// Nav clicks
document.querySelectorAll('.nav-item').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navigate(link.dataset.page);
  });
});

// Filter clicks
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

// ============================================================
// CURSOR GLOW
// ============================================================
const cursorEl = document.getElementById('cursor-glow');
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursorEl.style.left = mouseX + 'px';
  cursorEl.style.top  = mouseY + 'px';
});

// ============================================================
// STATS COUNTER ANIMATION
// ============================================================
let statsAnimated = false;
function animateStats() {
  const nums = document.querySelectorAll('.stat-num[data-target]');
  if (!nums.length) return;
  nums.forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const dur = 1600;
    const fps = 60;
    const steps = dur / (1000 / fps);
    const inc = target / steps;
    let cur = 0;
    const tick = () => {
      cur = Math.min(cur + inc, target);
      el.textContent = Math.floor(cur) + suffix;
      if (cur < target) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
  
  if(!statsAnimated) {
    statsAnimated = true;
    initClientsCarousel();
  }
}

// CLIENTS CAROUSEL (Mini)
const CLIENTS_LIST = [
  "Seqma", "Enfoglobe", "Urlop.pl", "Vision4U", "Drukarnia Jasło", "MGM Reklamy", 
  "APS Data", "GreeMi", "Dolina trzech stawów", "Informed Consent", "OSCA Courts", "Ranczo Rumak"
];
let currentClientIdx = 0;
let clientInterval = null;

function initClientsCarousel() {
  const textEl = document.getElementById('clients-carousel-text');
  const dotsWrap = document.getElementById('clients-dots');
  if(!textEl || !dotsWrap) return;
  
  dotsWrap.innerHTML = CLIENTS_LIST.map((_, i) => `<span class="dot ${i===0?'active':''}" onclick="setClient(${i})"></span>`).join('');
  textEl.textContent = CLIENTS_LIST[0];
  
  if(clientInterval) clearInterval(clientInterval);
  clientInterval = setInterval(() => {
    setClient((currentClientIdx + 1) % CLIENTS_LIST.length);
  }, 3000);
}

window.setClient = function(idx) {
  currentClientIdx = idx;
  const textEl = document.getElementById('clients-carousel-text');
  const dotsWrap = document.getElementById('clients-dots');
  if(!textEl || !dotsWrap) return;
  
  textEl.style.opacity = 0;
  setTimeout(() => {
    textEl.textContent = CLIENTS_LIST[idx];
    textEl.style.opacity = 1;
  }, 200);

  Array.from(dotsWrap.children).forEach((d, i) => d.classList.toggle('active', i === idx));
  
  // reset interval on manual click
  if(clientInterval) clearInterval(clientInterval);
  clientInterval = setInterval(() => {
    setClient((currentClientIdx + 1) % CLIENTS_LIST.length);
  }, 3000);
};

// ============================================================
// FEATURED PROJECTS (HOME)
// ============================================================
function renderFeaturedProjects() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  const targetTitles = [
    "Plakat 5",
    "Animacja 8",
    "Plakat 11",
    "Post Enfoglobe University Florida",
    "Plakat 14"
  ];
  const featured = targetTitles.map(t => PROJECTS.find(p => p.title === t)).filter(Boolean);
  grid.innerHTML = featured.map(p => projectCardHTML(p, false)).join('');
}

// ============================================================
// PROJECT CARD HTML BUILDER
// ============================================================
function projectCardHTML(p, bento = true) {
  // span-2 tylko dla Pozostałe (poziome kartki/plakaty szerokie) - NIE dla Plakatów A4 które są pionowe!
  const extraClass = (p.category === 'Pozostałe' && p.span === 'large') ? 'span-2' : '';
  const hasImages = p.images && p.images.length > 0;
  const isCarousel = p.images && p.images.length > 1;
  
  const bgStyle = hasImages 
    ? `background-image: url('${p.images[0]}'); background-size: cover; background-position: center;`
    : (p.bg ? `background:${p.bg}` : '');
    
  const emojiHtml = hasImages ? '' : (p.emoji ? `<span class="proj-thumb-emoji">${p.emoji}</span>` : '');
  
  const hasVideo = !!p.video;
  
  const carouselIcon = isCarousel 
    ? `<div style="position:absolute; top:12px; right:12px; background:rgba(0,0,0,0.6); backdrop-filter:blur(4px); padding:6px; border-radius:6px; color:white; display:flex; align-items:center; justify-content:center;">
         <svg viewBox="0 0 24 24" fill="currentColor" stroke-width="2" style="width:16px; height:16px;">
           <path d="M4 4h12v12H4V4zm14 2h2v14H6v-2h10V6z"/>
         </svg>
       </div>`
    : '';
  
  const videoIcon = hasVideo
    ? `<div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); background:rgba(0,0,0,0.55); backdrop-filter:blur(6px); width:52px; height:52px; border-radius:50%; display:flex; align-items:center; justify-content:center; border:2px solid rgba(191,95,255,.5);">
         <svg viewBox="0 0 24 24" fill="#BF5FFF" style="width:24px; height:24px; margin-left:3px;"><path d="M8 5v14l11-7z"/></svg>
       </div>`
    : '';

  return `
    <div class="project-card ${extraClass}" onclick="openModal(${p.id})">
      <div class="proj-thumb" style="${bgStyle}">
        ${emojiHtml}
        ${hasVideo ? `<video src="${p.video}#t=1" muted preload="metadata" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" onmouseenter="this.play()" onmouseleave="this.pause();this.currentTime=1;"></video>` : ''}
      </div>
      ${carouselIcon}
      ${videoIcon}
      <div class="proj-overlay">
        <span class="proj-cat-tag" style="color:${p.accent}">${p.category}</span>
        <h3 class="proj-title">${p.title}</h3>
      </div>
      <div class="proj-expand">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
        </svg>
      </div>
    </div>
  `;
}

// ============================================================
// PROJECTS BENTO RENDER
// ============================================================
function renderProjects(filter) {
  const grid = document.getElementById('projects-bento');
  if (!grid) return;
  let list = (filter === 'all' ? PROJECTS.filter(p => p && p.category !== 'Design') : PROJECTS.filter(p => p && p.category === filter)).filter(Boolean);

  if (filter === 'all') {
    // Równomierne mieszanie kategorii (interleaving), aby uniknąć grupowania ciężkich plików
    const groups = {};
    list.forEach(p => {
      if (!groups[p.category]) groups[p.category] = [];
      groups[p.category].push(p);
    });
    const mixed = [];
    let added = true;
    while (added) {
      added = false;
      for (const cat in groups) {
        if (groups[cat].length > 0) {
          mixed.push(groups[cat].shift());
          added = true;
        }
      }
    }
    list = mixed;
    // Plakat 1 (id=11) przesuń niżej — nie powinien być pierwszym plakatem
    const p1idx = list.findIndex(p => p.id === 11);
    if (p1idx !== -1) {
      const [p1item] = list.splice(p1idx, 1);
      list.splice(Math.min(p1idx + 18, list.length), 0, p1item);
    }
  }

  // For Posty: carousels first, Neocardiosim + Enfoglobe FL2 last
  if (filter === 'Posty') {
    const LAST_IDS = [104, 111]; // Neocardiosim, Post Enfoglobe University Florida 2
    const lastItems = list.filter(p => LAST_IDS.includes(p.id));
    list = list.filter(p => !LAST_IDS.includes(p.id));
    list.sort((a, b) => {
      const aCarousel = a.images && a.images.length > 1 ? 1 : 0;
      const bCarousel = b.images && b.images.length > 1 ? 1 : 0;
      return bCarousel - aCarousel;
    });
    list = [...list, ...lastItems];
  }

  if (filter === 'Design') {
    grid.style.display = 'flex';
    grid.style.flexDirection = 'column';
    grid.style.gap = '30px';
    const figmaBase = 'https://www.figma.com/embed?embed_host=share&url=';
    const proto1 = encodeURIComponent('https://www.figma.com/proto/rHPTv0o0VyAr3Sb5Bcnj3A/TfT-Client?node-id=1-2&starting-point-node-id=1%3A2&t=CHYZvhmiYZV6GJJD-1');
    const proto2 = encodeURIComponent('https://www.figma.com/proto/045zTkSWbHV6AmKKf1Iden/Metin-2-client?node-id=40-490&starting-point-node-id=40%3A490&t=LQ6gCT4KFZOVryBS-1');
    grid.innerHTML = `
      <div style="width:100%; height:80vh; border-radius:16px; overflow:hidden; border:1px solid var(--border); box-shadow:0 0 40px rgba(57,255,20,0.08);">
        <iframe style="border:none;" width="100%" height="100%" src="${figmaBase}${proto1}" allowfullscreen></iframe>
      </div>
      <div style="width:100%; height:80vh; border-radius:16px; overflow:hidden; border:1px solid var(--border); box-shadow:0 0 40px rgba(255,57,180,0.08);">
        <iframe style="border:none;" width="100%" height="100%" src="${figmaBase}${proto2}" allowfullscreen></iframe>
      </div>
    `;
    return;
  }
  
  grid.style.display = ''; // zresetuj style
  grid.style.flexDirection = '';
  grid.style.gap = '';

  grid.innerHTML = list.map(p => projectCardHTML(p, true)).join('');
}

// ============================================================
// MODAL & CAROUSEL
// ============================================================
let currentCarouselIndex = 0;
let currentProject = null;

function openModal(id) {
  const p = PROJECTS.find(x => x && x.id === id);
  if (!p) return;
  currentProject = p;
  currentCarouselIndex = 0;

  document.getElementById('modal-cat').textContent   = p.category;
  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-desc').textContent  = p.desc || '';

  const imgEl = document.getElementById('modal-img');
  const modalEl = document.querySelector('.project-modal');
  
  // Reset wszystkich klas modalnych
  modalEl.classList.remove('video-modal', 'landscape-modal', 'portrait-modal', 'carousel-modal');
  imgEl.style.background = p.bg || '#0a0a12';
  
  if (p.video) {
    // WIDEO
    if (p.landscape) {
      modalEl.classList.add('landscape-modal');
    } else {
      modalEl.classList.add('video-modal');
    }
    imgEl.style.background = '#000';
    imgEl.innerHTML = `
      <video src="${p.video}" controls autoplay muted loop
        style="border-radius:20px 20px 0 0;"
        playsinline>
      </video>`;
  } else if (p.images && p.images.length > 1) {
    // KARUZELA — szeroki modal
    modalEl.classList.add('carousel-modal');
    updateCarouselMarkup();
  } else if (p.images && p.images.length === 1) {
    // POJEDYNCZY OBRAZ — wykrywamy proporcje i ustawiamy modal
    const img = new Image();
    img.onload = function() {
      if (this.naturalHeight > this.naturalWidth) {
        // Obraz pionowy (portret) → wąski modal
        modalEl.classList.add('portrait-modal');
      } else {
        // Obraz poziomy lub kwadratowy → szeroki modal
        modalEl.classList.add('landscape-modal');
      }
    };
    img.src = p.images[0];
    imgEl.innerHTML = `<img src="${p.images[0]}" />`;
  } else if (p.emoji) {
    imgEl.innerHTML = `<span style="font-size:100px;opacity:.08;user-select:none">${p.emoji}</span>`;
  } else {
    imgEl.innerHTML = '';
  }

  document.getElementById('modal-tags').innerHTML =
    (p.tags || []).map(t => `<span class="modal-tag">${t}</span>`).join('');

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function updateCarouselMarkup() {
  const imgEl = document.getElementById('modal-img');
  const images = currentProject.images;
  
  let indicators = '';
  for(let i=0; i<images.length; i++) {
    indicators += `<span class="carousel-dot ${i === currentCarouselIndex ? 'active' : ''}" onclick="goToCarouselImage(event, ${i})"></span>`;
  }
  
  imgEl.innerHTML = `
    <div class="carousel-wrap" style="position:relative; width:100%; height:100%; display:flex; align-items:center; justify-content:center;">
      <img src="${images[currentCarouselIndex]}" style="max-width:100%; max-height:100%; object-fit:contain; border-radius:12px;" />
      <button class="carousel-btn prev" onclick="changeCarousel(-1, event)">&#10094;</button>
      <button class="carousel-btn next" onclick="changeCarousel(1, event)">&#10095;</button>
      <div class="carousel-indicators-wrap">${indicators}</div>
    </div>
  `;
}

function changeCarousel(dir, e) {
  if (e) e.stopPropagation();
  const len = currentProject.images.length;
  currentCarouselIndex = (currentCarouselIndex + dir + len) % len;
  updateCarouselMarkup();
}

function goToCarouselImage(e, index) {
  if (e) e.stopPropagation();
  currentCarouselIndex = index;
  updateCarouselMarkup();
}

function closeModal() {
  // Stop any playing video
  const vid = document.querySelector('#modal-img video');
  if (vid) { vid.pause(); vid.src = ''; }
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ============================================================
// SKILL BARS ANIMATION
// ============================================================
let skillsAnimated = false;
function initSkillBars() {
  document.querySelectorAll('.skill-fill').forEach(bar => {
    bar.style.width = '0%';
    setTimeout(() => { bar.style.width = bar.dataset.w + '%'; }, 80);
  });
}

// ============================================================
// MOBILE SIDEBAR
// ============================================================
document.getElementById('sidebar-toggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});

// Close sidebar on outside click (mobile)
document.getElementById('main-content').addEventListener('click', () => {
  document.getElementById('sidebar').classList.remove('open');
});

// ============================================================
// THEME SWITCHER
// ============================================================
function initThemeSwitcher() {
  const checkbox = document.getElementById('theme-checkbox');
  if (!checkbox) return;
  const storedTheme = localStorage.getItem('portfolio_theme') || 'dark';

  if (storedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    checkbox.checked = true;
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    checkbox.checked = false;
  }

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('portfolio_theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('portfolio_theme', 'dark');
    }
  });
}

// ============================================================
// INIT
// ============================================================
(function init() {
  checkAuth();
  initI18n();
  initThemeSwitcher();
  renderFeaturedProjects();
  renderProjects('all'); // pre-render for first visit

  const hash = window.location.hash.replace('#', '') || 'home';
  navigate(hash);
})();
