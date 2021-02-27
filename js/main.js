const _themeBtn = document.querySelector('#theme');

const SETTINGS = {};

SETTINGS.theme = localStorage.getItem('theme') || 'light';

if (SETTINGS.theme == 'dark') {
  switchToDarkTheme();
}

_themeBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (SETTINGS.theme === 'light') {
    localStorage.setItem('theme', 'dark');
    SETTINGS.theme = 'dark';
    switchToDarkTheme();
  } else {
    localStorage.setItem('theme', 'light');
    SETTINGS.theme = 'light';
    switchToLightTheme();
  }
});

function switchToDarkTheme() {
  let icon = _themeBtn.querySelector('i');
  let elem = document.documentElement;

  icon.className = 'icon-moon';
  elem.style.setProperty('--text', 'var(--dark-text)');
  elem.style.setProperty('--header', 'var(--dark-header)');
  elem.style.setProperty('--main', 'var(--dark-main)');
  elem.style.setProperty('--footer', 'var(--dark-footer)');
  elem.style.setProperty('--button', 'var(--dark-button)');
}
function switchToLightTheme() {
  let icon = _themeBtn.querySelector('i');
  let elem = document.documentElement;

  icon.className = 'icon-sun';
  elem.style.setProperty('--text', 'var(--light-text)');
  elem.style.setProperty('--header', 'var(--light-header)');
  elem.style.setProperty('--main', 'var(--light-main)');
  elem.style.setProperty('--footer', 'var(--light-footer)');
  elem.style.setProperty('--button', 'var(--light-button)');
}
