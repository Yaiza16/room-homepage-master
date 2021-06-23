export default function toggleMenu(){
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    hamburger.addEventListener('click', () =>{
        nav.classList.toggle('nav--opened')

        if (hamburger.classList.contains('hamburger-container--closed')){
            hamburger.classList.remove('hamburger-container--closed')
            hamburger.classList.add('hamburger-container--opened')
        }else if (hamburger.classList.contains('hamburger-container--opened')) {
            hamburger.classList.remove('hamburger-container--opened')
            hamburger.classList.add('hamburger-container--closed')
        } else {
            hamburger.classList.add('hamburger-container--closed')
        }
    })
}