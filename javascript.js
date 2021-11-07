const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
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

navSlide();