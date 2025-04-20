const projectDiv = document.querySelectorAll('.projectSection div div div');
const PopUpSection = document.querySelector('.detailedProjectPopUp');
const originalH5 = document.querySelector('.detailedProjectPopUp > h5');
const originalImg = document.querySelector('.detailedProjectPopUp > img');
const forMakescreenDark = document.querySelector('.forMakescreenDark');
const projectLinks = document.querySelector('.projectLinks');
const sofwareUsed = document.querySelector('.sofwareUsed');


for (let projDiv of projectDiv){
    projDiv.addEventListener('click',(ev)=>{
        let sourseOfImg = projDiv.children[0].getAttribute('src');
        originalImg.setAttribute('src', sourseOfImg);
        originalH5.innerHTML = projDiv.children[1].innerHTML;

        if ( originalH5.innerHTML == "INFINITY GLOW - Landing Page"){
            sofwareUsedChangeAttribute(InfinityGlow);
        }
        else if ( originalH5.innerHTML == "ICONOGRAPHY - Boxing"){
            sofwareUsedChangeAttribute(boxing);
            
        }
        else if ( originalH5.innerHTML == "Ti - UI/UX Case Study"){
            sofwareUsedChangeAttribute(ti);
            
        }
        else if ( originalH5.innerHTML == "yucuca - Cupcake Branding"){
            sofwareUsedChangeAttribute(yucuca);
            
        }
        else if ( originalH5.innerHTML == "Once Upon A Shelf - register page"){
            sofwareUsedChangeAttribute(OnceUponAShelf);
            
        }
        else if ( originalH5.innerHTML == "MANKINDNESS photography blog"){
            sofwareUsedChangeAttribute(mankindness);
            
        }
        else if ( originalH5.innerHTML == "MOVIE NIGHT - pricing page"){
            sofwareUsedChangeAttribute(movieNight);
            
        }
        else if ( originalH5.innerHTML == "CanRush Website"){
            sofwareUsedChangeAttribute(canRush);
            
        }
        function sofwareUsedChangeAttribute(nameOfProject){
            projectLinks.children[1].setAttribute('href',nameOfProject.beLink);
            projectLinks.children[2].setAttribute('href',nameOfProject.gitLink);

            sofwareUsed.children[0].setAttribute('src',nameOfProject.tools[0]);
            sofwareUsed.children[1].setAttribute('src',nameOfProject.tools[1]);
            sofwareUsed.children[2].setAttribute('src',nameOfProject.tools[2]);
            sofwareUsed.children[3].setAttribute('src',nameOfProject.tools[3]);
        }
        PopUpSection.classList.add('hide');
        forMakescreenDark.classList.add('extra');
        forMakescreenDark.addEventListener('click',()=>{
            PopUpSection.classList.remove('hide');
            forMakescreenDark.classList.remove('extra');
        })
    })
}

const InfinityGlow = {
    beLink : 'https://www.behance.net/gallery/221381199/INFINITY-GLOW-Landing-page',
    gitLink : '',
    tools : ['img/AI.png','img/PR.png','img/figma.png','img/PS.png']

}
const boxing = {
    beLink : 'https://www.behance.net/gallery/219769443/ICONOGRAPHY-Boxing',
    gitLink : '',
    tools : ['img/AI.png','img/figma.png','img/PS.png','']

}
const ti = {
    beLink : 'https://www.behance.net/gallery/220764351/Ti-UIUX-Case-Study',
    gitLink : '',
    tools : ['img/AI.png','img/PR.png','img/figma.png','img/PS.png']

}
const yucuca = {
    beLink : 'https://www.behance.net/gallery/218311969/yucuca-Cupcake-Branding',
    gitLink : '',
    tools : ['img/AI.png','img/PS.png','img/ID.png','']

}
const OnceUponAShelf = {
    beLink : 'https://www.behance.net/gallery/222266803/Once-Upon-A-Shelf-register-web-form-page',
    gitLink : 'https://github.com/asif-ta/OnceUponAShelf',
    tools : ['img/AI.png','img/figma.png','img/PS.png','']

}
const mankindness = {
    beLink : 'https://www.behance.net/gallery/221570419/MANKINDNESS-photography-blog-landing-page',
    gitLink : 'https://github.com/asif-ta/mankindness',
    tools : ['img/AI.png','img/PR.png','img/figma.png','img/PS.png']

}
const movieNight = {
    beLink : 'https://www.behance.net/gallery/221920993/MOVIE-NIGHT-pricing-page',
    gitLink : 'https://github.com/asif-ta/MovieNight',
    tools : ['img/AI.png','img/PR.png','img/figma.png','img/PS.png']

}
const canRush = {
    beLink : 'https://www.behance.net/gallery/220907439/CanRush-Website',
    gitLink : 'https://github.com/asif-ta/CanRush',
    tools : ['img/AI.png','img/PR.png','img/figma.png','img/PS.png']

}