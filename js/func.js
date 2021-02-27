export function initTheme(SETTINGS = localStorage.getItem('SETTINGS')) {
  const _themeBtn = document.querySelector('#theme');

  SETTINGS = SETTINGS ? JSON.parse(localStorage.getItem('SETTINGS')) : {};

  if (SETTINGS.theme === 'dark') {
    switchToDarkTheme();
  }

  SETTINGS.theme = SETTINGS.theme ? SETTINGS.theme : 'light';

  _themeBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (SETTINGS.theme === 'light') {
      // localStorage.setItem('theme', 'dark');
      SETTINGS.theme = 'dark';
      switchToDarkTheme();
    } else {
      // localStorage.setItem('theme', 'light');
      SETTINGS.theme = 'light';
      switchToLightTheme();
    }

    updSettings(SETTINGS);
  });
}

export function switchToLightTheme() {
  let icon = document.querySelector('#theme i');
  let elem = document.documentElement;

  icon.className = 'icon-moon';
  elem.style.setProperty('--text', 'var(--light-text)');
  elem.style.setProperty('--header', 'var(--light-header)');
  elem.style.setProperty('--main', 'var(--light-main)');
  elem.style.setProperty('--footer', 'var(--light-footer)');
  elem.style.setProperty('--button', 'var(--light-button)');
}

export function switchToDarkTheme() {
  let icon = document.querySelector('#theme i');
  let elem = document.documentElement;

  icon.className = 'icon-sun';
  elem.style.setProperty('--text', 'var(--dark-text)');
  elem.style.setProperty('--header', 'var(--dark-header)');
  elem.style.setProperty('--main', 'var(--dark-main)');
  elem.style.setProperty('--footer', 'var(--dark-footer)');
  elem.style.setProperty('--button', 'var(--dark-button)');
}

export function updSettings(SETTINGS) {
  localStorage.setItem('SETTINGS', JSON.stringify(SETTINGS));
}
