const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Using regex for more robust matching of tags with potential whitespace
function addI18n(tag, content, key, isHtml = false) {
    const attr = isHtml ? 'data-i18n-html' : 'data-i18n';
    // Escape specific content if needed, but here we expect unique strings
    const regex = new RegExp(`(<${tag}[^>]*>)${content}(</${tag}>)`, 'g');
    html = html.replace(regex, (match, p1, p2) => {
        if (p1.includes('data-i18n')) return match; // Skip if already has it
        return `${p1.slice(0, -1)} ${attr}="${key}">${content}${p2}`;
    });
}

// Projects Page
addI18n('h1', 'PROJEKTY', 'page_proj_title');
addI18n('p', 'Kolekcja moich prac kreatywnych', 'page_proj_subtitle');

// About Me section
addI18n('div', 'CERTYFIKATY', 'cert_label');
addI18n('div', 'DOŚWIADCZENIE', 'exp_title');
addI18n('div', 'UMIEJĘTNOŚCI', 'skills_label');
addI18n('div', 'WYKSZTAŁCENIE', 'edu_title2');
addI18n('div', 'JĘZYKI', 'lang_label');

// Experience items (these might have slightly different whitespace in reality)
addI18n('h4', 'Projektant graficzny', 'job_title_1');
addI18n('h4', 'Grafik freelancer', 'job_title_2');
addI18n('h4', 'Grafik komputerowy', 'job_title_3');
addI18n('h4', 'Projektant graficzny \\(Staż\\)', 'job_title_4');

// Education
addI18n('h4', 'Grafika Komputerowa', 'edu_1_title');

// Languages
addI18n('span', 'Polski', 'lang_pl');
addI18n('span', 'Angielski', 'lang_en');
addI18n('span', 'Niemiecki', 'lang_de');
addI18n('span', 'Ojczysty', 'lvl_native');

// Contact Page Header (currently static in HTML)
addI18n('h1', 'KONTAKT', 'menu_contact'); // Aligning with menu_contact key "KONTAKT"
addI18n('p', 'Nawiąż współpracę', 'menu_contact_sub'); // Need to add this key to app.js

fs.writeFileSync('index.html', html);
console.log('Final i18n tag injection complete.');
