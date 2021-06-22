export default function slideImages(e) {
    const buttons = document.querySelectorAll('[data-btn]');
    const bg = document.querySelectorAll('[data-bg]');

    const options = {
        0: {
            title: `Discover innovative ways to decorate`,
            descr: `We provide unmatched quality, comfort, and style for property owners across the country. 
            Our experts combine form and function in bringing your vision to life. Create a room in your 
            own style with our collection and make your property a reflection of you and what you love.`
        },
        1: {
            title: `We are available all across the globe`,
            descr: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
            Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
            store locator. Any questions? Don't hesitate to contact us today.`
        },

        2: {
            title: `Manufactured with the best materials`,
            descr: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
            to ensure that every product is made as perfect and as consistent as possible. With three decades of 
            experience in this industry, we understand what customers want for their home and office.`
        }
    }

    document.addEventListener('keydown', (e) =>{
        //39 = right, 37 = left
        if (e.keyCode == 39){
            setUpIndex('right')
            selectImage('right', indexSelected, previousIndexSelected)
            selectText(indexSelected, previousIndexSelected)
            setUpPreviousIndex('right')
        }
        if (e.keyCode == 37){
            setUpIndex('left')
            selectImage('left', indexSelected, previousIndexSelected)
            selectText(indexSelected, previousIndexSelected)
            setUpPreviousIndex('left')
        }
    })

    const lengthOptions = Object.keys(options).length;
    let index = {
        indexSelected: 0,
        previousIndexSelected: 0
    }
    let indexSelected = 0;
    let previousIndexSelected = 0;
    changeOption()

    function changeOption() {
       buttons.forEach(button =>{
           button.addEventListener('click', e =>{
               setUpOption(e.target)
           } )
       })
    }

    function setUpOption(btn){
        // indexSelected ++;


        if (btn.dataset.btn == 'right'){
            setUpIndex('right')
            selectImage('right', indexSelected, previousIndexSelected)
            selectText(indexSelected, previousIndexSelected)
            setUpPreviousIndex('right')
        }
        if(btn.dataset.btn == 'left'){
            setUpIndex('left')
            selectImage('left', indexSelected, previousIndexSelected)
            selectText(indexSelected, previousIndexSelected)
            setUpPreviousIndex('left')
        }
    };

    function setUpIndex(side){
        if (side == 'right'){
            if (indexSelected <2 && indexSelected>= 0){
                indexSelected++;
            }else{
                indexSelected=0
            }
        }
        if (side == 'left'){
            if (indexSelected <=2 && indexSelected >0){
                indexSelected--
            }else{
                indexSelected=2
            }
        }
    }

    function setUpPreviousIndex(side){
        if (side == 'right'){
            if (previousIndexSelected == 0 || previousIndexSelected==1){
                previousIndexSelected++;
            }else{
                previousIndexSelected=0
            }
        }
        if (side == 'left'){
            if (previousIndexSelected <=2 && previousIndexSelected >0){
                previousIndexSelected--
            }else{
                previousIndexSelected=2
            }
        }
    }
    function selectImage(side, indexSelected, previousIndexSelected){
        bg.forEach(el =>{
            if (el.dataset.bg == previousIndexSelected){
                if (el.classList.contains('hero-bg__item--selected-right')){
                    el.classList.remove('hero-bg__item--selected-right');
                }
                if (el.classList.contains('hero-bg__item--selected-left')){
                    el.classList.remove('hero-bg__item--selected-left');
                }
            }
            if (el.dataset.bg == indexSelected){
                if (side == 'right'){
                    el.classList.add('hero-bg__item--selected-right')
                } 
                if (side == 'left'){
                    el.classList.add('hero-bg__item--selected-left')
                }
            }
        })
    }


    function selectText(indexSelected, previousIndexSelected){
        const intro = document.getElementById('intro')
        const introTitle = document.getElementById('intro-title');
        const introDesc = document.getElementById('intro-description');

        //Add new class
        intro.classList.add('intro--changed')

        // Change innerHTMl when opacity is 0% in animation
        setTimeout(() => {
            introTitle.innerHTML = options[indexSelected].title;
            introDesc.innerHTML = options[indexSelected].descr
        }, 600);

        //Remove class when animation is ended
        intro.addEventListener('animationend', () =>{
            intro.classList.remove('intro--changed')
        })
    }

}