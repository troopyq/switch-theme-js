function switchToDarkTheme() {
  let icon = document.querySelector('#theme i');
  let elem = document.documentElement;

  try {
    icon.className = 'icon-moon';
  } catch {}
  elem.style.setProperty('--text', 'var(--dark-text)');
  elem.style.setProperty('--header', 'var(--dark-header)');
  elem.style.setProperty('--main', 'var(--dark-main)');
  elem.style.setProperty('--footer', 'var(--dark-footer)');
  elem.style.setProperty('--button', 'var(--dark-button)');
}

if (localStorage.getItem('SETTINGS')) {
  let st = JSON.parse(localStorage.getItem('SETTINGS')) || {};
  if (st.theme == 'dark') {
    switchToDarkTheme();
  }
}
