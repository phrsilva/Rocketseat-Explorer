let darkMode = true
const btnToggle = document.getElementById('toggle-mode')

btnToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light')
    
    const mode = darkMode ? 'Modo Claro' : 'Modo Escuro'
    event.currentTarget.querySelector('span').textContent = `${mode} Ativado`
    darkMode = !darkMode

})