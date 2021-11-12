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

        //animerar länkarna i mobilvyn
        navLinks.forEach((link, index) => {
        
            if(link.style.animation){
                link.style.animation =""
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
            console.log(index/7);
        });
        //Animarear burgaren
        burger.classList.toggle("toggle");
    });
    
}
function alertUser(){
    alert("Skickar meddelande!")
}

navSlide();