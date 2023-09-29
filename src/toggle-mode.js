let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('light')
  const mode = darkMode ? 'light' : "dark"
  event.currentTarget.queryselector('span').textContent = `${mode} mode ativado!`

  darkMode = !darkMode
})