export default function toggleMenu(){
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    hamburger.addEventListener('click', () =>{
        nav.classList.toggle('nav--opened')
        hamburger.classList.toggle('hamburger-closed')
    })
}