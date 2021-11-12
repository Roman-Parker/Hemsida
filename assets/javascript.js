/** funktion för att animera menyn i mobilvyn */
const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    /**Lista med alla länkar i menyn */
    const navLinks = document.querySelectorAll('.nav-links li');
    
    //Väntar på att användaren ska klicka på "burgaren"
    burger.addEventListener('click', ()=> {
        //öppnar och stänger menyn i mobilvyn
        nav.classList.toggle('nav-active')

        //animerar länkarna i mobilvyn, index=antalet länkar i menyn
        //gör det enkelt att ändra antalet länkar i menyn utan att ändra på animeringen
        navLinks.forEach((link, index) => {
            
            //Kollar om menyn redan är på skärmen
            if(link.style.animation){
                link.style.animation =""
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });
        //Animarear burgaren
        burger.classList.toggle("toggle");
    });
    
}
function alertUser(){
    alert("Skickar meddelande!")
}

navSlide();