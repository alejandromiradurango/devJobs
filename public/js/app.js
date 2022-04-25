document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelector('.lista-conocimientos')

    if(skills){
        skills.addEventListener('click', addSkills);
    }
});

const skills = new Set();

const addSkills = e => {
    if (e.target.tagName === 'LI') {
        if (e.target.classList.contains('activo')) {
            // Quitarlo del set y la clase
            skills.delete(e.target.textContent)
            e.target.classList.remove('activo')
        } else {
            // Addregarlo al set y la clase
            skills.add(e.target.textContent)
            e.target.classList.add('activo')
        }
    } else {
        null
    }

    const skillsArray = [...skills]
    document.querySelector('#skills').value = skillsArray;
}