const fs = require('fs');

const authLogic = `
// ============================================================
// AUTH LOGIC
// ============================================================
const SITE_PASSWD = "patryk2026";

function checkAuth() {
  const isAuth = sessionStorage.getItem('portfolio_auth') === 'true';
  const authScreen = document.getElementById('auth-screen');
  const appContainer = document.querySelector('.app');

  if (isAuth) {
    if (authScreen) authScreen.classList.add('hidden');
    if (appContainer) appContainer.classList.add('visible');
  } else {
    initAuthListeners();
  }
}

function initAuthListeners() {
  const input = document.getElementById('auth-input');
  const btn = document.getElementById('auth-btn');
  const error = document.getElementById('auth-error');

  if (!input || !btn) return;

  const tryUnlock = () => {
    if (input.value === SITE_PASSWD) {
      sessionStorage.setItem('portfolio_auth', 'true');
      document.getElementById('auth-screen').classList.add('hidden');
      document.querySelector('.app').classList.add('visible');
    } else {
      error.classList.add('show');
      input.value = '';
      input.focus();
      setTimeout(() => error.classList.remove('show'), 3000);
    }
  };

  btn.addEventListener('click', tryUnlock);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') tryUnlock();
  });
}
`;

let appjs = fs.readFileSync('app.js', 'utf8');

// 1. Prepend auth logic
appjs = authLogic + '\n' + appjs;

// 2. Add initAuth() to init()
appjs = appjs.replace(/function init\(\) \{/, 'function init() {\n  checkAuth();');

// 3. Update setLanguage to handle placeholders
appjs = appjs.replace(
  /document\.querySelectorAll\('\[data-i18n\]'\)\.forEach\(el => \{/g,
  `document.querySelectorAll('[data-i18n]').forEach(el => {`
);
// I'll just manually rewrite the setLanguage a bit better
const setLangSearch = `function setLanguage(lang) {
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
  });`;

const setLangReplace = `function setLanguage(lang) {
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
  });`;

appjs = appjs.replace(setLangSearch, setLangReplace);

// 4. Add auth translations to each language object
const authStrings = {
  pl: {
    auth_title: "Dostęp zastrzeżony",
    auth_subtitle: "Ta strona jest chroniona hasłem. Wprowadź klucz dostępu, aby kontynuować.",
    auth_placeholder: "Hasło...",
    auth_btn: "WEJDŹ",
    auth_error: "Błędne hasło. Spróbuj ponownie."
  },
  en: {
    auth_title: "Restricted Access",
    auth_subtitle: "This page is password protected. Please enter the access key to continue.",
    auth_placeholder: "Password...",
    auth_btn: "ENTER",
    auth_error: "Incorrect password. Try again."
  },
  de: {
    auth_title: "Eingeschränkter Zugriff",
    auth_subtitle: "Diese Seite ist passwortgeschützt. Bitte geben Sie den Zugangsschlüssel ein, um fortzufahren.",
    auth_placeholder: "Passwort...",
    auth_btn: "EINTRETEN",
    auth_error: "Falsches Passwort. Versuchen Sie es erneut."
  }
};

// Inject these into TRANSLATIONS
Object.keys(authStrings).forEach(lang => {
    const langStart = appjs.indexOf(\`\${lang}: {\`);
    if (langStart !== -1) {
        const insertionPoint = appjs.indexOf('// NEW ONES', langStart);
        if (insertionPoint !== -1) {
            let str = '';
            Object.entries(authStrings[lang]).forEach(([k, v]) => {
                str += \`    \${k}: "\${v}",\\n\`;
            });
            appjs = appjs.slice(0, insertionPoint) + str + '    ' + appjs.slice(insertionPoint);
        }
    }
});

fs.writeFileSync('app.js', appjs);
console.log('App.js with auth and placeholders updated.');
